import { UxGlobal } from '@core/classes/ux-global.class';
import { UserExperienceFactoryInterface } from '@core/interfaces/user-experience-factory.interface';

/**
 * Registers an experience with the UX2 framework.
 */
export function registerExperience(id: string, factory: UserExperienceFactoryInterface): void {
    UxGlobal.get().registerExperience(id, factory);
}

// @copyright thebytebar.
