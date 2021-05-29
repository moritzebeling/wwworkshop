---
title: What makes a Website?
---

# What makes a Website?

A website is basically a collection of files that can be interpreted and rendered by a browser. There are 3 fundamental technologies to make this happen: HTML, CSS and JS.

## 📑 HTML Hypertext Markup Language
The most basic configuration of a website consits of just on single file: `index.html`. It is basically a text document that contains structured content, meaning that HTML is used to define the various sections of a document, like paragraphs, a headline or invisible metadata, so that the browser can identify and differentiate them.

First, let’s look at some text without HTML:

<iframe height="360" src="/examples/er-ists-1/embed"></iframe>

> The source code is on the left, the rendered output on the right.

You can see, that the headline and all the linebreaks are not shown. Therefore we need HTML to structure the text:

<iframe height="420" src="/examples/er-ists-2/embed"></iframe>

Now the browser knows, what the headline and the paragraphs are and where to put line breaks.

## 🎨 CSS Cascading Style Sheets
To define the visual style of the website, we can use CSS. It lets you notate instructions on how the browser should present the different sections of the HTML.

<iframe height="460" src="/examples/er-ists-3/embed?html=false"></iframe>

So HTML brings the structured content and CSS knows how this structure should look like in terms of layout, color or typography.

## 💫 JS
The third fundamental web technology is **JavaScript**, which is a programming language that runs inside the browser once a visitor has opened a website. It can be used to change and manipulate both HTML and CSS as well as adding interactivity or time based events.

----

> Explained again: [The 3 amigos HTML, CSS, JS](https://www.youtube.com/watch?v=gT0Lh1eYk78) by Danielle Thé (3:57min)

However, in this workshop we will focus on the first 2 of them: HTML and CSS. So let’s get started.
