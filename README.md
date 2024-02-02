![Applications Home Page](/public/banner.png)

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

3. Start the development server:

```bash
npm run dev
# or
yarn dev

```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
