<section class="hero">

## *The "ariaLabelCheckBehavior" Experience*

</section>

### Overview

<section>

* **UX Token:** ariaLabelCheckBehavior
* **Class Definition:** <a href="https://github.com/thebytebar/joshica/blob/main/src/experiences/a11y/aria-label-check.behavior.ts" target="_blank">AriaLabelCheckBehavior</a>
* **Imports:** None
* **Description:** Contains logic to check the HTML Element for proper aria-label or aria-labelledby. This experience will produce a console warning when an aria-label is missing. Use when you want to ensure aria-labels are correctly placed.
* **Use Case:** This experience is meant for developers and provides reminders for where aria-labels should be added to enhance the user experience for assistive technology users. When developing experiences, this can be a helpful tool to guide those implementing your experiences to make sure they are placing aria-labels at the correct locations in code.

</section>

### Demo

<section>

#### Example of aria-label Missing

To see this experience in action, open the console in your browser's developer tools. The experience will log a warning if the element is missing an aria-label. In this demo, you will see that when the aria-label and aria-labelledby is missing on the element, a console warning will be present.

Code:

```
<button ux="ariaLabelCheckBehavior">
    Button Without aria-label
</button>
```

Live Demo:

<button ux="ariaLabelCheckBehavior">Button Without aria-label</button>

</section>

<section>

#### Example of aria-label Present

To see this experience in action, open the console in your browser's developer tools. The experience will log a warning if the element is missing an aria-label. In this demo, you will see that when the aria-label is present on the element, there will be no console warning.

Code:

```
<button ux="ariaLabelCheckBehavior" aria-label="opens modal">
    Button With aria-label
</button>
```

Live Demo:

<button ux="ariaLabelCheckBehavior" aria-label="opens modal">Button With aria-label</button>

</section>

<section>

#### Example of aria-labelledby Present

To see this experience in action, open the console in your browser's developer tools. The experience will log a warning if the element is missing an aria-label. In this demo, you will see that when the aria-labelledby is present on the element, there will be no console warning.

Code:

```
<button ux="ariaLabelCheckBehavior" aria-labelledby="opens modal">
    Button With aria-labelledby
</button>
```

Live Demo:

<button ux="ariaLabelCheckBehavior" aria-labelledby="opens modal">Button With aria-labelledby</button>

</section>

### API

<section>

#### Methods

* **onRefresh()** - This is an event hook method method is called when the experience is refreshed. It checks if the element has an aria-label or aria-labelledby attribute and logs a warning if neither is present.
* **isAriaLabelPresent()** - This method checks if the aria-label or aria-labelledby attribute is present on the element. It returns true if either attribute is present, otherwise false.

</section>

<script>
    ux.refresh();
</script>
