import { Experience } from '@joshica/ux/core';
import { CoreExperience } from '@joshica/ux/core';

@Experience({
    id: 'ariaLabelCheckBehavior'
})
export class AriaLabelCheckBehavior extends CoreExperience {

    /**
     * onRefresh event hook.
     */
    public onRefresh(): void {
        if (!this.isAriaLabelPresent()) {
            console.warn('A11y warning: HtmlExperienceElement[' + this.element.uxid + '] is missing an aria-label or an aria-labelledby attribute.');
        }
    }

    /**
     * Checks to see if the aria-label or aria-labelledby attribute is present on the element.
     */
    public isAriaLabelPresent(): boolean {
        return this.element.hasAttribute('aria-label') || this.element.hasAttribute('aria-labelledby');
    }

}
