---
title: CSS Reference
---

# CSS Reference

**Cascading Style Sheets** is a technology to assign styles to structured content like HTML. This allows you to seperate the appeareance from the actual content.

- [Wikipedia](https://en.wikipedia.org/wiki/CSS)
- [w3scools](https://www.w3schools.com/css/default.aspcodepen) reference


## Syntax

```css
selector {
    /* comment */
    property: value;
}
```

## Selectors
The most important **selectors** are:
- `*` select **all** elements
- `tag` select elements by **tag name** `<tag>`
- `.classname` select elements by **class name** `<tag class="classname">`
- `#idname` select elements by **id name** `<tag id="idname">`

And then there are **combinators**:
- `parent descendant` select elements inside some other elements
- `parent > child` select elements that are direct children of that parent
- `element1 + element2` select elements that directly follow the first
- `element1, element2` apply the same rules to both elements

<iframe height="360" src="/examples/css-selectors/embed"></iframe>

> Using tag name selectors you can define a base style, while later applying more specific styles using class selectors or combinators. Play with it on [CodePen](https://codepen.io/moritzebeling/pen/wvJPGwW)

Learn more:
- [Full list of CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)
- [CSS Diner](https://flukeout.github.io) selector training game
- [On CSS selector specificity](https://css-tricks.com/specifics-on-css-specificity/) by CSS tricks


### Style rules and properties
There are various rules that you can apply to an element to control its appeareance.

<iframe height="360" src="/examples/css-styles/embed"></iframe>

> Play with it on [CodePen](https://codepen.io/moritzebeling/pen/mdWqPyy)

[Full list of CSS properties](https://www.w3schools.com/cssref/default.asp)


### Cascading and inheritance
One of CSS’ key characteristics is the power of inheritance, which means:
1. A selector always selects all matching elements
2. All rules applied to an element will populate down to all it’s children ("cascading"), as long as they’re not overwritten
3. With the `inherit` value, child elements can explicitly inherit a rule from its ancestors

This allows you to make even complex designs with a minimum amount of CSS rules, which makes your code more reusable, readable and your website faster.


### Units
Most common CSS units are:
- `px` pixels
- `%` relative to the **width** of the parent element
- `vw` % of screen width
- `vh` % of screen height
- `em` relative to current font size (`2em` means `200%` of the current or inherited font-size)
- `rem` [relative to root font size](https://www.w3schools.com/cssref/css_pxtoemconversion.asp) (when `html{font-size:10px;}`, then `1rem` = `10px`)

Units can also be calculated by the browser, eg: `width: calc( 50vw + 1px );`

Learn more:
- [Full list of CSS Units](https://www.w3schools.com/cssref/css_units.asp)


### Colors
You can define colors in a few different ways, eg:
- `blue` there are 140 [default colors](https://www.w3schools.com/cssref/css_colors.asp)
- `currentColor` current or inherited text color
- `#0000ff` 8-bit hex (`00` = `0`, `99` = `127`, `ff` = `255`)

<div class="grid">
    <div class="flex-spread text-white" style="background:black;">black <span class="mono">#000000</span></div>
    <div class="flex-spread text-white" style="background:blue;">blue <span class="mono">#0000ff</span></div>
    <div class="flex-spread" style="background:lightgrey;">lightgrey <span class="mono">#D3D3D3</span></div>
    <div class="flex-spread" style="background:springgreen;">springgreen <span class="mono">#00ff7f</span></div>
    <div class="flex-spread" style="background:white;">white <span class="mono">#000000</span></div>
    <div class="flex-spread" style="background:yellow;">yellow <span class="mono">#ffff00</span></div>
</div>

Read more:
- [Screen colors](https://www.w3schools.com/colors/default.asp) by w3schools
- [Gradient generator](https://cssgradient.io)


## 🧮 Layout
There are many ways in CSS to create interesting layouts, while the most important techniques are lited below.

Leran more:
- [w3scools CSS Layout](https://www.w3schools.com/css/css_website_layout.asp)
- [Learn CSS Box Alignment](https://ishadeed.com/article/learn-box-alignment/) by Ahmad Shadeed

### The Box Model
When working with properties like `width`, `height`, `border`, `margin` (outside spacing) and `padding`(inside spacing) it is really helpful to understand the box model concept:

- It works like an onion: content < padding < border < margin
- An elements dimensions are measured from the outside of its content and inside of its padding, which can be quite counter-intuitive. You can change that behaviour with `box-sizing: border-box;`, so that the dimensions are now measured outside its border and inside its margin
- The margin of sibling elements will collapse (or overlayed) instead of added

<iframe height="360" src="/examples/the-box-model/embed"></iframe>

> Illustration of the box model onion. The last 2 boxes illustrate the difference between `content-box` and `border-box`, they are both `100x100px` in size. Also note the collapsing margins. Play with it on [CodePen](https://codepen.io/moritzebeling/pen/RwpjaYG)

- [The box model](https://www.w3schools.com/css/css_boxmodel.asp)
- [Box sizing](https://developer.mozilla.org/de/docs/Web/CSS/box-sizing) to control the box model
- [Collapsing margins](https://www.joshwcomeau.com/css/rules-of-margin-collapse/)


### Position
With `position`, you can position an element relative to the viewport `fixed`, relative to the document `absolute` or relative to some parent that is positioned `relative`. This is extremly helpful when you want to position elements on top of each other.
- [CSS-Tricks](https://css-tricks.com/almanac/properties/p/position/)
- [Learn CSS Positioning](https://ishadeed.com/article/learn-css-positioning/) by Ahmad Shadeed

<iframe height="360" src="/examples/css-position/embed"></iframe>

> Scroll down to see the different behaviours. Play with it on [CodePen](https://codepen.io/moritzebeling/pen/XWMzdqO)


### Flex
Using `display: flex;`, you can spread out elements accross one axis.
- [CSS-Tricks Complete guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox froggy](https://flexboxfroggy.com) game

<iframe height="360" src="/examples/css-center/embed"></iframe>

> Center a child element using `flex`, `justify-content` for `x`-axis and `align-items` for `y`-axis.

<iframe height="360" src="/examples/css-flex/embed"></iframe>

> Elements with flexible width, centered horizontally. Play with it on [CodePen](https://codepen.io/moritzebeling/pen/GRWOZro)

### Grid
With `display: grid;` you can lay out elements accross two axes.
- [CSS-Tricks complete guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden](https://cssgridgarden.com) game

<iframe height="360" src="/examples/css-grid/embed"></iframe>

> A `3x2` grid with cells of different sizes. Play with it on [CodePen](https://codepen.io/moritzebeling/pen/XWMzday)

### Tables
HTML `<table>` elements can also be used to create a 2D layout, however this is kind of doing it, before CSS grid and flex came out. But it’s still relevant to do an actual table of text or data.

- [CSS-Tricks complete guide](https://css-tricks.com/complete-guide-table-element/)

## 🎆 Effects

- [Animation](https://css-tricks.com/almanac/properties/a/animation/)
- [Transform](https://css-tricks.com/almanac/properties/t/transform/)
- [Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [Filter](https://css-tricks.com/almanac/properties/f/filter/)
- [box-shadow](https://www.cssmatic.com/box-shadow)
- [border-radius](https://www.w3schools.com/cssref/css3_pr_border-radius.asp)
- [text-shadow](https://css-tricks.com/almanac/properties/t/text-shadow/)
- [gradients](https://www.cssmatic.com/gradient-generator)
- [outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)

## 📝 Webfonts and typography

There is a list of [websafe fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp) that are installed on most computers and thus can always be used whithout providing an explicit font file. However the design options are very limited with that.
A simple solution for that is [Google Fonts](https://fonts.google.com). Just choose a font, click on "+ select this style" and choose either the `<link>` method for including this in your HTML or `@import` for placing this at the top of your CSS.


## Resolving problems
- Unclosed curly brackets
- Badly nested elements like `<p>Lorem <em>ipsum</p></em>`
- Incorrect tag syntax like `<p class="centered>Text</p>`

Find out more:
- [Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML) by MDN
- [Validate your HTML code](https://validator.w3.org/#validate_by_input) at w3c


## 🔗 Further reading

<div class="iframe video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BUZIaTHm_oE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

> [Basics of CSS](https://www.youtube.com/watch?v=BUZIaTHm_oE) by Laurel Schwulst (17:30min)

- [cssreference.io](https://cssreference.io)
- [MDN Mozilla Reference](https://developer.mozilla.org/de/docs/Web/CSS) reference
- [CSS-Tricks Almanac](https://css-tricks.com/almanac/) reference
- [devdocs.io](https://devdocs.io/css/) reference
- [Geometrical shapes of CSS](https://css-tricks.com/the-shapes-of-css/)
- [Getting to know CSS](https://learn.shayhowe.com/html-css/getting-to-know-css/) by Shay Howe
- [Opening the box model](https://learn.shayhowe.com/html-css/opening-the-box-model/) by Shay Howe
