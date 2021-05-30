---
title: Assignment 1
---

# Assignment 1: Text formatting

We now have heard of HTML and CSS, so let’s start with the first assignment:

1. Open a new [CodePen](https://codepen.io/pen) and log in to your account

2. Go on the internet or your book shelf and search for a small poem you like. Maybe together with some context like title, author, year? Copy and paste that to the HTML editor and clean up the text so that it looks good in the HTML editor.

<iframe height="360" src="/examples/er-ists-1/embed"></iframe>

> Raw text without HTML structure results in just one long text. See it on [CodePen](https://codepen.io/moritzebeling/pen/ZEeabqG)

> Maybe it’s especially interesting when you choose a poem that already imposes some typography or text formatting.

## 📑 HTML

3. Now we need to bring in some order using HTML. So this is how it works:

- An HTML document is composed of single HTML elements, that can be arranged as siblings or nested structures
- Elements are defined by `<tags>`
- Each tag must open `<tag>` and eventually close `</tag>`, however there are selfclosing tags like `<br />` or `<img />` that are not allowed to have any content
- There are various different tags with different meaning, like `<h1>` for headline or `<p>` for paragraph

<iframe height="360" src="/examples/er-ists-2/embed"></iframe>

> Using HTML, we can structure the content. The browser applies its default stylesheet. See it on [CodePen](https://codepen.io/moritzebeling/pen/PopOPyd)

These tags might help you with this task:
- `<h1>`, `<h2>`, ... `<h6>` [headlines](https://www.w3schools.com/tags/tag_hn.asp) of different hierarchies
- `<p>` [paragraph](https://www.w3schools.com/tags/tag_p.asp)
- `<br />` or `<br>` [line break](https://www.w3schools.com/tags/tag_br.asp)
- `<blockquote>` [quote](https://www.w3schools.com/tags/tag_blockquote.asp)
- `<pre>` [preformatted text](https://www.w3schools.com/tags/tag_pre.asp)
- `<em>` [emphasised](https://www.w3schools.com/tags/tag_em.asp) (italic)
- `<strong>` [strong](https://www.w3schools.com/tags/tag_strong.asp) (bold)
- `<hr>` [horizonal rule](https://www.w3schools.com/tags/tag_hr.asp) (line)

<iframe height="360" src="/examples/basic-html-elements/embed"></iframe>

To find out more, check out these links:
- Our small [HTML reference](/manual/3a-HTML)
- [Full list of available tags](https://www.w3schools.com/tags/ref_byfunc.asp) on w3schools
- [HTML text fundamentals](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) on MDN
- Google `HTML secrets`, `learn HTML in 5 minutes`, `HTML text formatting`

> Don’t try to solve this task as quickly as possible, but rather have a look at all the options, experiment a little bit and get a little used to HTML.

## 🎨 CSS

4. Now we need to make this more beautiful using CSS. This is how it works:

- While HTML brings the structure and content, CSS adds the visual style
- Use a selector like `tagname` or `.classname` to apply a style rule to an HTML element
- Inside `{` that style rule you can list all the single style definitions `}`
- Each definition is notated as `property: value;`. There is a defined list of avaliable properties and each property has a defined range of optional values.

<iframe height="360" src="/examples/basic-css-styling/embed"></iframe>

> The `h1` css selector applies the style to the `<h1>` HTML element. Note that `html` and `body` are inserted for us by CodePen, so we do not have to type them in HTML, but can style them with CSS. Also check out how the text color is set individually for the `h1`, while the `p` inherits it from `html`.

These style properties might help you:
- [`font-family`](https://www.w3schools.com/cssref/pr_font_font-family.asp)
- [`font-size`](https://www.w3schools.com/cssref/pr_font_font-size.asp)
- [`text-align`](https://www.w3schools.com/cssref/pr_text_text-align.asp)
- [`text-indent`](https://www.w3schools.com/cssref/pr_text_text-indent.asp)
- [`text-justify`](https://www.w3schools.com/cssref/css3_pr_text-justify.asp)
- [`text-decoration`](https://www.w3schools.com/cssref/pr_text_text-decoration.asp) e.g. for underlining
- [`text-transform`](https://www.w3schools.com/cssref/pr_text_text-transform.asp) e.g. for capitalizing
- [`text-shadow`](https://html-css-js.com/css/generator/text-shadow/)
- [`letter-spacing`](https://www.w3schools.com/cssref/pr_text_letter-spacing.asp)
- [`line-height`](https://www.w3schools.com/cssref/pr_dim_line-height.asp)
- [`color`](https://www.w3schools.com/cssref/pr_text_color.asp) text color
- [`background-color`](https://www.w3schools.com/cssref/pr_background-color.asp)
- [`margin`](https://www.w3schools.com/cssref/pr_margin.asp) outer space of an element

Learn more:
- Our small [CSS Reference](/manual/3b-CSS)
- [All CSS properties](https://www.w3schools.com/cssref/default.asp) on w3schools
- Klasse Digitale Grafik [CSS typography](https://github.com/Klasse-Digitale-Grafik/tutorials/blob/main/Website-Typography.md) docs
- [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp)
- [CSS unit](https://www.w3schools.com/cssref/css_units.asp)
- [CSS colors](https://www.w3schools.com/cssref/css_colors.asp)
- Or google `CSS font styling`, `CSS typography`, `CSS ...`

> You don’t have to decide for one final result, but rather feel free to create multiple pens with different stylings.

## Sharing round
