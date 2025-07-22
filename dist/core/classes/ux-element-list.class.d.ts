import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
export declare class UxElementList {
    /**
     * Contains a space separated string that represents the list of values.
     */
    value: string;
    /**
     * Contains an array of strings that represents the list of values.
     */
    list: string[];
    /**
     * A reference to the HTMLExperienceElement.
     */
    private element;
    /**
     * The constructor.
     */
    constructor(element: HTMLExperienceElement);
    /**
     * Adds a value to the list.
     */
    add(ux: string): void;
    /**
     * Removes a value from the list.
     */
    remove(ux: string): void;
    /**
     * Checks to see if a value contains in the list.
     */
    contains(ux: string): boolean;
}
