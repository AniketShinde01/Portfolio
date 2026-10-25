"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResumeViewer() {
  const [zoom, setZoom] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="resume-viewer" aria-label="Resume document">
      <div className="resume-toolbar">
        <div className="resume-document-title">
          <span className="pdf-icon">PDF</span>
          <span><b>Aniket Shinde</b><small>Frontend Developer · Resume</small></span>
        </div>
        <div className="resume-tools">
          <div className="document-zoom" aria-label="Resume zoom controls">
            <button type="button" onClick={() => setZoom((current) => Math.max(0.7, current - 0.1))} aria-label="Zoom out">−</button>
            <span>{Math.round(zoom * 100)}%</span>
            <button type="button" onClick={() => setZoom((current) => Math.min(1.8, current + 0.1))} aria-label="Zoom in">+</button>
          </div>
          <a className="resume-download" href="/assets/aniket-shinde-resume.pdf" download aria-label="Download resume PDF">
            <span className="download-label">Download PDF</span><span className="download-icon" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="resume-document" aria-label="Resume page">
        <div className="document-image-shell resume-image-shell" style={{ width: `${zoom * 100}%` }}>
          {!isLoaded && <div className="document-shimmer" role="status" aria-label="Loading resume" />}
          <Image
            className={`resume-page-image${isLoaded ? " document-image-loaded" : ""}`}
            src="/assets/aniket-shinde-resume-page.webp"
            alt="Aniket Shinde’s one-page frontend developer resume"
            width={1275}
            height={1651}
            sizes="(max-width: 1100px) 95vw, 1000px"
            priority
            unoptimized
            onLoad={() => setIsLoaded(true)}
          />
          <a className="resume-link-hotspot hotspot-email" href="mailto:shindeaniketsanjay@gmail.com" aria-label="Email Aniket Shinde" title="Email Aniket Shinde" />
          <a className="resume-link-hotspot hotspot-github" href="https://github.com/AniketShinde01" target="_blank" rel="noreferrer" aria-label="GitHub: AniketShinde01" title="Open Aniket’s GitHub profile" />
          <a className="resume-link-hotspot hotspot-linkedin" href="https://www.linkedin.com/in/aniket-shinde-2843771b8/" target="_blank" rel="noreferrer" aria-label="LinkedIn: Aniket Shinde" title="Open Aniket’s LinkedIn profile" />
          <a className="resume-link-hotspot hotspot-leetcode" href="https://leetcode.com/u/AniketShinde19" target="_blank" rel="noreferrer" aria-label="LeetCode: AniketShinde19" title="Open Aniket’s LeetCode profile" />
        </div>
      </div>
    </section>
  );
}
