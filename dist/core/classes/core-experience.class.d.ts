import { UserExperienceInterface } from '@core/interfaces/user-experience.interface';
import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
/**
 * The abstract class all experiences should inheret from.
 */
export declare abstract class CoreExperience implements UserExperienceInterface {
    /**
     * The HTMLElement the experience is tied to. The reason it is defined
     * as a HTMLExperienceElement is because UX2 adds a 'uxs' object to the
     * HTMLElement that will contain the instances of the experiences tied
     * to that particular HTMLElement.
     */
    element: HTMLExperienceElement;
    /**
     * The constructor.
     */
    constructor(element: HTMLExperienceElement);
    /**
     * Calls refresh on the Ux element.
     */
    refresh(): void;
    /**
     * Adds a user experience to the element.
     */
    requireUx(ux: string): void;
    /**
     * Removes a user experience from the element.
     */
    removeUx(ux: string): void;
}
