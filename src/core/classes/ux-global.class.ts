import { UserExperienceFactoryInterface } from '@core/interfaces/user-experience-factory.interface';
import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
import { UxElement } from '@core/classes/ux-element.class';

/**
 * This helper class is a singleton instance and is meant to provide the public UX2
 * API with the core logic to make UX2 function.
 */
export class UxGlobal {

    /**
     * The instance of this class.
     */
    private static instance: UxGlobal;

    /**
     * A map of factories for binding experiences to elements.
     */
    public experienceFactories: {
        [key: string]: UserExperienceFactoryInterface
    };

    /**
     * The constructor
     */
    private constructor() {
        this.experienceFactories = {};
    }

    /**
     * Returns the singleton instance of this class.
     */
    public static get(): UxGlobal {
        if (!UxGlobal.instance) {
            UxGlobal.instance = new UxGlobal();
        }

        return UxGlobal.instance;
    }

    /**
     * Registers an experience within the framework. It take in a factory ready to be bound to
     * an element.
     */
    public registerExperience(id: string, factory: UserExperienceFactoryInterface): void {
        this.experienceFactories[id] = factory;
    }

    /**
     * Returns an HTMLExperienceElement. If the element is not an HTMLExperienceElement, then
     * this method will create the HTMLExperienceElement from the HTMLElement passed in.
     */
    public getHtmlExperienceElement(element: HTMLElement): HTMLExperienceElement {
        if (!(element as HTMLExperienceElement).ux) {
            (element as HTMLExperienceElement).ux = new UxElement(element);
        }

        return element as HTMLExperienceElement;
    }

    /**
     * Initializes ux experiences from the DOM.
     */
    public refresh(): void {
        const uxElements: NodeListOf<HTMLElement> = document.querySelectorAll('[ux]');
        uxElements.forEach((element: HTMLElement | HTMLExperienceElement) => {
            const uxElement = this.getHtmlExperienceElement(element);
            const hasUxParentElement = !!uxElement.ux.parent();

            if (!hasUxParentElement) {
                uxElement.ux.refresh();
            }
        });
    }

    /**
     * Finds and returns the HTMLExperienceElement parent of any HTMLElement passed in.
     */
    public getHtmlExperienceElementParent(element: HTMLElement): HTMLExperienceElement | undefined {
        var parentElement: HTMLElement | null = element.parentElement;
        if (!parentElement) {
            return undefined;
        } else if (parentElement && parentElement.getAttribute('ux')) {
            return this.getHtmlExperienceElement(parentElement);
        };

        return this.getHtmlExperienceElementParent(parentElement);
    }

    /**
     * Returns an array of all the HTMLExperienceElement children of any HTMLElement
     */
    public getHtmlExperienceElementChildren(element: HTMLElement): Array<HTMLExperienceElement> {
        const possibleChildren: NodeListOf<HTMLExperienceElement> = element.querySelectorAll('[ux]');
        const childrenElements: HTMLExperienceElement[] = [];
        possibleChildren.forEach((possibleChildElement: HTMLExperienceElement) => {
            const childParentElement = this.getHtmlExperienceElementParent(possibleChildElement);
            if (childParentElement === element) {
                childrenElements.push(this.getHtmlExperienceElement(possibleChildElement));
            }
        });

        return childrenElements;
    }

}

// @copyright thebytebar.
