<link rel="stylesheet" href="/assets/styles/home.css">

<section class="hero">

## *"A light-weight bundle of <a href="#">user experiences</a> for web apps"*

</section>

<section>

## Quick Start

1 - Include the latest release in your project:
```
<script src="https://www.joshica.dev/releases/latest/joshica.js"></script>
```

2 - Apply experiences to your app by adding the `ux` attribute to HTML elements:
```
<div id="learnMoreModal" ux="modalBehavior">Modal Content</div>
```

3 - Refresh the user experience:
```
ux.refresh();
```

</section>

## Experiences

<section>

### Ally

<div class="experiences">
    <div class="experience">
        <div class="content">
            <h4>ariaLabelValidationBehavior</h4>
            <p>Contains logic to check the HTML Element for proper aria-label or aria-labeled-by. This experience will produce a console warning when an aria-label is missing. Use when you want to ensure aria-labels are correctly placed.</p>
        </div>
        <div class="actions">
            <a href="/experiences/a11y/aria-label-check.behavior.html" class="btn">Learn More</a>
        </div>
    </div>
    <div class="experience">
        <div class="content">
            <h4>focusTrapBehavior</h4>
            <p>Contains logic to capture and trap keyboard focus. Mostly used with modals and dialog boxes. This experience will trap keyboard focus so that the focus cannot be moved out side of the experience.</p>
        </div>
        <div class="actions">
            <a href="#" class="btn">Learn More</a>
        </div>
    </div>
    <div class="experience-empty"></div>
</div>

### Controls

<div class="experiences">
    <div class="experience">
        <div class="content">
            <h4>buttonBehavior</h4>
            <p>Contains all of the functionality needed to implement a control button. Use this when you want the behavior of a button but you already have your own button styles.</p>
            <p>Imports:</p>
            <ul>
                <li>mouseEventBehavior</li>
                <li>keyboardEventBehavior</li>
            </ul>
        </div>
        <div class="actions">
            <a href="#" class="btn">Learn More</a>
        </div>
    </div>
    <div class="experience">
        <div class="content">
            <h4>buttonWidget</h4>
            <p>Contains all of the functionality of a "buttonBehavior" experience, but includes a button UI.</p>
            <p>Imports:</p>
            <ul>
                <li>buttonBehavior</li>
            </ul>
        </div>
        <div class="actions">
            <a href="#" class="btn">Learn More</a>
        </div>
    </div>
    <div class="experience-empty"></div>
</div>

### Events

<div class="experiences">
    <div class="experience">
        <div class="content">
            <h4>keyboardEventBehavior</h4>
            <p>This experience is used to register keyboard event actions.</p>
        </div>
        <div class="actions">
            <a href="#" class="btn">Learn More</a>
        </div>
    </div>
    <div class="experience">
        <div class="content">
            <h4>mouseEventBehavior</h4>
            <p>This experience is used to register mouse event actions.</p>
        </div>
        <div class="actions">
            <a href="#" class="btn">Learn More</a>
        </div>
    </div>
    <div class="experience-empty"></div>
</div>

### Popups

<div class="experiences">
    <div class="experience">
        <div class="content">
            <h4>modalBehavior</h4>
            <p>Contains all of the functionality for a standard modal. Use this when you want a container to behave like a modal and you want to style it yourself. If you would like a fully implemented modal with a UI use the "modalWidget" experience instead.</p>
            <p>Imports:</p>
            <ul>
                <li>focusTrapBehavior</li>
                <li>ariaLabelValidationBehavior</li>
            </ul>
        </div>
        <div class="actions">
            <a href="#" class="btn">Learn More</a>
        </div>
    </div>
    <div class="experience">
        <div class="content">
            <h4>modalWidget</h4>
            <p>Contains all functionality of the "modalBehavior" experience but implements a UI on top of that. If you have built your own modal and would just like to implement the functionality, use the "modalBehavior" experience.</p>
            <p>Imports:</p>
            <ul>
                <li>modalBehavior</li>
            </ul>
        </div>
        <div class="actions">
            <a href="#" class="btn">Learn More</a>
        </div>
    </div>
    <div class="experience-empty"></div>
</div>

</section>
