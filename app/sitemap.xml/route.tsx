import { app_base_url } from "@utils/url";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${app_base_url}</loc>
     </url>
     <url>
       <loc>${app_base_url}/home</loc>
     </url>
      <url>
       <loc>${app_base_url}/about</loc>
     </url>
     <url>
     <loc>${app_base_url}/blogs</loc>
   </url>
   </urlset>
 `;
}
export function GET() {
  const body = generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
