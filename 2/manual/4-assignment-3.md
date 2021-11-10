# Assignment 3: Transforms, transitions, animations

Until now, our sketches are quite rectengular and static.
Today we wan’t to continue with our geometrical patterns and sketches, but add effects, animations, interactions, ...

1. Fork one of your existing sketches or quickly start a new one. Play around with the following properties to make your HTML elements less boxy:

- [`border-radius`](https://www.w3schools.com/cssref/css3_pr_border-radius.asp) for round corners
- [`transform`](https://css-tricks.com/almanac/properties/t/transform/) to manipulate the appeareance of an element
- [`gradients`](https://cssgradient.io) as background color
- Mouse interactions using the [`:hover`](https://www.w3schools.com/cssref/sel_hover.asp) pseudo-selector
- [`box-shadow`](https://www.cssmatic.com/box-shadow)

These links might help you:
- Our small [CSS Reference](/2/manual/CSS-reference.html)
- Google `CSS ... generator`, `CSS effects`, `CSS animation`, `CSS ...`

2. Use the `:hover` pseudo-class to manipulate properties:

```
h1 {
    color: red;
}
h1:hover {
    color: blue;
}
```

3. Use [`transition`](https://css-tricks.com/almanac/properties/t/transition/) to morph between diffenrent states.

<iframe height="360" src="/2/embed/examples/hover-me"></iframe>

> Use `:hover` in combination with `transition`. Note how the background is a sibling element to the button and still can be animated using the `+` combinator. Play with it on [CodePen](https://codepen.io/moritzebeling/pen/RwpjxaY)

4. Another way to add movement to our skteches is with [`animation`](https://css-tricks.com/almanac/properties/a/animation/). While `transition` only alternates between 2 states, a CSS `animation` can follow a complex chain of keyframes.
Fork or start a new pen to create a small animation.

<iframe height="500" src="/2/embed/examples/x-y-bubbles"></iframe>

> CSS `animation` in combination with `position`. Play with it on [CodePen](https://codepen.io/moritzebeling/pen/OJpOzgY)

<iframe height="380" src="/2/embed/examples/rotating-cells"></iframe>

> CSS `animation` in combination with `transform`. Play with it on [CodePen](https://codepen.io/moritzebeling/pen/qBrVVOO)
