# City Dental Medical Tourism

Website for City Dental Medical Tourism. It helps international patients find affordable, high-quality dental care in India: implants, veneers, full-mouth restorations and more, at accredited partner clinics.

The original design is in [Figma](https://www.figma.com/design/kEYJD9Zc7jKt5cpWHGUvyL/Dental-Tourism-Website-Design).

## Tech stack

- [React 18](https://react.dev) + TypeScript
- [Vite](https://vite.dev) for the dev server and builds
- [React Router](https://reactrouter.com) for page navigation
- Tailwind CSS utility classes (precompiled; see [Styling](#styling))
- [Radix UI](https://www.radix-ui.com) primitives via [shadcn/ui](https://ui.shadcn.com) components
- [Lucide](https://lucide.dev) icons

## Getting started

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # create a production build in dist/
```

## Pages

| Route           | Page                                                      |
| --------------- | --------------------------------------------------------- |
| `/`             | Home: hero, treatments, destinations, testimonials, blog  |
| `/treatments`   | Treatments and pricing                                    |
| `/destinations` | Destination cities in India                               |
| `/clinics`      | Partner clinics                                           |
| `/quote`        | Free quote request form                                   |

## Project structure

```
public/                 Static files served as-is (favicon)
src/
  App.tsx               Routes; non-home pages are lazy-loaded
  main.tsx              Entry point
  index.css             Precompiled Tailwind styles
  assets/               Logo and clinic images
  components/
    HomePage.tsx        Home page, built from the *Section components
    *Page.tsx           Other pages
    *Section.tsx        Home page sections
    Navigation.tsx      Top navigation bar
    Footer.tsx
    figma/              ImageWithFallback (lazy loading, responsive images, error fallback)
    ui/                 Reusable shadcn/ui components (button, input, select, ...)
  utils/                Image URL helpers for Unsplash
```

## Styling

`src/index.css` is **precompiled** Tailwind CSS exported from Figma Make. Tailwind itself is not installed, so a Tailwind class that is not already in that file will have no effect. To use a new class, either add the CSS for it to `src/index.css` or set up Tailwind in the project.

Brand colors: primary blue `#007AB6`, accent green `#00A676`.

## Images

Use `ImageWithFallback` instead of a plain `<img>` for photos:

- Images lazy-load by default. Pass `priority` for images visible on first load (such as the hero) so they load immediately.
- Pass a `sizes` value matching how wide the image is displayed (for example `sizes="96px"` for an avatar) so browsers download an appropriately sized file.

## Credits

See [src/Attributions.md](src/Attributions.md). Components from shadcn/ui (MIT license); photos from Unsplash.
