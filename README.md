![Applications Home Page](/public/banner.png)

## Requirements

There are some requirements to make your project setup successful. Be sure to have:

- `Postgresql` setup and ensure the server is on
- `Nodejs` latest version or not older than `v20.9.0`
- Get your GitHub credentials. [See more here](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app)

## Video Demo

I have created a short clip to show you what the application is like. Please see here on [youtube](https://youtu.be/lDYFjSRiHaI)

## Application Design Choices

Building applications transcends making it work on your machine. There are three most widely used operating systems and your application should work on them. Also, different users prefer different browsers and different browsers have different engines that compile JavaScript like Chrome uses the V8 engine and FireFox uses Spider Monkey. With these in mind, I have chosen specific tools to ensure the least possible amount of compatibility issues while aimimg for zero.

For the technologies I used Next.js with JavaScript and Tailwind CSS for styling. I utilized Next.js as a fullstack framework to build both my user interface as a single page application (SPA) and API endpoints. Postgresql and Prisma seamlessly integrates with Next.js ensuring together with Next-Auth for authentication that the tables are properly related and users are well authorized. For the application state I resulted to localStorage for a smooth user experience. Endpoints where consumed with React Query for caching and to avoid stale data.

## Getting Started

1. Create a `.env` file with credentials as shown below:

```bash
DATABASE_URL=postgresql://username:password@localhost:5432/database_name?schema=public
GITHUB_CLIENT_ID="Your GITHUB_CLIENT_ID Here"
GITHUB_CLIENT_SECRET="Your GITHUB_CLIENT_SECRET Here"
NEXT_PUBLIC_API_URL_BACKEND=http://localhost:3000/api

```

2. Install dependencies:

```bash
npm install
# or
yarn install

```

3. Create your postgresql database instance:

```bash
prisma migrate dev

```

4. Start the development server:

```bash
npm run dev
# or
yarn dev

```
