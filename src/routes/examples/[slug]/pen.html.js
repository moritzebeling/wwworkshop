import path from "path";
import fs from "fs";

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

export async function get( request ) {

  let slug = request.params.slug;
  const html = getFile( `/examples/${slug}/index.html` );

  if( html ){
    return {
      headers: {
				'Cache-Control': `max-age=0, s-max-age=${60*60}`,
				'Content-Type': 'text/html; charset=utf-8'
			},
      body:
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Title</title>
    <style>html{ background-color: white }</style>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>${html}</body>
</html>`
    };
  }

  return {
    status: 404
  };
}
