## 2024-07-31 10:00:00 AM

- Renamed image files in the `Gallary/` directory that started with numbers by prefixing them with `img_` (e.g., `1.jpeg` -> `img_1.jpeg`).
- Updated `index.html` to reflect the new image filenames in the gallery section.

## 2024-07-31 10:15:00 AM

- Fixed `<script>` tag for `main.js` in `index.html` to point to correct path (`js/main.js`).
- Added `defer` attribute to all script tags in `index.html`.
- Removed empty script tag from `index.html`.
- Moved all script tags from `<head>` to the end of `<body>` in `index.html` for better performance.

## 2024-07-31 10:30:00 AM

- Added Lightbox2 library (CSS and JS) to `index.html`.
- Modified gallery HTML in `index.html` to use `<a><img></a>` structure compatible with Lightbox2.
- Added `data-lightbox="image-gallery"` attribute to gallery links.
- Removed previous JavaScript-based background-image loading for gallery items from `js/main.js`.
- Updated `styles.css`: Removed `aspect-ratio` from `.gallery-item` and changed `object-fit` to `contain` for `.gallery-item img` to prevent thumbnail cropping.

## 2024-07-31 10:45:00 AM

- Fixed smooth scrolling JavaScript (`js/main.js`) to allow navigation links (like Volunteer, Donate) to work correctly, while preserving smooth scroll for internal links.

## 2024-07-31 11:00:00 AM

- Modified active link highlighting JavaScript (`js/main.js`) to exclude the 'Donate' link, ensuring it retains its unique button styling.

## 2024-07-31 11:15:00 AM

- Added `donate-btn` class to the Donate link in `index.html` for better CSS targeting.
- Attempted to consolidate CSS for `.donate-btn` and add `!important` in `styles.css` to ensure consistent styling (Edits may not have applied cleanly due to CSS complexity).
- Reverted JavaScript change from 11:00 AM; active link highlighting now applies to all links including Donate (`js/main.js`), relying on CSS specificity/!important for Donate button styling.

## 2024-07-31 11:30:00 AM

- Adjusted smooth scrolling JavaScript (`js/main.js`) to offset scroll position by the height of the fixed navigation bar (`.main-nav`), ensuring section titles are not hidden under the nav bar after clicking internal links.

## 2024-07-31 11:40:00 AM

- Added an additional 15px offset to the smooth scroll calculation (`js/main.js`) to provide more visual padding between the fixed header and the scrolled-to section title.

## 2024-07-31 11:50:00 AM

- Reordered sections in `index.html`: Moved Gallery section above the Impact section.