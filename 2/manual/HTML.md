# HTML Reference

**Hypertext markup language** is a way to give structure to some text or document. It let’s you define which part of a document is e.g. a headline or a hyperlink, but it can also provide the architecture for complex layouts. HTML is the underlying technology for almost all websites.

- [HTML on Wikipedia](https://en.wikipedia.org/wiki/HTML)
- [HTML Tutorial](https://www.w3schools.com/html/default.asp) on w3schools
- [HTML Reference](https://www.w3schools.com/tags/default.asp) on w3schools
- [What is HTML?](https://www.youtube.com/watch?v=W-6OY9eI3hk) by Guil at Treehouse (4:06min)
- [Basics of HTML](https://www.youtube.com/watch?v=CkzbI1Tv_rQ) by Laurel Schwulst (14:23min)

## Syntax

```html
<tag attribute="value">
  <!-- comment -->
  <tag>Content</tag>
  <selfclosingTag />
</tag>
```

Every HTML element is defined by a `<tag>`. They work like containers, can be opened `<h1>` have some content and later be closed `</h1>`. The resulting structure can be very flat or deeply nested.

There is another group of [empty elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element) that are not allowed to have any content e.g. like `<img />`, `<br />` or `<hr />`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The title of my document</title>
  </head>
  <body>
    <!-- in this workshop as well as in CodePen, we only care about everything inside the body element -->
    <div>
      <h1>Headline</h1>
      <figure>
        <img src="image-1.jpg" alt="This is a nice image" />
        <figcaption>Here you can see this and that</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      <a href="next-article.html">Next article</a>
    </div>
  </body>
</html>
```

> The indentation and all whitespaces between elements are ignored by the browser. But it is always a good practice to organize your code well to make it easier for yourself.

## Common HTML tags
There is a wide variety of HTML tags that you can use to structure your content:

- `div` a generic **box** that takes the whole width (block element)
- `span` a generic **box** that is inline with the text (inline element)
- `h1`, `h2`, ... `h6` **headings** of the hierarchy 1 to 6
- `p` **paragraph**
- `strong` to make something **bold** inside some text
- `em` to emphasise something inside some text (**italic**)
- `a` anchor or hyperlink to **link** to another page
- `img` to insert an **image**
- `button` to **trigger** some action
- `br` line **break**
- `ol` an **ordered** list
- `ul` an **unordered** list
- `li` a **list** element inside a list

Many of those elements have a semantic meaning to the browser and also have different default CSS styles.

<iframe height="360" src="/2/embed/examples/a-few-more-html-elements"></iframe>

There are also semantic elements like `main`, `header`, `footer`, `section`, `aside`, `figure` which work exactly like `div` elements, but can provide a more semantic structure that `div`s.

- [Full list](https://www.w3schools.com/tags/ref_byfunc.asp) of all availible HTML tags on w3schools.
- [Cheatsheet](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet) by CodeAcademy
- Difference between [block and inline elements](https://www.w3schools.com/html/html_blocks.asp) on w3schools.

## Attributes
Attributes give more details and functionality to elements, that often tell the browser not only what kind of element this is, but also how it works.

> There are [optional attributes](https://www.w3schools.com/tags/ref_standardattributes.asp) that can be added to any element.

Give this headline a **target anchor (id)** that can be jumped to:
```html
<h1 id="chapter-1">Chapter 1</h1>
<a href="#chapter-1">Go to chapter 1</a>
```

Assign **classes** in order to select them with CSS or JS
```html
<div class="grid">
  <div class="grid-item very-interesting">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item not-interesting">Item</div>
  <div class="grid-item">Item</div>
</div>
```

Shows a small **tooltip** when hovering this button:
```html
<button title="Click here to print this page">Print</button>
```

> And there are [specific attributes](https://www.w3schools.com/tags/ref_attributes.asp) that belong to certain elements.

Define an **image** source url url and an alt-text that can be shown if the image fails to load:
```html
<img src="image-1.jpg" alt="My image" />
```
Define a **link** pointing to another website:
```html
<a href="next-article.html">Read more</a>
<a href="https://google.com" target="_blank" external>Read more</a>
```

## Resolving problems
It is very usual to regularly run into errors when writing HTML, so don’t worry. These are common reasons:
- Unclosed elements
- Badly nested elements like `<p>Lorem <em>ipsum</p></em>`
- Incorrect tag syntax like `<p class="centered>Text</p>`

Find out more:
- [Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML) by MDN
- [Validate your HTML code](https://validator.w3.org/#validate_by_input) at w3c

## Further surfing

<div class="iframe video-wrapper">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/CkzbI1Tv_rQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

> [Basics of HTML](https://www.youtube.com/watch?v=CkzbI1Tv_rQ) by Laurel Schwulst (14:23min). In context of this workshop, don’t worry too much about those `<!DOCTYPE html>`, `<html>`, `<head>` and `<body>`-stuff.

- [HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML) on Mozilla MDN
- [htmlreference.io](https://htmlreference.io)
- [HTML on Devdocs.io](https://devdocs.io/html/)
- [HTML Quizz](https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML) by w3schools
- [HTML & CSS courses](https://www.codecademy.com/catalog/language/html-css) on CodeAcademy
- Google `HTML tricks`, `HTML in 5 minutes`, `HTML reference` or `HTML ...`
