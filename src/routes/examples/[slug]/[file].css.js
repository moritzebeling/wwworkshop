import path from "path";
import fs from "fs";

function getFile( fileName ){
  return fs.readFileSync(
    path.resolve( `content${fileName}` ),
    "utf-8"
  );
};

export async function get( request ) {

  const css = getFile( request.path );

  if( css ){
    return {
      headers: {
				'Cache-Control': `max-age=0, s-max-age=${60*60}`,
				'Content-Type': 'text/css; charset=utf-8'
			},
      body: css
    };
  }

  return {
    status: 404
  };
}
