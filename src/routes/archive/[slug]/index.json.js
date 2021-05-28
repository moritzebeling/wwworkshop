import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";

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
  const md = getFile( `/archive/${slug}/index.md` );

  const renderer = new marked.Renderer();
  const { data, content } = grayMatter(md);
  const text = marked(content, { renderer });

  data.title = data.title || 'New sketch';

  return { data, text };
}

export async function get( request ) {

  const {slug} = request.params;

  const html = getFile( `/archive/${slug}/index.html` );
  const css = getFile( `/archive/${slug}/index.css` );
  const { data, text } = getMarkdown( slug );

  if( html ){
    return {
      body: {
        ...data,
        html: html,
        css: css,
        content: text
      }
    };
  }
}
