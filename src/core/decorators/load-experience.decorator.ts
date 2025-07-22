import { uxQuerySelector } from '@core/functions/ux-query-selector.function';
import { getUxExperience } from '@core/functions/get-ux-experience.function';

export function LoadExperience(experience: string, selector?: string) {
    return function (_value: undefined, context: ClassFieldDecoratorContext) {
        if (context.kind !== 'field') return;

        context.addInitializer(function () {
            const instance = this as any;
            const propertyName = context.name as string;
            let element = instance.element;

            if (selector) {
                element = uxQuerySelector(selector);
            }

            if (element && element.uxList.contains(experience)) {
                instance[propertyName] = getUxExperience(element, experience);
            }
        });
    };
}

// @copyright sdfcloud.
