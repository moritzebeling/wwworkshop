import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
  breaks: true,
  smartypants: true,
  highlight: function (code, lang, _callback) {
    if (hljs.getLanguage(lang)) {
      return hljs.highlight(code, {language: lang}).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
});

function getFile( fileName ){
  try {
    return fs.readFileSync(
      path.resolve( `content${fileName}` ),
      "utf-8"
    );
  } catch ( error ){
    return '';
  }
};

function getMarkdown( slug ){
  const md = getFile( `/examples/${slug}/index.md` );

  const renderer = new marked.Renderer();
  const { data, content } = grayMatter(md);
  const text = marked(content, { renderer });

  data.title = data.title || 'New sketch';

  return { data, text };
}

export async function get( request ) {

  const {slug} = request.params;

  const html = getFile( `/examples/${slug}/index.html` );
  const css = getFile( `/examples/${slug}/index.css` );
  const { data, text } = getMarkdown( slug );

  if( html ){
    return {
      body: {
        ...data,
        html: hljs.highlight(html, {language: 'html'}).value,
        css: hljs.highlight(css, {language: 'css'}).value,
        iframe: `/examples/${slug}/index.html`,
        content: text
      }
    };
  }
}
