import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface ProjectListProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectList({ onSelectProject }: ProjectListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lerpedPos, setLerpedPos] = useState({ x: 0, y: 0, rot: 0 });
  const animFrameRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    let curX = lerpedPos.x || mousePos.x;
    let curY = lerpedPos.y || mousePos.y;
    let curRot = lerpedPos.rot || 0;

    const loop = () => {
      const dx = mousePos.x - curX;
      const dy = mousePos.y - curY;

      curX += dx * 0.12;
      curY += dy * 0.12;

      const targetRot = Math.max(-10, Math.min(10, dx * 0.12));
      curRot += (targetRot - curRot) * 0.08;

      setLerpedPos({ x: curX, y: curY, rot: curRot });
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mousePos]);

  const items = [
    {
      id: 'lucid-motors',
      name: 'Lucid Motors',
      year: '2023',
      nameClass: 'sp-e7',
      itemClass: 'sp-e5',
      revealClass: 'sp-e9',
      image: 'https://cynthiaugwu.com/images/cover/lucid-motors.webp',
      width: 331,
      height: 331,
      defaultTransform: 'translate(-167.052px, -162.421px)',
    },
    {
      id: 'baron-capital',
      name: 'Baron Capital',
      year: '2023',
      nameClass: 'sp-e13',
      itemClass: 'sp-e12',
      revealClass: 'sp-e14',
      image: 'https://cynthiaugwu.com/images/cover/baron-capital.webp',
      width: 353,
      height: 353,
      defaultTransform: 'translate(-47.9468px, 2.4644px) rotate(-3.91935deg)',
    },
    {
      id: 'nfl',
      name: 'NFL',
      year: '2024',
      nameClass: 'sp-e15',
      itemClass: 'sp-e12',
      revealClass: 'sp-e17',
      image: 'https://cynthiaugwu.com/images/cover/nfl.webp',
      width: 344,
      height: 344,
      defaultTransform: 'translate(56.1856px, -144.071px) rotate(-2.24448deg)',
    },
    {
      id: 'placenew',
      name: 'PlaceNew',
      year: '2024',
      nameClass: 'sp-e18',
      itemClass: 'sp-e12',
      revealClass: 'sp-e19',
      image: 'https://cynthiaugwu.com/images/cover/placenew.webp',
      width: 335,
      height: 335,
      defaultTransform: 'translate(-148.18px, -111.44px) rotate(0.692943deg)',
    },
    {
      id: 'somos',
      name: 'Somos',
      year: '2023',
      nameClass: 'sp-e20',
      itemClass: 'sp-e12',
      revealClass: 'sp-e21',
      image: 'https://cynthiaugwu.com/images/cover/somos.webp',
      width: 337,
      height: 337,
      defaultTransform: 'translate(-124.079px, -138.02px) rotate(1.02394deg)',
    },
  ];

  const handleItemClick = (e: React.MouseEvent, projectId: string) => {
    e.preventDefault();
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      onSelectProject(proj);
    }
  };

  return (
    <div
      id="works"
      className="works sp-e1"
      onMouseMove={handleMouseMove}
    >
      {/* Anchor target to ensure #work also resolves cleanly */}
      <div id="work" className="absolute -top-12 left-0 pointer-events-none" />

      <div className="container sp-e2">
        <div className="list-view sp-e3">
          <ul className="sp-e4">
            {items.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <li
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`list-item ${item.itemClass}`}
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transform: 'translate(0px, 0px)',
                    opacity: isAnyHovered && !isHovered ? 0.3 : 1,
                  }}
                >
                  <a
                    href={`https://cynthiaugwu.com/case-studies/${item.id}/`}
                    onClick={(e) => handleItemClick(e, item.id)}
                    className="sp-e6"
                    style={{ zIndex: 1 }}
                  >
                    <span className={`name ${item.nameClass}`}>{item.name}</span>
                    <span className={`year ${item.year === '2024' ? 'sp-e16' : 'sp-e8'}`}>
                      {item.year}
                    </span>

                    {/* Desktop Floating Image Reveal */}
                    <div
                      className={`hover-reveal ${item.revealClass}`}
                      style={{
                        opacity: isHovered ? 1 : 0,
                        pointerEvents: 'none',
                        transform: isHovered
                          ? `translate(${lerpedPos.x - 170}px, ${lerpedPos.y - 170}px) rotate(${lerpedPos.rot}deg)`
                          : item.defaultTransform,
                      }}
                    >
                      <div
                        className="hover-reveal__inner sp-e10"
                        style={{ opacity: isHovered ? 1 : 0 }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="hover-reveal__image sp-e11"
                          style={{ opacity: isHovered ? 1 : 0 }}
                          width={item.width}
                          height={item.height}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="py-[3.25rem] sp-e22">
          <a
            href="https://cynthiaugwu.com/work/"
            onClick={(e) => {
              e.preventDefault();
              const proj = PROJECTS[0];
              if (proj) onSelectProject(proj);
            }}
            className="cta sp-e23"
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              opacity: 1,
            }}
          >
            View all work
            <sup className="sp-e24">8</sup>
          </a>
        </div>
      </div>
    </div>
  );
}
