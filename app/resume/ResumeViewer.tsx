"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResumeViewer() {
  const [zoom, setZoom] = useState(1);

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
          <a className="resume-download" href="/assets/aniket-shinde-resume.pdf" download>
            Download PDF <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="resume-document" aria-label="Resume page">
        <Image
          className="resume-page-image"
          src="/assets/aniket-shinde-resume-page.webp"
          alt="Aniket Shinde’s one-page frontend developer resume"
          width={1275}
          height={1651}
          sizes="(max-width: 1100px) 95vw, 1000px"
          style={{ width: `${zoom * 100}%` }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
