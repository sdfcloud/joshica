/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CoreExperience: () => (/* reexport safe */ _core_classes_core_experience_class__WEBPACK_IMPORTED_MODULE_3__.CoreExperience),\n/* harmony export */   LoadExperience: () => (/* reexport safe */ _core_decorators_load_experience_decorator__WEBPACK_IMPORTED_MODULE_2__.LoadExperience),\n/* harmony export */   RefreshExperience: () => (/* reexport safe */ _core_decorators_refresh_experience_decorator__WEBPACK_IMPORTED_MODULE_1__.RefreshExperience),\n/* harmony export */   RegisterExperience: () => (/* reexport safe */ _core_decorators_register_experience_decorator__WEBPACK_IMPORTED_MODULE_0__.RegisterExperience),\n/* harmony export */   getUxExperience: () => (/* reexport safe */ _core_functions_get_ux_experience_function__WEBPACK_IMPORTED_MODULE_7__.getUxExperience),\n/* harmony export */   refresh: () => (/* reexport safe */ _core_functions_refresh_function__WEBPACK_IMPORTED_MODULE_5__.refresh),\n/* harmony export */   registerExperience: () => (/* reexport safe */ _core_functions_register_experience_function__WEBPACK_IMPORTED_MODULE_4__.registerExperience),\n/* harmony export */   uxQuerySelector: () => (/* reexport safe */ _core_functions_ux_query_selector_function__WEBPACK_IMPORTED_MODULE_6__.uxQuerySelector),\n/* harmony export */   uxQuerySelectorAll: () => (/* reexport safe */ _core_functions_ux_query_selector_all_function__WEBPACK_IMPORTED_MODULE_8__.uxQuerySelectorAll)\n/* harmony export */ });\n/* harmony import */ var _core_decorators_register_experience_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/decorators/register-experience.decorator */ \"./src/core/decorators/register-experience.decorator.ts\");\n/* harmony import */ var _core_decorators_refresh_experience_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/decorators/refresh-experience.decorator */ \"./src/core/decorators/refresh-experience.decorator.ts\");\n/* harmony import */ var _core_decorators_load_experience_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/load-experience.decorator */ \"./src/core/decorators/load-experience.decorator.ts\");\n/* harmony import */ var _core_classes_core_experience_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/classes/core-experience.class */ \"./src/core/classes/core-experience.class.ts\");\n/* harmony import */ var _core_functions_register_experience_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/functions/register-experience.function */ \"./src/core/functions/register-experience.function.ts\");\n/* harmony import */ var _core_functions_refresh_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/functions/refresh.function */ \"./src/core/functions/refresh.function.ts\");\n/* harmony import */ var _core_functions_ux_query_selector_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/functions/ux-query-selector.function */ \"./src/core/functions/ux-query-selector.function.ts\");\n/* harmony import */ var _core_functions_get_ux_experience_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/functions/get-ux-experience.function */ \"./src/core/functions/get-ux-experience.function.ts\");\n/* harmony import */ var _core_functions_ux_query_selector_all_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/functions/ux-query-selector-all.function */ \"./src/core/functions/ux-query-selector-all.function.ts\");\n/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/api */ \"./src/core/api.ts\");\n\n\n\n\n\n\n\n\n\n\n\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core.ts?\n}");

/***/ }),

/***/ "./src/core/api.ts":
/*!*************************!*\
  !*** ./src/core/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_functions_register_experience_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/functions/register-experience.function */ \"./src/core/functions/register-experience.function.ts\");\n/* harmony import */ var _core_functions_refresh_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/functions/refresh.function */ \"./src/core/functions/refresh.function.ts\");\n/* harmony import */ var _core_functions_ux_query_selector_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/functions/ux-query-selector.function */ \"./src/core/functions/ux-query-selector.function.ts\");\n/* harmony import */ var _core_functions_ux_query_selector_all_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/functions/ux-query-selector-all.function */ \"./src/core/functions/ux-query-selector-all.function.ts\");\n/* harmony import */ var _core_functions_get_ux_experience_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/functions/get-ux-experience.function */ \"./src/core/functions/get-ux-experience.function.ts\");\n\n\n\n\n\nconst api = {\n    registerExperience: _core_functions_register_experience_function__WEBPACK_IMPORTED_MODULE_0__.registerExperience,\n    refresh: _core_functions_refresh_function__WEBPACK_IMPORTED_MODULE_1__.refresh,\n    querySelector: _core_functions_ux_query_selector_function__WEBPACK_IMPORTED_MODULE_2__.uxQuerySelector,\n    querySelectorAll: _core_functions_ux_query_selector_all_function__WEBPACK_IMPORTED_MODULE_3__.uxQuerySelectorAll,\n    getUx: _core_functions_get_ux_experience_function__WEBPACK_IMPORTED_MODULE_4__.getUxExperience\n};\nwindow.ux = api;\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/api.ts?\n}");

/***/ }),

/***/ "./src/core/classes/core-experience.class.ts":
/*!***************************************************!*\
  !*** ./src/core/classes/core-experience.class.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CoreExperience: () => (/* binding */ CoreExperience)\n/* harmony export */ });\n/**\n * The abstract class all experiences should inheret from.\n */\nclass CoreExperience {\n    /**\n     * The constructor.\n     */\n    constructor(element) {\n        this.element = element;\n    }\n    /**\n     * Calls refresh on the Ux element.\n     */\n    refresh() {\n        this.element.ux.refresh();\n    }\n    /**\n     * Adds a user experience to the element.\n     */\n    requireUx(ux) {\n        this.element.uxList.add(ux);\n    }\n    /**\n     * Removes a user experience from the element.\n     */\n    removeUx(ux) {\n        this.element.uxList.remove(ux);\n    }\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/classes/core-experience.class.ts?\n}");

/***/ }),

/***/ "./src/core/classes/ux-element-list.class.ts":
/*!***************************************************!*\
  !*** ./src/core/classes/ux-element-list.class.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UxElementList: () => (/* binding */ UxElementList)\n/* harmony export */ });\nclass UxElementList {\n    /**\n     * The constructor.\n     */\n    constructor(element) {\n        /**\n         * Contains a space separated string that represents the list of values.\n         */\n        this.value = '';\n        /**\n         * Contains an array of strings that represents the list of values.\n         */\n        this.list = [];\n        this.element = element;\n        this.value = this.element.getAttribute('ux') || '';\n        this.list = this.value.split(' ').filter((item) => item.trim() !== '');\n    }\n    /**\n     * Adds a value to the list.\n     */\n    add(ux) {\n        if (!this.contains(ux)) {\n            this.list.push(ux);\n            this.value = this.list.join(' ');\n            this.element.setAttribute('ux', this.value);\n            this.element.ux.refresh();\n        }\n    }\n    /**\n     * Removes a value from the list.\n     */\n    remove(ux) {\n        var _a;\n        if (this.contains(ux)) {\n            this.list = this.list.filter((item) => item !== ux);\n            this.value = this.list.join(' ');\n            this.element.setAttribute('ux', this.value);\n            if ((_a = this.element.ux) === null || _a === void 0 ? void 0 : _a.experiences[ux]) {\n                delete this.element.ux.experiences[ux];\n            }\n            this.element.ux.refresh();\n        }\n    }\n    /**\n     * Checks to see if a value contains in the list.\n     */\n    contains(ux) {\n        return this.list.includes(ux);\n    }\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/classes/ux-element-list.class.ts?\n}");

/***/ }),

/***/ "./src/core/classes/ux-element.class.ts":
/*!**********************************************!*\
  !*** ./src/core/classes/ux-element.class.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UxElement: () => (/* binding */ UxElement)\n/* harmony export */ });\n/* harmony import */ var _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/classes/ux-global.class */ \"./src/core/classes/ux-global.class.ts\");\n/* harmony import */ var _core_classes_ux_element_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/classes/ux-element-list.class */ \"./src/core/classes/ux-element-list.class.ts\");\n/* harmony import */ var _core_functions_init_experience_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/functions/init-experience.function */ \"./src/core/functions/init-experience.function.ts\");\n\n\n\nclass UxElement {\n    /**\n     * The constructor.\n     */\n    constructor(element) {\n        this.element = element;\n        this.isRefreshInProgress = false;\n        this.experiences = {};\n        if (!this.element.uxid) {\n            this.element.uxid = '_ux_' + Math.random().toString(36).slice(2, 7);\n            this.element.setAttribute(this.element.uxid, '');\n        }\n        if (!this.element.uxList) {\n            this.element.uxList = new _core_classes_ux_element_list_class__WEBPACK_IMPORTED_MODULE_1__.UxElementList(this.element);\n        }\n    }\n    refresh() {\n        if (this.isRefreshInProgress) {\n            return;\n        }\n        this.isRefreshInProgress = true;\n        const uxAttribute = this.element.uxList.value;\n        const experiences = this.element.uxList.list;\n        experiences.forEach((experience) => {\n            let experienceInstance = this.experiences[experience];\n            if (!experienceInstance) {\n                experienceInstance = (0,_core_functions_init_experience_function__WEBPACK_IMPORTED_MODULE_2__.initExperience)(this.element, experience);\n            }\n            if (experienceInstance === null || experienceInstance === void 0 ? void 0 : experienceInstance.onRefresh) {\n                experienceInstance.onRefresh();\n            }\n        });\n        this.isRefreshInProgress = false;\n        this.children().forEach((uxChild) => {\n            uxChild.ux.refresh();\n        });\n        if (uxAttribute !== this.element.uxList.value) {\n            this.refresh();\n        }\n    }\n    /**\n     * Gets the next HTMLExperienceElement parent of the current element.\n     */\n    parent() {\n        return _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__.UxGlobal.get().getHtmlExperienceElementParent(this.element);\n    }\n    /**\n     * Gets the HTMLExperienceElement children of the current element.\n     */\n    children() {\n        return _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__.UxGlobal.get().getHtmlExperienceElementChildren(this.element);\n    }\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/classes/ux-element.class.ts?\n}");

/***/ }),

/***/ "./src/core/classes/ux-global.class.ts":
/*!*********************************************!*\
  !*** ./src/core/classes/ux-global.class.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UxGlobal: () => (/* binding */ UxGlobal)\n/* harmony export */ });\n/* harmony import */ var _core_classes_ux_element_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/classes/ux-element.class */ \"./src/core/classes/ux-element.class.ts\");\n\n/**\n * This helper class is a singleton instance and is meant to provide the public UX2\n * API with the core logic to make UX2 function.\n */\nclass UxGlobal {\n    /**\n     * The constructor\n     */\n    constructor() {\n        this.experienceFactories = {};\n    }\n    /**\n     * Returns the singleton instance of this class.\n     */\n    static get() {\n        if (!UxGlobal.instance) {\n            UxGlobal.instance = new UxGlobal();\n        }\n        return UxGlobal.instance;\n    }\n    /**\n     * Registers an experience within the framework. It take in a factory ready to be bound to\n     * an element.\n     */\n    registerExperience(id, factory) {\n        this.experienceFactories[id] = factory;\n    }\n    /**\n     * Returns an HTMLExperienceElement. If the element is not an HTMLExperienceElement, then\n     * this method will create the HTMLExperienceElement from the HTMLElement passed in.\n     */\n    getHtmlExperienceElement(element) {\n        if (!element.ux) {\n            element.ux = new _core_classes_ux_element_class__WEBPACK_IMPORTED_MODULE_0__.UxElement(element);\n        }\n        return element;\n    }\n    /**\n     * Initializes ux experiences from the DOM.\n     */\n    refresh() {\n        const uxElements = document.querySelectorAll('[ux]');\n        uxElements.forEach((element) => {\n            const uxElement = this.getHtmlExperienceElement(element);\n            const hasUxParentElement = !!uxElement.ux.parent();\n            if (!hasUxParentElement) {\n                uxElement.ux.refresh();\n            }\n        });\n    }\n    /**\n     * Finds and returns the HTMLExperienceElement parent of any HTMLElement passed in.\n     */\n    getHtmlExperienceElementParent(element) {\n        var parentElement = element.parentElement;\n        if (!parentElement) {\n            return undefined;\n        }\n        else if (parentElement && parentElement.getAttribute('ux')) {\n            return this.getHtmlExperienceElement(parentElement);\n        }\n        ;\n        return this.getHtmlExperienceElementParent(parentElement);\n    }\n    /**\n     * Returns an array of all the HTMLExperienceElement children of any HTMLElement\n     */\n    getHtmlExperienceElementChildren(element) {\n        const possibleChildren = element.querySelectorAll('[ux]');\n        const childrenElements = [];\n        possibleChildren.forEach((possibleChildElement) => {\n            const childParentElement = this.getHtmlExperienceElementParent(possibleChildElement);\n            if (childParentElement === element) {\n                childrenElements.push(this.getHtmlExperienceElement(possibleChildElement));\n            }\n        });\n        return childrenElements;\n    }\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/classes/ux-global.class.ts?\n}");

/***/ }),

/***/ "./src/core/decorators/load-experience.decorator.ts":
/*!**********************************************************!*\
  !*** ./src/core/decorators/load-experience.decorator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadExperience: () => (/* binding */ LoadExperience)\n/* harmony export */ });\n/* harmony import */ var _core_functions_ux_query_selector_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/functions/ux-query-selector.function */ \"./src/core/functions/ux-query-selector.function.ts\");\n/* harmony import */ var _core_functions_get_ux_experience_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/functions/get-ux-experience.function */ \"./src/core/functions/get-ux-experience.function.ts\");\n\n\nfunction LoadExperience(experience, selector) {\n    return function (_value, context) {\n        if (context.kind !== 'field')\n            return;\n        context.addInitializer(function () {\n            const instance = this;\n            const propertyName = context.name;\n            let element = instance.element;\n            if (selector) {\n                element = (0,_core_functions_ux_query_selector_function__WEBPACK_IMPORTED_MODULE_0__.uxQuerySelector)(selector);\n            }\n            if (element && element.uxList.contains(experience)) {\n                instance[propertyName] = (0,_core_functions_get_ux_experience_function__WEBPACK_IMPORTED_MODULE_1__.getUxExperience)(element, experience);\n            }\n        });\n    };\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/decorators/load-experience.decorator.ts?\n}");

/***/ }),

/***/ "./src/core/decorators/refresh-experience.decorator.ts":
/*!*************************************************************!*\
  !*** ./src/core/decorators/refresh-experience.decorator.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RefreshExperience: () => (/* binding */ RefreshExperience)\n/* harmony export */ });\nfunction RefreshExperience() {\n    return function (_value, context) {\n        if (context.kind !== 'field')\n            return;\n        context.addInitializer(function () {\n            const instance = this;\n            const propertyName = context.name;\n            let storedValue = instance[propertyName];\n            Object.defineProperty(instance, propertyName, {\n                get() {\n                    return storedValue;\n                },\n                set(newValue) {\n                    storedValue = newValue;\n                    if (typeof this.refresh === 'function') {\n                        this.refresh();\n                    }\n                },\n                enumerable: true,\n                configurable: true,\n            });\n        });\n    };\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/decorators/refresh-experience.decorator.ts?\n}");

/***/ }),

/***/ "./src/core/decorators/register-experience.decorator.ts":
/*!**************************************************************!*\
  !*** ./src/core/decorators/register-experience.decorator.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegisterExperience: () => (/* binding */ RegisterExperience)\n/* harmony export */ });\n/* harmony import */ var _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/classes/ux-global.class */ \"./src/core/classes/ux-global.class.ts\");\n\nfunction RegisterExperience(options) {\n    return (UserExperience) => {\n        _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__.UxGlobal.get().registerExperience(options.id, (element) => {\n            if (options.imports) {\n                options.imports.forEach((ux) => {\n                    element.uxList.add(ux);\n                });\n            }\n            const experience = new UserExperience(element);\n            return experience;\n        });\n    };\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/decorators/register-experience.decorator.ts?\n}");

/***/ }),

/***/ "./src/core/functions/get-ux-experience.function.ts":
/*!**********************************************************!*\
  !*** ./src/core/functions/get-ux-experience.function.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUxExperience: () => (/* binding */ getUxExperience)\n/* harmony export */ });\n/* harmony import */ var _core_functions_init_experience_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/functions/init-experience.function */ \"./src/core/functions/init-experience.function.ts\");\n\n/**\n * Returns an element's UX Experince based on the selector.\n */\nfunction getUxExperience(element, experience) {\n    if (element === null || element === void 0 ? void 0 : element.ux) {\n        if (!element.ux.experiences[experience]) {\n            return (0,_core_functions_init_experience_function__WEBPACK_IMPORTED_MODULE_0__.initExperience)(element, experience);\n        }\n        return element.ux.experiences[experience];\n    }\n    return undefined;\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/functions/get-ux-experience.function.ts?\n}");

/***/ }),

/***/ "./src/core/functions/init-experience.function.ts":
/*!********************************************************!*\
  !*** ./src/core/functions/init-experience.function.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initExperience: () => (/* binding */ initExperience)\n/* harmony export */ });\n/* harmony import */ var _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/classes/ux-global.class */ \"./src/core/classes/ux-global.class.ts\");\n\nfunction initExperience(element, experience) {\n    var _a;\n    if ((_a = element.ux) === null || _a === void 0 ? void 0 : _a.experiences[experience]) {\n        return undefined;\n    }\n    if (_core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__.UxGlobal.get().experienceFactories[experience]) {\n        const experienceFactory = _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__.UxGlobal.get().experienceFactories[experience];\n        const experienceInstance = experienceFactory(element);\n        if (experienceInstance === null || experienceInstance === void 0 ? void 0 : experienceInstance.onInit) {\n            experienceInstance.onInit();\n        }\n        element.ux.experiences[experience] = experienceInstance;\n        return experienceInstance;\n    }\n    return undefined;\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/functions/init-experience.function.ts?\n}");

/***/ }),

/***/ "./src/core/functions/refresh.function.ts":
/*!************************************************!*\
  !*** ./src/core/functions/refresh.function.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   refresh: () => (/* binding */ refresh)\n/* harmony export */ });\n/* harmony import */ var _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/classes/ux-global.class */ \"./src/core/classes/ux-global.class.ts\");\n\n/**\n * Issues a notification to all experiences that something has updated and will\n * invoke each experience's onRefresh() callback method.\n */\nfunction refresh() {\n    _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__.UxGlobal.get().refresh();\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/functions/refresh.function.ts?\n}");

/***/ }),

/***/ "./src/core/functions/register-experience.function.ts":
/*!************************************************************!*\
  !*** ./src/core/functions/register-experience.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerExperience: () => (/* binding */ registerExperience)\n/* harmony export */ });\n/* harmony import */ var _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/classes/ux-global.class */ \"./src/core/classes/ux-global.class.ts\");\n\n/**\n * Registers an experience with the UX2 framework.\n */\nfunction registerExperience(id, factory) {\n    _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__.UxGlobal.get().registerExperience(id, factory);\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/functions/register-experience.function.ts?\n}");

/***/ }),

/***/ "./src/core/functions/ux-query-selector-all.function.ts":
/*!**************************************************************!*\
  !*** ./src/core/functions/ux-query-selector-all.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   uxQuerySelectorAll: () => (/* binding */ uxQuerySelectorAll)\n/* harmony export */ });\n/**\n * Returns an element's UX based on the selector.\n */\nfunction uxQuerySelectorAll(selector) {\n    const elements = Array.from(document.querySelectorAll(selector));\n    const filteredElements = elements.filter((element) => element.ux !== undefined);\n    return filteredElements;\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/functions/ux-query-selector-all.function.ts?\n}");

/***/ }),

/***/ "./src/core/functions/ux-query-selector.function.ts":
/*!**********************************************************!*\
  !*** ./src/core/functions/ux-query-selector.function.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   uxQuerySelector: () => (/* binding */ uxQuerySelector)\n/* harmony export */ });\n/* harmony import */ var _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/classes/ux-global.class */ \"./src/core/classes/ux-global.class.ts\");\n\n/**\n * Returns an element's UX based on the selector.\n */\nfunction uxQuerySelector(selector) {\n    const element = document.querySelector(selector + '[ux]');\n    if (element) {\n        if (element.ux) {\n            return element;\n        }\n        else {\n            const uxElement = _core_classes_ux_global_class__WEBPACK_IMPORTED_MODULE_0__.UxGlobal.get().getHtmlExperienceElement(element);\n            uxElement.ux.refresh();\n            return uxElement;\n        }\n    }\n    return undefined;\n}\n// @copyright sdfcloud.\n\n\n//# sourceURL=webpack://@joshica/ux/./src/core/functions/ux-query-selector.function.ts?\n}");

/***/ }),

/***/ "./src/experiences.ts":
/*!****************************!*\
  !*** ./src/experiences.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://@joshica/ux/./src/experiences.ts?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/core.ts\");\n/* harmony import */ var _experiences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiences */ \"./src/experiences.ts\");\n\n\n\n\n//# sourceURL=webpack://@joshica/ux/./src/index.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;