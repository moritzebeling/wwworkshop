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

function readCollection( fileslist ){
  return Promise.all(
    fileslist.map(async file => {
      const content = (await fs.readFile(file)).toString();
      // return frontmatter dataset together with slug
      return {...grayMatter(content).data, path: `/workshop/${path.parse(file).name}`};
    }),
  );
}

export async function get() {

	const files = await getCollection('workshop/*.md');
  let contents = await readCollection( files );

	return {
		body: contents
	};

}
