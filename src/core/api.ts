import { registerExperience } from '@core/functions/register-experience.function';
import { refresh } from '@core/functions/refresh.function';
import { uxQuerySelector as querySelector } from '@core/functions/ux-query-selector.function';
import { uxQuerySelectorAll as querySelectorAll } from '@core/functions/ux-query-selector-all.function';
import { getUxExperience as getUx } from '@core/functions/get-ux-experience.function';


const api = {
    registerExperience,
    refresh,
    querySelector,
    querySelectorAll,
    getUx
};

(<any>window).ux = api;

// @copyright sdfcloud.
