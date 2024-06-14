# To run the payload project:

- `cd payload`
- `docker-compose up` (docker should be installed)
- open `http://localhost:3000/admin` and create new admin user, then create articles

# To run the next.js project (first you should start payload project):

- `cd web`
- `npm i`
- `npm run watch` (for dev mode) or `npm run build` and `npm run start` (for prod mode)
- open `http://localhost:3001`

# Some notes

It was a first time for me developing with payload cms, so I suppose some things were not done the best way.
I guess out of the box with mongodb it's hard to make a bidirectional relationship between `articles` and `comments` collections.
I removed `.env` file from `.gitignore` so it's easier to start a project (it has secrets inside, so usually it's a bad practice).

About performance:
It's possible to prerender articles pages at build time using `generateStaticParams` function

# About seo

There is much more you can do about seo:

- generating `json-ld` scripts with schema
- generating `openGraph` meta tags
- checking (and fixing if needed) core web vitals metrics
- generating `sitemap.xml` with `robots.txt`
  etc...
