import { UxGlobal } from "@core/classes/ux-global.class"

/**
 * Issues a notification to all experiences that something has updated and will
 * invoke each experience's onRefresh() callback method.
 */
export function refresh(): void {
    UxGlobal.get().refresh();
}

// @copyright thebytebar.
