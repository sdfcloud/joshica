import { UxGlobal } from '@core/classes/ux-global.class';
import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
import { UserExperienceInterface } from '@core/interfaces/user-experience.interface';

export function initExperience(element: HTMLExperienceElement, experience: string): UserExperienceInterface | undefined {
    if (element.ux?.experiences[experience]) {
        return undefined;
    }

    if (UxGlobal.get().experienceFactories[experience]) {
        const experienceFactory = UxGlobal.get().experienceFactories[experience];
        const experienceInstance = experienceFactory(element);

        if (experienceInstance?.onInit) {
            experienceInstance.onInit();
        }

        element.ux.experiences[experience] = experienceInstance;

        return experienceInstance;
    }

    return undefined;
}

// @copyright sdfcloud.
