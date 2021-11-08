# Anatomy of a website

## File structure

A website is basically a folder of files, but the most simple configuration would be just one file: `index.html`. But since you probably want to have some images or CSS, it more likely will look something like this:

```
may-small-website/
  index.html
  another-subpage.html
  styles.css
  action.js
  a-beatiful-image.jpg
  some-webfont.woff
```

> You can freely choose all the file names by yourself but the `index.html`. This is always the home page of your website.

If you have a lot of files, you way choose to organize it something like:

```
may-small-website/
  index.html
  another-subpage.html
  assets/
    styles.css
    action.js
    some-webfont.woff
  images/
    a-beatiful-image.jpg
```

## HTML

To write a valid HTML website, you will need to follow a certain pattern:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My new website</title>
    <!-- The head of your HTML document -->
    <!-- here goes metadata for the browser or search engines -->
    <!-- and references to files like css, js, webfonts -->
  </head>
  <body>
    <!-- The body of your HTML document -->
    <!-- here goes your actual HTML content, everything that should be visual on the website -->
  </body>
</html>
```

## CSS & JS

These are just text documents with the respective file extension of `.css` or `.js`. They work exactly as we practiced in CodePen, you can just copy from somewhere and paste into your local file.

### Including CSS

Paste this somewhere into your HTML `<head>`:
```html
<!-- <link rel="stylesheet" href="{your-filename}"> -->
<link rel="stylesheet" href="styles.css">
```

The filename `styles.css` is relative to your current document. So if you have the style sheet in some subfolder, you would have to do `/path/to/my/styles.css`. More on [file paths](https://www.w3schools.com/html/html_filepaths.asp).

### Including JS

Paste this at the very end of your HTML `<body>`:
```html
<!-- <script src="{your-filename}"></script> -->
<script src="action.js"></script>
```
