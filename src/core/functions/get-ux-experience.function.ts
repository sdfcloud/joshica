import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
import { UserExperienceInterface } from '@core/interfaces/user-experience.interface';
import { initExperience } from '@core/functions/init-experience.function';

/**
 * Returns an element's UX Experince based on the selector.
 */
export function getUxExperience(element: HTMLExperienceElement, experience: string): UserExperienceInterface | undefined {
    if (element?.ux) {
        if (!element.ux.experiences[experience]) {
            return initExperience(element, experience);
        }

        return element.ux.experiences[experience];
    }

    return undefined;
}

// @copyright thebytebar.
