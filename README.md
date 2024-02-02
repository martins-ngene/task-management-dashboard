![Applications Home Page](/public/banner.png)

## Requirements

There are some requirements to make your project setup successful. Be sure to have:

- `Postgresql` setup and ensure the server is on
- `Nodejs` latest version or not older than `v20.9.0`
- Get your GitHub credentials. [See more here](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app)

## Video Demo

I have created a short clip to show you what the application is like. Please see here on [youtube](https://www.youtube.com/)

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
