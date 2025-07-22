import { UserExperienceInterface } from '@core/interfaces/user-experience.interface';
import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';

/**
 * The abstract class all experiences should inheret from.
 */
export abstract class CoreExperience implements UserExperienceInterface {

    /**
     * The HTMLElement the experience is tied to. The reason it is defined
     * as a HTMLExperienceElement is because UX2 adds a 'uxs' object to the
     * HTMLElement that will contain the instances of the experiences tied
     * to that particular HTMLElement.
     */
    public element: HTMLExperienceElement;

    /**
     * The constructor.
     */
    public constructor(element: HTMLExperienceElement) {
        this.element = element;
    }

    /**
     * Calls refresh on the Ux element.
     */
    public refresh(): void {
        this.element.ux.refresh();
    }

    /**
     * Adds a user experience to the element.
     */
    public requireUx(ux: string): void {
        this.element.uxList.add(ux);
    }

    /**
     * Removes a user experience from the element.
     */
    public removeUx(ux: string): void {
        this.element.uxList.remove(ux);
    }

}

// @copyright sdfcloud.
