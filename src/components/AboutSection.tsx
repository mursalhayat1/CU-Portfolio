import React from 'react';
import mursalAvatar from '../assets/images/regenerated_image_1790408217248.png';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  const handleTalkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onOpenContact();
  };

  return (
    <div id="about" className="about-me container sp-e1">
      <div className="content sp-e2">
        <div className="graphic sp-e3 flex justify-start items-center">
          <img
            src={mursalAvatar}
            alt="Mursal Hayat"
            className="sp-e4 object-cover rounded-full aspect-square border border-white/20"
            width="240"
            height="240"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div className="text sp-e5" style={{ opacity: 1 }}>
          <div className="LabelWithExplainer sp-e6">
            <p className="Label sp-e7">(About me)</p>
            <p className="Explainer sp-e8">
              I&apos;m Mursal Hayat, a passionate Full-Stack Developer specializing in
              building resilient distributed systems, high-performance web applications,
              and frictionless digital experiences. From architecting scalable microservices
              and database pipelines to crafting pixel-precise, fluid frontend interfaces
              with React, TypeScript, and Node.js, I thrive at the intersection of robust
              system engineering and elegant interactive design. When I&apos;m not
              optimizing query plans or designing component architectures, I love
              exploring open-source tools, building developer utilities, and staying ahead
              of cutting-edge web technologies.
            </p>
          </div>
          <a
            href="mailto:mursalhayat1.0@gmail.com"
            onClick={handleTalkClick}
            className="cta mt-6 sp-e9"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </div>
  );
}
