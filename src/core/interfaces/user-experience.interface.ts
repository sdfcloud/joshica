import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';

export interface UserExperienceInterface {

    /**
     * The HTMLElement the experience is tied to. The reason it is defined
     * as a HTMLExperienceElement is because UX2 adds a 'uxs' object to the
     * HTMLElement that will contain the instances of the experiences tied
     * to that particular HTMLElement.
     */
    element: HTMLExperienceElement;

    /**
     * A life cycle hook method that will be called right after
     * the experience instance object is created.
     */
    onInit?: () => void;

    /**
     * A life cycle hook method that will be called every time
     * the experience is refreshed.
     */
    onRefresh?: () => void;

}

// @copyright TheByteBar
