"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CertificateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button ref={triggerRef} className="certificate-link" type="button" onClick={() => { setZoom(1); setIsOpen(true); }}>
        View CodeVita certificate <span aria-hidden="true" className="arrow">↗</span>
      </button>
      {isOpen && (
        <div
          className="certificate-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title">
            <header className="certificate-toolbar">
              <div className="certificate-document-title">
                <span className="pdf-icon">PDF</span>
                <span><b id="certificate-title">TCS CodeVita Certificate</b><small>Aniket Shinde · Season 10</small></span>
              </div>
              <div className="certificate-actions">
                <div className="document-zoom" aria-label="Certificate zoom controls">
                  <button type="button" onClick={() => setZoom((current) => Math.max(0.7, current - 0.1))} aria-label="Zoom out">−</button>
                  <span>{Math.round(zoom * 100)}%</span>
                  <button type="button" onClick={() => setZoom((current) => Math.min(1.8, current + 0.1))} aria-label="Zoom in">+</button>
                </div>
                <a className="certificate-download" href="/assets/codevita-certificate.pdf" download>Download <span aria-hidden="true">↓</span></a>
                <button ref={closeRef} className="certificate-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close certificate viewer">×</button>
              </div>
            </header>
            <div className="certificate-document" aria-label="Certificate page">
              <Image
                className="certificate-page-image"
                src="/assets/codevita-certificate-page.webp"
                alt="TCS CodeVita Season 10 certificate awarded to Aniket Shinde"
                width={1651}
                height={1105}
                sizes="90vw"
                unoptimized
                style={{ width: `${zoom * 100}%` }}
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
