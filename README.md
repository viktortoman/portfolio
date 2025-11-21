# Viktor Tomán - Senior Web Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A modern, responsive portfolio website built to showcase my experience, technical stack, and featured projects. Designed with a focus on clean UI/UX, performance, and code maintainability.

## 🌟 Features

- **Modern Tech Stack:** Built with Next.js 14 (App Router) and React.
- **Responsive Design:** Fully responsive layout utilizing Tailwind CSS grid and flexbox systems.
- **Bilingual Support:** Custom state-based internationalization (English/Hungarian).
- **Data-Driven UI:** Content is separated from presentation (`data.ts`) for easy updates.
- **Visual Effects:** Glassmorphism, gradients, and smooth hover transitions.
- **Optimized Assets:** Using Next.js Font optimization and SVG icons.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) / JavaScript
- **Icons:** Custom SVG & DevIcons
- **Deployment:** Vercel / Netlify

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/viktortoman/portfolio.git](https://github.com/viktortoman/portfolio.git)
   cd portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx      # Root layout & metadata
│   ├── page.tsx        # Main landing page component
│   ├── data.ts         # Centralized content & translations
│   └── globals.css     # Tailwind directives
├── public/             # Static assets (CV, images)
└── ...
```

## 🔧 Customization

The project is designed to be easily customizable. All text content, experience data, and project links are stored in `app/data.ts`.

To update the content:
1. Open `app/data.ts`.
2. Modify the `content`, `skills`, or `experience` objects.
3. The changes will automatically reflect across the site.

## 📬 Contact

**Viktor Tomán** - Senior Web Developer

- 📍 Location: Hungary
- 📧 Email: viktor.toman19@gmail.com
- 📱 Phone: +36 (30) 225 4993
- 💼 LinkedIn: [viktor-toman1991](https://www.linkedin.com/in/viktor-toman1991/)

---

*© 2025 Viktor Tomán. All Rights Reserved.*