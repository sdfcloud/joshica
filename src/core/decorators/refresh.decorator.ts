export function Refresh() {
    return function (_value: undefined, context: ClassFieldDecoratorContext) {
        if (context.kind !== 'field') return;

        context.addInitializer(function () {
            const instance = this as any;
            const propertyName = context.name as string;

            let storedValue = instance[propertyName];

            Object.defineProperty(instance, propertyName, {
                get() {
                    return storedValue;
                },
                set(newValue: any) {
                    storedValue = newValue;

                    if (typeof this.refresh === 'function') {
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true,
            });
        });
    };
}

// @copyright sdfcloud.
