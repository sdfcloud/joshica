import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
import { UserExperienceInterface } from '@core/interfaces/user-experience.interface';
/**
 * Returns an element's UX Experince based on the selector.
 */
export declare function getUxExperience(element: HTMLExperienceElement, experience: string): UserExperienceInterface | undefined;
