// import { RegisterExperience } from '@joshica/ux/core';
// import { CoreExperience } from '@joshica/ux/core';
// import { RefreshExperience } from '@joshica/ux/core';
// import { LoadExperience } from '@joshica/ux/core';
// import { BehaviorFocusTrapExperience } from '@joshica/ux';

// import './ux-modal.experience.scss';


// @RegisterExperience({
//     id: 'uxModal',
//     imports: ['allyAriaLabelCheck', 'behaviorFocusTrap']
// })
// export class UxModalExperience extends CoreExperience {

//     /**
//      * A boolean that indicates whether the modal is currently hidden or not.
//      */
//     @RefreshExperience()
//     private hidden: boolean = true;

//     @LoadExperience('behaviorFocusTrap')
//     private behaviorFocusTrap: BehaviorFocusTrapExperience;

//     /**
//      * The onInit event hook.
//      */
//     public onInit(): void {
//         this._initEscapeKeyEventListener();
//         this._initBodyMouseClickListener();
//         this._initModalElementState();
//     }

//     /**
//      * The onRefresh event hook.
//      */
//     public onRefresh(): void {
//         this._refreshModalDisplayState();
//     }

//     /**
//      * Shows the modal.
//      */
//     public open(): void {
//         this.hidden = false;
//         document.body.style.overflow = 'hidden';
//         setTimeout(() => {
//             this._focusOnFirstInteractiveElement();
//         },100);
//     }

//     /**
//      * Hides the modal.
//      */
//     public close(): void {
//         this.hidden = true;
//         document.body.style.overflow = '';
//     }

//     /**
//      * Checks if the modal is currently hidden.
//      */
//     public isOpen(): boolean {
//         return !this.hidden;
//     }

//     /**
//      * Initializes the modal element state.
//      */
//     private _initModalElementState(): void {
//         this.element.classList.add('joshica-ux-modal');
//         this.element.setAttribute('role', 'dialog');
//         this.element.setAttribute('aria-modal', 'true');
//     }

//     /**
//      * Initializes the escape key listener for closing the modal.
//      */
//     private _initEscapeKeyEventListener(): void {
//         document.addEventListener('keydown', (event) => {
//             if (event.key === 'Escape') {
//                 if (!this.hidden) {
//                     this.close();
//                 }
//             }
//         });
//     }

//     /**
//      * Initializes the body mouse click listener to prevent clicks inside the modal from propagating.
//      */
//     private _initBodyMouseClickListener(): void {
//         this.element.addEventListener('click', (event: MouseEvent) => {
//             event.stopPropagation();
//         });

//         document.body.addEventListener('click', (event: MouseEvent) => {
//             if (this.isOpen()) {
//                 this.close();
//             }
//         });
//     }

//     /**
//      * Refreshes the modal display state.
//      */
//     private _refreshModalDisplayState(): void {
//         if (this.hidden) {
//             this.element.classList.add('hidden');
//         } else {
//             this.element.classList.remove('hidden');
//         }
//     }

//     /**
//      * Focuses on the first focusable element within the modal.
//      */
//     private _focusOnFirstInteractiveElement(): void {
//         const focusableElements = this.behaviorFocusTrap.getFocusableElements();
//         if (focusableElements.length > 0) {
//             focusableElements[0].focus();
//         } else {
//             this.element.setAttribute('tabindex', '0');
//             this.behaviorFocusTrap.refreshFocusableElements();
//             this.element.focus();
//             debugger;
//         }
//     }
// }

// // @copyright sdfcloud.
