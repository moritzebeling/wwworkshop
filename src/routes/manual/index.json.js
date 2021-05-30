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
      const filename = path.parse(file).name;
      return {
        ...grayMatter(content).data,
        group: parseInt( filename.substring(0,1) ),
        path: `/manual/${filename}`
      };
    }),
  );
}

export async function get() {

	const files = await getCollection('manual/*.md');
  let contents = await readCollection( files );

	return {
		body: contents
	};

}
