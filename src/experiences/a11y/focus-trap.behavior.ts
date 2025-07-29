import { RegisterExperience } from '@joshica/ux/core';
import { CoreExperience } from '@joshica/ux/core';

@RegisterExperience({
    id: 'behaviorFocusTrap'
})
export class BehaviorFocusTrapExperience extends CoreExperience {

    private focusableElements: NodeListOf<HTMLElement>;
    private first: HTMLElement;
    private last: HTMLElement;
    private handleKeyDown: (e: KeyboardEvent) => void;

    /**
     * On init event hook.
     */
    public onInit(): void {
        document.addEventListener('keydown', this._handleKeyDown.bind(this));
    }

    public onRefresh(): void {
        this.refreshFocusableElements();
    }

    /**
     * Refreshes the focusable elements within the component.
     */
    public refreshFocusableElements(): void {
        this.focusableElements = this.element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;

        if (this.focusableElements.length === 0) return;

        this.first = this.focusableElements[0];
        this.last = this.focusableElements[this.focusableElements.length - 1];
    }

    /**
     * Returns the first focusable element within the component.
     */
    public getFocusableElements(): NodeListOf<HTMLElement> {
        return this.focusableElements;
    }

    /**
     * Handles the keydown event to trap focus within the component.
     */
    private _handleKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                if (this.first && document.activeElement === this.first) {
                    event.preventDefault();
                    this.last.focus();
                }
            } else {
                if (this.last && document.activeElement === this.last) {
                    event.preventDefault();
                    this.first.focus();
                }
            }
        }
    };

    /**
     * On destroy event hook.
     */
    public onDestroy(): void {
        if (this.handleKeyDown) {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
    }
}

// @copyright sdfcloud.
