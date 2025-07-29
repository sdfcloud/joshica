import { CoreExperience } from '@joshica/ux/core';
export declare class BehaviorFocusTrapExperience extends CoreExperience {
    private focusableElements;
    private first;
    private last;
    private handleKeyDown;
    /**
     * On init event hook.
     */
    onInit(): void;
    onRefresh(): void;
    /**
     * Refreshes the focusable elements within the component.
     */
    refreshFocusableElements(): void;
    /**
     * Returns the first focusable element within the component.
     */
    getFocusableElements(): NodeListOf<HTMLElement>;
    /**
     * Handles the keydown event to trap focus within the component.
     */
    private _handleKeyDown;
    /**
     * On destroy event hook.
     */
    onDestroy(): void;
}
