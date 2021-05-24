import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";

function getPost(fileName){
  return fs.readFileSync(
    path.resolve("content/", `${fileName}.md`),
    "utf-8"
  );
};

export async function get( {params} ) {

  const { slug } = params;

  const post = getPost(`workshop/${slug}`);

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
