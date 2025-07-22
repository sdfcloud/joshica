import { UserExperienceFactoryInterface } from '@core/interfaces/user-experience-factory.interface';
import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
/**
 * This helper class is a singleton instance and is meant to provide the public UX2
 * API with the core logic to make UX2 function.
 */
export declare class UxGlobal {
    /**
     * The instance of this class.
     */
    private static instance;
    /**
     * A map of factories for binding experiences to elements.
     */
    experienceFactories: {
        [key: string]: UserExperienceFactoryInterface;
    };
    /**
     * The constructor
     */
    private constructor();
    /**
     * Returns the singleton instance of this class.
     */
    static get(): UxGlobal;
    /**
     * Registers an experience within the framework. It take in a factory ready to be bound to
     * an element.
     */
    registerExperience(id: string, factory: UserExperienceFactoryInterface): void;
    /**
     * Returns an HTMLExperienceElement. If the element is not an HTMLExperienceElement, then
     * this method will create the HTMLExperienceElement from the HTMLElement passed in.
     */
    getHtmlExperienceElement(element: HTMLElement): HTMLExperienceElement;
    /**
     * Initializes ux experiences from the DOM.
     */
    refresh(): void;
    /**
     * Finds and returns the HTMLExperienceElement parent of any HTMLElement passed in.
     */
    getHtmlExperienceElementParent(element: HTMLElement): HTMLExperienceElement | undefined;
    /**
     * Returns an array of all the HTMLExperienceElement children of any HTMLElement
     */
    getHtmlExperienceElementChildren(element: HTMLElement): Array<HTMLExperienceElement>;
}
