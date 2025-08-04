import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';

/**
 * Returns an element's UX based on the selector.
 */
export function uxQuerySelectorAll(selector: string): HTMLExperienceElement[] | undefined {
    const elements = Array.from(document.querySelectorAll(selector));

    const filteredElements = elements.filter((element) => (element as HTMLExperienceElement).ux !== undefined);

    return filteredElements as HTMLExperienceElement[];
}

// @copyright TheByteBar
