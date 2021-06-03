---
title: Assignment 4
---

# Assignment 4: Doing a "real" website

By now we have learned that with HTML and CSS we can instruct the browser to render elements on a website. Today we will leave our safespace CodePen and try to do a small "real" website by our own.

# Preparations

1. Download and install [Atom](https://atom.io). This is a free and open source code editor. A code editor is essentially a text editor, but especially for writing code. If you have an alternative (e.g. VS Code) already installed on your machine, thats also fine.

2. Install [atom-live-server-plus](https://atom.io/packages/atom-live-server-plus). In addition to the editor, we need a server that can provide our website files when we request it with the browser. Luckyly with such a plugin, this can be integrated into the code editor.
The easiest way to install it, is to go to `Settings` > `Install` > enter `atom-live-server-plus` into the search bar and click `Install`.

3. A website is basically a collection (or folder) of files. So please create a new folder somewhere on your computer called `wwworkshop` and another inside of that called `my-website` or anything.

4. Drag that empty `my-website` folder onto the Atom symbol to open the folder. You now see your workspace which is divided in 2 areas: left is the folder structure, right the editor. Let’s create a new file (right click on the left area) called `index.html` and type in something like `Hello world!`.

5. Start your server via `Packages` > `atom-live-server-plus` > `Start server`. A new browser window will pop up with the URL `http://127.0.0.1:3000`. (`127.0.0.1` is always the IP address on that very machine, while "port" `3000` is a certain channel that your server is now listening on). If the browser window returns `Hello world!`, you’re set up!

# Let’s go

1. Head over to the [Anatomy of a website](3d-anatomy-of-a-website.md) and copy the template for an HTML document into your `index.html`.

2. Create a new `styles.css` document and include it into the HTML.

3. Lookup any Wikipedia article on any topic you like (can be completely fake or fun) and take it as a sample for you to build your own small article: Take one `<h1>` and a few `<h2>` headlines, some paragraphs of text, maybe an image, some links, maybe a list of facts and build your own simplified article.

4. Go to the CSS and create a style and layout for your page.

5. Check out what topics the other workshop participants are working on, so maybe we can link between all articles to create a small and funzyclopedia.
