import { UxGlobal } from '@core/classes/ux-global.class';
import { HTMLExperienceElement } from '@core/interfaces/html-experience-element.interface';
import { UserExperienceInterface } from '@core/interfaces/user-experience.interface';
import { UxElementList } from '@core/classes/ux-element-list.class';
import { initExperience } from '@core/functions/init-experience.function';

export class UxElement {

    public experiences: {
        [key: string]: UserExperienceInterface;
    };

    /**
     * A reference to the HTML element.
     */
    private element: HTMLExperienceElement;

    /**
     * Determines if the refresh process is currently happening.
     */
    private isRefreshInProgress: boolean;

    /**
     * The constructor.
     */
    public constructor(element: HTMLElement) {
        this.element = element as HTMLExperienceElement;
        this.isRefreshInProgress = false;
        this.experiences = {};

        if (!this.element.uxid) {
            this.element.uxid = '_ux_' + Math.random().toString(36).slice(2, 7);
            this.element.setAttribute(this.element.uxid, '');
        }

        if (!this.element.uxList) {
            this.element.uxList = new UxElementList(this.element);
        }
    }

    public refresh() {
        if (this.isRefreshInProgress) {
            return;
        }

        this.isRefreshInProgress = true;

        const uxAttribute = this.element.uxList.value;
        const experiences = this.element.uxList.list;
        experiences.forEach((experience: string) => {
            let experienceInstance = this.experiences[experience];
            if (!experienceInstance) {
                experienceInstance = initExperience(this.element, experience) as any;
            }

            if (experienceInstance?.onRefresh) {
                experienceInstance.onRefresh();
            }
        });

        this.isRefreshInProgress = false;

        this.children().forEach((uxChild: HTMLExperienceElement) => {
            uxChild.ux.refresh();
        });

        if (uxAttribute !== this.element.uxList.value) {
            this.refresh();
        }
    }

    /**
     * Gets the next HTMLExperienceElement parent of the current element.
     */
    public parent(): HTMLExperienceElement | undefined {
        return UxGlobal.get().getHtmlExperienceElementParent(this.element);
    }

    /**
     * Gets the HTMLExperienceElement children of the current element.
     */
    public children(): HTMLExperienceElement[] {
        return UxGlobal.get().getHtmlExperienceElementChildren(this.element);
    }
}

// @copyright thebytebar.
