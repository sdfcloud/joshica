import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
import { UxGlobal } from '@core/classes/ux-global.class';

/**
 * Returns an element's UX based on the selector.
 */
export function uxQuerySelector(selector: string): HTMLExperienceElement | undefined {
    const element = document.querySelector(selector + '[ux]') as HTMLExperienceElement;

    if (element) {
        if (element.ux) {
            return element;
        } else {
            const uxElement = UxGlobal.get().getHtmlExperienceElement(element)
            uxElement.ux.refresh();

            return uxElement;
        }
    }

    return undefined;
}

// @copyright TheByteBar
