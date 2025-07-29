import { CoreExperience } from '@joshica/ux/core';
export declare class AriaLabelCheckBehavior extends CoreExperience {
    /**
     * onRefresh event hook.
     */
    onRefresh(): void;
    /**
     * Checks to see if the aria-label or aria-labeledby attribute is present on the element.
     */
    isAriaLabelPresent(): boolean;
}
