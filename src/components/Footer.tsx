// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <div>
        <p>© {new Date().getFullYear()} Top Affiliate Lists</p>
        <p>Built with Next.js, React, TailwindCSS, and daisyUI.</p>
      </div>
    </footer>
  );
}
