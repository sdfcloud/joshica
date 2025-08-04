import { UxElement } from '@core/classes/ux-element.class';
import { UxElementList } from '@core/classes/ux-element-list.class';

export interface HTMLExperienceElement extends HTMLElement {

    /**
     * A method that allows you to access th HTMLElement's experience instance.
     */
    ux: UxElement;

    /**
     * A string that represents the unique identifier of the element.
     */
    uxid: string;

    /**
     * A DOMTokenList that contains the list of experiences applied to the element.
     */
    uxList: UxElementList;

}

// @copyright TheByteBar
