# ndd

A robust starter template for Next.js 14, integrated with Drizzle ORM, and . This template provides a quick and seamless option to get up and running quickly

## 🌟 Features

- **[Next.js App Router](https://nextjs.org/docs)**: The latest version of the popular React framework for server-rendered applications.
- **[Drizzle ORM](https://drizzle-orm-link.com/docs)**: A modern and efficient ORM to manage database operations.
- **[drizzle-zod](https://orm.drizzle.team/docs/zod)**: plugin for Drizzle ORM that allows you to generate **[Zod](https://github.com/colinhacks/zod)** schemas from Drizzle ORM schemas.
- **[Postgres](https://www.postgresql.org/)**: A scalable and serverless relational database.
- **[TailwindCSS](https://tailwindcss.com/docs)**: A utility-first CSS framework for rapid UI development.
- **[Just. D](https://getjustd.com/)**: chill set of React components, built on top of **[React Aria Components](https://react-spectrum.adobe.com/react-aria/)**. Plus, it includes Tailwind CSS for sleek styling right out of the box.
- **(Coming Soon!) [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)**: Utilize the experimental features of Next.js for better server-side operations.
- **(Coming Soon!)[ UseFormStatus](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#experimental-useformstatus)**: An experimental hook to manage form states.

## 🚀 Getting Started

### Prerequisites

- Node.js version 18 or newer
- Package Manager such as npm, yarn, pnpm, or bun. I personally prefer and suggest using bun!

### Use This Template

You can use between manual setup or automated using `create-next-app`.

#### Automated Setup

```
npx create-next-app@latest -e https://github.com/mhmdbhsk/ndd project-name
```

#### Manual Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mhmdbhsk/ndd.git
   ```
2. **Install Dependencies**

   ```bash
   yarn install
   # or
   npm install
   # or
   pnpm install
   # or
   bun install
   ```
3. **Setup Environment Variables**

   - Copy .env.example file as .env.local or .env
   - Set up your local postgres database and assign connection string value to `DATABASE_URL` in the `.env` file
   - You can generate secret for next-auth using `npx auth secret`
4. **Run Migrations**

   ```bash
   yarn db:push
   # or
   npm db:push
   # or
   pnpm db:push
   # or
   bun db:push
   ```
5. **Start Development Server**

   ```bash
   yarn dev
   # or
   npm run dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Now, you can open [http://localhost:3000](http://localhost:3000) in your browser to see your app in action!

## 📃 License

This project is [MIT](./LICENSE) licensed.

##  Reference

- [Just.D Nextjs Starter Template](https://github.com/justdlabs/next.js)
- [tuffstuff9 template](https://github.com/tuffstuff9/nextjs-serveraction-drizzle-starter)
