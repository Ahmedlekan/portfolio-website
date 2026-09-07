# Ahmed's portfolio

A Next.js, TypeScript, and Tailwind CSS portfolio focused on DevOps and cloud engineering.

## Local development

Use Node.js 20.9 or later and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

The tests use Node's test runner and the installed TypeScript compiler. They test contact validation, payload limits, rate limiting, and the API handler with a mocked mail transport. They never send real email.

## Hosting and the contact form

Hosting is managed separately by the owner. The existing `next.config.js` still sets `output: "export"`. A static export cannot execute the POST handler at `/api/sendmail`; the build can export pages successfully, but the exported files do not run this API handler.

For a Next.js server deployment, remove `output: "export"` and supply the email environment variables on the server. For static hosting, use a separately hosted form endpoint and remove the local POST route from the exported application. The UI includes direct email and LinkedIn links and handles unavailable or non-JSON responses.

Copy `.env.example` to `.env.local` and configure the server-only email values. For Gmail, use an app password. `EMAIL_FROM`, if supplied, must be an authorized sender. Do not put credentials in public environment variables or commit them.

The endpoint validates fields, limits request size, escapes HTML email content, checks a honeypot, and limits messages to three per email and thirty overall in a fifteen-minute window per process. This bounded in-memory guard resets when the process restarts; use a shared rate limiter or hosting-layer abuse controls for multiple server instances.

## Updating content

- `constants/constant.ts`: projects, skill groups, navigation, social links, and contact email.
- `components/Banner.tsx`: headline, availability, and primary actions.
- `components/Experience.tsx`: employment history.
- `components/Education.tsx`: education and credential links.
- `app/layout.tsx`: page title and search/social descriptions.
- `app/opengraph-image.tsx`: generated social sharing image.
- `public/icon.svg`: personal site icon.

The missing CV download has been replaced with a contact link. To restore it, add your real CV to `public/images/resume.pdf` and add a download link in `Banner.tsx`. The Udemy course is displayed without a link until a valid credential URL is available.

Project descriptions preserve the information in the original portfolio. Add real architecture diagrams, screenshots, repository documentation links, and measured results when available; no project metrics or evidence have been invented. Live previews may be hosted separately from the infrastructure described in a project's source code.

After choosing the public domain, set `SITE_URL` to its full HTTPS origin. The layout uses it for the canonical URL and social image URLs. Without it, Next.js may use a localhost fallback for social metadata. A sitemap and robots file can be added once the public domain is known.

## Accessibility and layout

The page uses document scrolling, semantic sections, a skip link, native disclosure panels, and a native mobile navigation dialog with Escape, focus containment, and focus restoration. Navigation tracks the current section. Form fields have visible labels and persistent submission feedback.

The active page no longer depends on animation or a skills carousel. CSS respects reduced-motion preferences. Inter is loaded once and used throughout.
