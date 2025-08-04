// import { RegisterExperience } from '@joshica/ux/core';
// import { CoreExperience } from '@joshica/ux/core';
// import { LoadExperience } from '@joshica/ux/core';
// import { UxModalExperience } from '@joshica/ux';

// import './ui-modal.experience.scss';

// @RegisterExperience({
//     id: 'uiModal',
//     imports: ['uxModal']
// })
// export class UiModalExperience extends CoreExperience {

//     /**
//      * Loads the uxModal experience.
//      */
//     @LoadExperience('uxModal')
//     private uxModal: UxModalExperience;

//     /**
//      * onInit event hook.
//      */
//     public onInit(): void {
//         this._initModalUi();
//         this._initModalInjectContainer();
//         this._initBodyMouseClickListener();
//     }

//     /**
//      * Shows the modal.
//      */
//     public open(): void {
//         this.uxModal.open();
//     }

//     /**
//      * Closes the modal.
//      */
//     public close(): void {
//         this.uxModal.close();
//     }

//     /**
//      * Checks if the modal is currently hidden.
//      */
//     public isOpen(): boolean {
//         return this.uxModal.isOpen();
//     }

//     /**
//      * Initializes the modal element to setup proper HTML markup.
//      */
//     private _initModalUi(): void {
//         this.element.classList.add('joshica-ux-modal-ui');
//     }

//     /**
//      * Injects a modal container.
//      */
//     private _initModalInjectContainer(): void {
//         const container = document.createElement('div');
//         container.classList.add('joshica-ux-modal-ui-container');

//         while (this.element.firstChild) {
//             container.appendChild(this.element.firstChild);
//         }
//         this.element.appendChild(container);
//     }

//     /**
//      * Initializes the escape key event listener to close the modal.
//      */
//     private _initBodyMouseClickListener(): void {
//         this.element.addEventListener('click', (event: MouseEvent) => {
//             const container = this.element.querySelector('.joshica-ux-modal-ui-container');
//             if (!container?.contains(event.target as Node) && this.isOpen()) {
//                 this.close();
//             }
//         });
//     }

// }

// // @copyright TheByteBar
