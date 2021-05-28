import grayMatter from "gray-matter";
import glob from 'glob';
import {fs} from 'mz';
import path from 'path';

async function getCollection( pattern ){
  // find all files that match the pattern
  // return file names
  return new Promise((resolve, reject) =>
    glob(`content/${pattern}`, (err, files) => {
      if (err) return reject(err);
      return resolve(files);
    }),
  );
}

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

function getMarkdown( fileName ){
  const md = getFile( fileName );
  const { data } = grayMatter(md);
  data.title = data.title || 'New sketch';
  return data;
}

function readCollection( fileslist ){
  return Promise.all(
    fileslist.map(async file => {
      file = file.replace(/^(content)/,"");
      const id = path.dirname( file );
      const data = getMarkdown(`${id}/index.md`);
      return {
        ...data,
        path: id,
        iframe: `${id}/index.html`,
      };
    }),
  );
}

export async function get() {

	const files = await getCollection('examples/**/index.html');
  let contents = await readCollection( files );

	return {
		body: contents
	};

}
