import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
import { UserExperienceInterface } from '@core/interfaces/user-experience.interface';
export declare class UxElement {
    experiences: {
        [key: string]: UserExperienceInterface;
    };
    /**
     * A reference to the HTML element.
     */
    private element;
    /**
     * Determines if the refresh process is currently happening.
     */
    private isRefreshInProgress;
    /**
     * The constructor.
     */
    constructor(element: HTMLElement);
    refresh(): void;
    /**
     * Gets the next HTMLExperienceElement parent of the current element.
     */
    parent(): HTMLExperienceElement | undefined;
    /**
     * Gets the HTMLExperienceElement children of the current element.
     */
    children(): HTMLExperienceElement[];
}
