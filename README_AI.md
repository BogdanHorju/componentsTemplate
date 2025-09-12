# AI Integration Overview

This document provides an overview of the current state of the `my-components` project to assist AI systems in understanding its structure, components, and usage. The goal is to enable seamless integration and further development.

## Project Summary

The `my-components` project is a collection of reusable UI components built with Next.js and Tailwind CSS. It is designed to be modular, customizable, and easily integrable into other projects.

### Key Features
- Modular and reusable components.
- Tailwind CSS for consistent styling.
- Localization support with JSON-based dictionaries.
- Demo components for showcasing UI elements.

## Current Project Structure

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

## Components Overview

### Navbar
- **Path**: `src/components/layout/navbar.tsx`
- **Description**: A sticky navigation bar with branding and a mode toggle.
- **Dependencies**: None.

### Sidebar
- **Path**: `src/components/layout/sidebar.tsx`
- **Description**: A vertical navigation menu that dynamically renders links.
- **Dependencies**: `sections` from `src/constants/sections.ts`.

### ButtonDemo
- **Path**: `src/components/demos/button-demo.tsx`
- **Description**: A demo showcasing button variants.
- **Dependencies**: `buttonData` from `src/constants/buttonData.ts`.

### InputDemo
- **Path**: `src/components/demos/input-demo.tsx`
- **Description**: A demo showcasing input field variants.
- **Dependencies**: None.

### Gallery
- **Path**: `src/components/demos/gallery.tsx`
- **Description**: A gallery component with carousel and lightbox functionality.
- **Dependencies**: `gallery` from `src/constants/gallery.ts`.

## Localization

Localization is managed using JSON files in the `src/locales/` directory. The current implementation supports Italian (`it.json`) and English (`en.json`).

### Example
```json
{
  "button": "Button",
  "input": "Input",
  "gallery": "Gallery"
}
```

## Tailwind CSS

The project uses Tailwind CSS for styling. Ensure that the Tailwind configuration includes all necessary classes and theme extensions.

## Integration Steps

1. **Clone the Repository**:
   - Clone the project to your local environment.

2. **Install Dependencies**:
   - Run `npm install` to install all required dependencies.

3. **Run the Development Server**:
   - Use `npm run dev` to start the development server.

4. **Test Components**:
   - Navigate to the appropriate routes to test individual components.

5. **Extend or Modify**:
   - Add new components or modify existing ones as needed.

## Notes for AI Systems

- **Component Reusability**: Components are designed to be modular. Ensure that dependencies are correctly imported when reusing components.
- **Localization**: Use the `translations` object to fetch localized strings.
- **Styling**: Follow the Tailwind CSS conventions used in the project.
- **Testing**: Test all changes in a local development environment before deployment.

## Future Enhancements

- Add more demo components (e.g., forms, modals).
- Improve localization with dynamic language switching.
- Optimize components for better performance.

## Contact
For any questions or issues, please contact the project maintainer.
