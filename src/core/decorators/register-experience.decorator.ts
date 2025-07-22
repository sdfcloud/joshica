import { CoreExperience } from '@core/classes/core-experience.class';
import { UxGlobal } from '@core/classes/ux-global.class';
import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
import { ExperienceOptionsInterface } from '@core/interfaces/experience-options.interface';

export function RegisterExperience(options: ExperienceOptionsInterface) {
    return (UserExperience: Function) => {
        UxGlobal.get().registerExperience(
            options.id,
            (element: HTMLExperienceElement) => {
                if (options.imports) {
                    options.imports.forEach((ux: string) => {
                        element.uxList.add(ux);
                    });
                }
                const experience = new (UserExperience as any)(element) as CoreExperience;

                return experience;
            }
        );
    }
}

// @copyright sdfcloud.
