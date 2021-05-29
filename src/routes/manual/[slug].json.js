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
      return hljs.highlight(lang, code).value
    } else {
      return hljs.highlightAuto(code).value
    }
  },
});

function getPost(fileName){
  return fs.readFileSync(
    path.resolve("content/", `${fileName}.md`),
    "utf-8"
  );
};

export async function get( {params} ) {

  const { slug } = params;

  const post = getPost(`manual/${slug}`);

  const renderer = new marked.Renderer();

  const { data, content } = grayMatter(post);
  const html = marked(content, { renderer });

  if( html ){
    return {
      body: {
        ...data,
        content: html
      }
    };
  }
  return {
    body: 'not found'
  };

}
