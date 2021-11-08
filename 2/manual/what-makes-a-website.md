# What makes a Website?

A website is basically a collection of files that can be interpreted and rendered by a browser. There are 3 fundamental technologies to make this happen: HTML, CSS and JS.

## 📑 HTML Hypertext Markup Language
HTML is the basic architecture, every website is made of. The most basic configuration of a website consits of just on single file: `index.html`. It is basically a text document that contains structured content, meaning that HTML is used to define the various sections of a document, like paragraphs, a headline or invisible metadata, so that the browser can identify and differentiate them.

First, let’s look at some text without HTML:

<iframe height="360" src="/examples/er-ists-1/embed"></iframe>

> The source code is on the left, the rendered output on the right.

You can see, that the headline and all the linebreaks are not shown. Therefore we need HTML to structure the text:

<iframe height="420" src="/examples/er-ists-2/embed"></iframe>

> Play with it on [CodePen](https://codepen.io/moritzebeling/pen/PopOPyd)

Now the browser knows, what the headline and the paragraphs are and where to put line breaks.

> Right-click on any website and click on "Inspect" or "Show source code" to view the HTML source code of that website.

## 🎨 CSS Cascading Style Sheets
To define the visual style of the website, we can use CSS. It lets us notate instructions on how the browser should present the different sections of the HTML.

<iframe height="460" src="/examples/er-ists-3/embed?html=false"></iframe>

> Note, that the HTML is the exact same then in the example above.

So HTML brings the structured content, while CSS knows how this structure should look like in terms of layout, color or typography.

> Go to your browsers developer menu and click "Disable styles" to disable CSS all together and reveal how the current website would look without it.

## 💫 JS
The third fundamental web technology is **JavaScript**, which is a programming language that runs inside the browser once a visitor has opened a website. It can be used to change and manipulate both HTML and CSS as well as adding interactivity, animations or time based events. However, JS won’t we the focus of this workshop.

## TL;DR again pls

<div class="iframe video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gT0Lh1eYk78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

> [The 3 amigos HTML, CSS, JS](https://www.youtube.com/watch?v=gT0Lh1eYk78) by Danielle Thé (3:57min)

In this workshop, we will focus on the first 2 amigos: HTML and CSS.
