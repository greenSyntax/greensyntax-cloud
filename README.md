
# GreenSyntax Cloud

GreenSyntax Cloud is a modern portfolio and showcase web application built with Next.js 16, React 19, and TypeScript. It features a clean, responsive UI, dynamic content, and integrations with GitHub, Spotify, and Medium.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Main Components](#main-components)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- Hero introduction with profile image
- About section with background and focus
- Skills list (iOS, Swift, Python, Node.js, etc.)
- Work experience timeline
- Medium articles showcase
- Open source GitHub projects
- Spotify playlist embed
- Responsive design and mobile-friendly bottom tab bar

## Tech Stack
- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (via CDN, no config file)
- [ESLint](https://eslint.org/) for code linting

## Project Structure

```
app/
	globals.css         # Global styles (Tailwind, resets)
	layout.tsx          # Root layout, includes BottomTabBar
	page.tsx            # Main page, imports all sections
	components/
		About.tsx         # About section
		Articles.tsx      # Medium articles
		BottomTabBar.tsx  # Mobile tab bar with social links
		GithubRepos.tsx   # Open source projects
		HeroIntro.tsx     # Hero intro/profile
		Skills.tsx        # Skills list
		SpotifyPlaylist.tsx # Spotify playlist embed
		WorkExperience.tsx # Work experience timeline
public/               # Static assets (images, icons)
```

## Main Components
- **HeroIntro**: Greets visitors, shows profile and tagline.
- **About**: Brief background, current focus, and expertise.
- **Skills**: Lists technical skills (iOS, Swift, Python, Node.js, etc.).
- **WorkExperience**: Timeline of companies, roles, and periods.
- **Articles**: Highlights Medium articles with images and links.
- **GithubRepos**: Showcases open source projects with descriptions and links.
- **SpotifyPlaylist**: Embeds a Spotify playlist.
- **BottomTabBar**: Fixed mobile tab bar with links to GitHub, X (Twitter), LinkedIn, and theme toggle.

## Getting Started

Install dependencies:

```bash
npm install
# or

# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any Next.js-compatible host.

## Contributing

Contributions are welcome! Please fork the repo and open a pull request.

## License

MIT
