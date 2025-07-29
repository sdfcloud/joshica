import { CoreExperience } from '@joshica/ux/core';
import './ui-modal.experience.scss';
export declare class UiModalExperience extends CoreExperience {
    /**
     * Loads the uxModal experience.
     */
    private uxModal;
    /**
     * onInit event hook.
     */
    onInit(): void;
    /**
     * Shows the modal.
     */
    open(): void;
    /**
     * Closes the modal.
     */
    close(): void;
    /**
     * Checks if the modal is currently hidden.
     */
    isOpen(): boolean;
    /**
     * Initializes the modal element to setup proper HTML markup.
     */
    private _initModalUi;
    /**
     * Injects a modal container.
     */
    private _initModalInjectContainer;
    /**
     * Initializes the escape key event listener to close the modal.
     */
    private _initBodyMouseClickListener;
}
