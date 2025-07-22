import { UserExperienceInterface } from '@core/interfaces/user-experience.interface';
import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';

export type UserExperienceFactoryInterface = (element: HTMLExperienceElement) => UserExperienceInterface;

// @copyright sdfcloud.
