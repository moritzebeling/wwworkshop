import path from "path";
import fs from "fs";

function getFile( fileName ){
  return fs.readFileSync(
    path.resolve( `content${fileName}` ),
    "utf-8"
  );
};

export async function get( request ) {

  const html = getFile( request.path );

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
    <style>html{ background: white }</style>
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
