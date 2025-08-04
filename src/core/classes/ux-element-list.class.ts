import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';

export class UxElementList {

    /**
     * Contains a space separated string that represents the list of values.
     */
    public value: string = '';

    /**
     * Contains an array of strings that represents the list of values.
     */
    public list: string[] = [];

    /**
     * A reference to the HTMLExperienceElement.
     */
    private element: HTMLExperienceElement;

    /**
     * The constructor.
     */
    public constructor(element: HTMLExperienceElement) {
        this.element = element;
        this.value = this.element.getAttribute('ux') || '';
        this.list = this.value.split(' ').filter((item: string) => item.trim() !== '');
    }

    /**
     * Adds a value to the list.
     */
    public add(ux: string): void {
        if (!this.contains(ux)) {
            this.list.push(ux);
            this.value = this.list.join(' ');
            this.element.setAttribute('ux', this.value);
            this.element.ux.refresh();
        }
    }

    /**
     * Removes a value from the list.
     */
    public remove(ux: string): void {
        if (this.contains(ux)) {
            this.list = this.list.filter((item: string) => item !== ux);
            this.value = this.list.join(' ');
            this.element.setAttribute('ux', this.value);

            if (this.element.ux?.experiences[ux]) {
                delete this.element.ux.experiences[ux];
            }

            this.element.ux.refresh();
        }
    }

    /**
     * Checks to see if a value contains in the list.
     */
    public contains(ux: string): boolean {
        return this.list.includes(ux);
    }

}

// @copyright thebytebar.
