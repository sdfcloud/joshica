import { CoreExperience } from '@joshica/ux/core';
import './ux-modal.experience.scss';
export declare class UxModalExperience extends CoreExperience {
    /**
     * A boolean that indicates whether the modal is currently hidden or not.
     */
    private hidden;
    private behaviorFocusTrap;
    /**
     * The onInit event hook.
     */
    onInit(): void;
    /**
     * The onRefresh event hook.
     */
    onRefresh(): void;
    /**
     * Shows the modal.
     */
    open(): void;
    /**
     * Hides the modal.
     */
    close(): void;
    /**
     * Checks if the modal is currently hidden.
     */
    isOpen(): boolean;
    /**
     * Initializes the modal element state.
     */
    private _initModalElementState;
    /**
     * Initializes the escape key listener for closing the modal.
     */
    private _initEscapeKeyEventListener;
    /**
     * Initializes the body mouse click listener to prevent clicks inside the modal from propagating.
     */
    private _initBodyMouseClickListener;
    /**
     * Refreshes the modal display state.
     */
    private _refreshModalDisplayState;
    /**
     * Focuses on the first focusable element within the modal.
     */
    private _focusOnFirstInteractiveElement;
}
