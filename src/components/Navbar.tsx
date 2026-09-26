import React, { useState } from 'react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const getLoc = () => {
    return (window as unknown as { __locomotiveScroll?: { scrollTo: (target: string | number | HTMLElement, opts?: object) => void } }).__locomotiveScroll;
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const loc = getLoc();
    if (loc) {
      loc.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    const loc = getLoc();
    const workEl = document.getElementById('works') || document.getElementById('work');
    if (loc && workEl) {
      loc.scrollTo(workEl, { duration: 1.4 });
    } else if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlaygroundClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    const loc = getLoc();
    const clientsEl = document.getElementById('roller') || document.getElementById('clients');
    if (loc && clientsEl) {
      loc.scrollTo(clientsEl, { duration: 1.4 });
    } else if (clientsEl) {
      clientsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    onOpenContact();
  };

  return (
    <div className="NavContainer container between sp-e1">
      <div className="Left sp-e2">
        <a
          href="/"
          onClick={handleLogoClick}
          aria-current="page"
          className="Logo nuxt-link-exact-active nuxt-link-active sp-e3"
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
          }}
        >
          Mursal Hayat
        </a>
      </div>
      <div className="Right between sp-e4">
        <ul className={`navlist sp-e5 ${menuOpen ? 'navlist-open' : 'navlist-closed'}`}>
          <li
            className="listItem sp-e6"
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: menuOpen ? 'translate(0px, 0%)' : 'translate(0px, -100%)',
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? 'auto' : 'none',
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
            }}
          >
            <a
              href="#work"
              onClick={handleWorkClick}
              className="sp-e7"
            >
              work
            </a>
          </li>
          <li
            className="listItem sp-e8"
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: menuOpen ? 'translate(0px, 0%)' : 'translate(0px, -100%)',
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? 'auto' : 'none',
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.04s, opacity 0.25s ease 0.04s',
            }}
          >
            <a
              href="#clients"
              onClick={handlePlaygroundClick}
              className="sp-e9"
            >
              playground
            </a>
          </li>
          <li
            className="listItem sp-e10"
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: menuOpen ? 'translate(0px, 0%)' : 'translate(0px, -100%)',
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? 'auto' : 'none',
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.08s, opacity 0.25s ease 0.08s',
            }}
          >
            <a
              href="#contact"
              onClick={handleContactClick}
              className="sp-e9"
            >
              contact
            </a>
          </li>
        </ul>
        <div
          className="ButtonContainer sp-e11"
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
          }}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="Menu start sp-e12 cursor-pointer"
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0%)',
            }}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          >
            <span className="sp-e13">{menuOpen ? 'Close' : 'Menu'}</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sp-e14"
              style={{
                transform: menuOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <path
                d="M3 6H9"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
                className="sp-e15"
              />
              <path
                d="M6 9V3"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
                className="sp-e15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
