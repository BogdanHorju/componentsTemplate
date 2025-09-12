<<<<<<< HEAD
# componentsTemplate
Create a template with common components
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
<<<<<<< HEAD
>>>>>>> 16a6ce9 (Initial commit from Create Next App)
=======

# My Components Library

This project contains a collection of reusable UI components built with Next.js and Tailwind CSS. The components are modular, customizable, and designed to be easily integrated into other projects.

## Components Overview

### 1. **Navbar**
- **Path**: `src/components/layout/navbar.tsx`
- **Description**: A sticky navigation bar that includes branding and a mode toggle for light/dark themes.
- **Usage**:
  ```tsx
  import { Navbar } from "@/components/layout/navbar";

  function App() {
    return <Navbar />;
  }
  ```

### 2. **Sidebar**
- **Path**: `src/components/layout/sidebar.tsx`
- **Description**: A vertical navigation menu that dynamically renders links based on the provided sections.
- **Usage**:
  ```tsx
  import { Sidebar } from "@/components/layout/sidebar";
  import { sections } from "@/constants/sections";

  function App() {
    return <Sidebar sections={sections} />;
  }
  ```

### 3. **ButtonDemo**
- **Path**: `src/components/demos/button-demo.tsx`
- **Description**: A demo showcasing different button variants.
- **Usage**:
  ```tsx
  import { ButtonDemo } from "@/components/demos/button-demo";
  import { buttonData } from "@/constants/buttonData";

  function App() {
    return <ButtonDemo items={buttonData} t={(key) => translations[key]} />;
  }
  ```

### 4. **InputDemo**
- **Path**: `src/components/demos/input-demo.tsx`
- **Description**: A demo showcasing different input field variants.
- **Usage**:
  ```tsx
  import { InputDemo } from "@/components/demos/input-demo";

  function App() {
    return <InputDemo />;
  }
  ```

### 5. **Gallery**
- **Path**: `src/components/demos/gallery.tsx`
- **Description**: A gallery component with a carousel and lightbox functionality.
- **Usage**:
  ```tsx
  import { Gallery } from "@/components/demos/gallery";
  import { gallery } from "@/constants/gallery";

  function App() {
    return <Gallery images={gallery} />;
  }
  ```

## How to Reuse Components in Other Projects

1. **Copy the Component**:
   - Copy the desired component file(s) from the `src/components/` directory.
   - Ensure you also copy any dependencies (e.g., constants, utility functions).

2. **Install Required Dependencies**:
   - Ensure your project has the necessary dependencies installed, such as `next`, `react`, `tailwindcss`, and any other libraries used by the component.

3. **Update Imports**:
   - Adjust the import paths in the copied component files to match your project's structure.

4. **Tailwind Configuration**:
   - Ensure your Tailwind CSS configuration includes the required classes and theme extensions used by the components.

5. **Test the Integration**:
   - Add the component to your project and test its functionality to ensure it works as expected.

## Project Structure

```
my-components/
├── public/          # Static assets (e.g., images)
├── src/
│   ├── app/         # Next.js app directory
│   ├── components/  # Reusable components
│   │   ├── demos/   # Component demos
│   │   ├── layout/  # Layout components (e.g., Navbar, Sidebar)
│   │   └── ui/      # UI primitives (e.g., Button, Input)
│   ├── constants/   # Static data and configuration
│   └── locales/     # Localization files
└── README.md        # Project documentation
```

## License
This project is open-source and available under the MIT License.
>>>>>>> 9a4ca09 (Initial commit)
