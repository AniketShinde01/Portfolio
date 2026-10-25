import type { Metadata } from "next";
import ResumeViewer from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Aniket Shinde",
  description: "View Aniket Shinde’s resume.",
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-header">
        <a className="brand" href="/" aria-label="Back to Aniket Shinde portfolio">
          <span className="brand-mark">AS</span>
          <span>Aniket Shinde<span className="brand-dot">.</span></span>
        </a>
        <a className="resume-back" href="/">← Back to portfolio</a>
      </header>
      <ResumeViewer />
      <footer className="resume-footer">
        <span>© 2026 Aniket Shinde</span>
        <a href="mailto:shindeaniketsanjay@gmail.com">Get in touch ↗</a>
      </footer>
    </main>
  );
}
