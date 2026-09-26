import React from 'react';

export default function Hero() {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const loc = (window as unknown as { __locomotiveScroll?: { scrollTo: (target: string | HTMLElement, opts?: object) => void } }).__locomotiveScroll;
    const workSection = document.getElementById('works') || document.getElementById('work');
    if (loc && workSection) {
      loc.scrollTo(workSection, { duration: 1.4 });
    } else if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero container sp-e1">
      <h1 className="sp-e2">
        <span className="product sp-e3">
          <span
            className="split-line-wrapper sp-e4"
            style={{ display: 'block', textAlign: 'start', position: 'relative' }}
          >
            <span
              className="split-line-content sp-e5"
              style={{
                display: 'block',
                textAlign: 'start',
                position: 'relative',
                transform: 'rotate(0.001deg)',
              }}
            >
              Full-Stack
            </span>
          </span>
        </span>{' '}
        <span className="designer sp-e6">
          <span
            className="split-line-wrapper sp-e7"
            style={{ display: 'block', textAlign: 'start', position: 'relative' }}
          >
            <span
              className="split-line-content sp-e8"
              style={{
                display: 'block',
                textAlign: 'start',
                position: 'relative',
                transform:
                  'translate(-5px, 8px) matrix(1, 1.74533e-05, -1.74533e-05, 1, 0, 0)',
              }}
            >
              Developer
            </span>
          </span>
        </span>{' '}
        <span className="based sp-e9">
          <span
            className="split-line-wrapper sp-e10"
            style={{ display: 'block', textAlign: 'right', position: 'relative' }}
          >
            <span
              className="split-line-content sp-e11"
              style={{
                display: 'block',
                textAlign: 'right',
                position: 'relative',
                transform: 'rotate(0.001deg)',
              }}
            >
              Software Engineer
            </span>
          </span>
        </span>
      </h1>{' '}
      <p className="available sp-e12">
        <span
          className="split-line-wrapper sp-e13"
          style={{ display: 'block', textAlign: 'right', position: 'relative' }}
        >
          <span
            className="split-line-content sp-e14"
            style={{
              display: 'block',
              textAlign: 'right',
              position: 'relative',
              transform: 'rotate(0.001deg)',
            }}
          >
            {' '}
            Available for Full-Time &amp; High-Impact Roles
          </span>
        </span>
        <span
          className="split-line-wrapper sp-e13"
          style={{ display: 'block', textAlign: 'right', position: 'relative' }}
        >
          <span
            className="split-line-content sp-e14"
            style={{
              display: 'block',
              textAlign: 'right',
              position: 'relative',
              transform: 'rotate(0.001deg)',
            }}
          >
            {' '}
            Web &bull; Cloud &bull; Distributed Systems{' '}
          </span>
        </span>
      </p>{' '}
      <div className="links sp-e15" style={{ opacity: 1 }}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="previously link-with-arrow sp-e16"
        >
          <span className="sp-e17">
            Specializing in
            <br className="sp-e18" />
            Full-Stack Systems
          </span>{' '}
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sp-e19"
          >
            <path
              d="M9.66353 6.95516L14.8459 8.34376L13.4573 13.5261"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sp-e20"
            />
            <path
              d="M5.64453 13.6562L14.754 8.39687"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sp-e20"
            />
          </svg>
        </a>{' '}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="protopie link-with-arrow sp-e21"
        >
          <span className="sp-e22">TypeScript &bull; React &bull; Node</span>{' '}
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sp-e23"
          >
            <path
              d="M9.66353 6.95516L14.8459 8.34376L13.4573 13.5261"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sp-e24"
            />
            <path
              d="M5.64453 13.6562L14.754 8.39687"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sp-e24"
            />
          </svg>
        </a>{' '}
        <a
          href="#work"
          onClick={handleScrollToWork}
          className="scroll sp-e25"
          aria-label="Scroll down to Selected Works"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sp-e26"
          >
            <circle cx="13" cy="13" r="13" fill="#AAAAAA" className="sp-e27" />
            <g clipPath="url(#clip0_404_565_hero_1)" className="sp-e28">
              <rect
                width="16"
                height="16"
                transform="translate(5 5)"
                fill="black"
                className="sp-e29"
              />
              <path
                d="M13 0C5.824 0 0 5.824 0 13C0 20.176 5.824 26 13 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 13 0ZM17.589 14.339L13.689 18.239C13.494 18.434 13.247 18.525 13 18.525C12.753 18.525 12.506 18.434 12.311 18.239L8.411 14.339C8.034 13.962 8.034 13.338 8.411 12.961C8.788 12.584 9.412 12.584 9.789 12.961L12.025 15.197V8.45C12.025 7.917 12.467 7.475 13 7.475C13.533 7.475 13.975 7.917 13.975 8.45V15.197L16.211 12.961C16.588 12.584 17.212 12.584 17.589 12.961C17.966 13.338 17.966 13.962 17.589 14.339Z"
                fill="#AAAAAA"
                className="sp-e27"
              />
            </g>
            <defs className="sp-e27">
              <clipPath id="clip0_404_565_hero_1" className="sp-e27">
                <rect width="26" height="26" rx="13" fill="white" className="sp-e27" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sp-e26"
          >
            <circle cx="13" cy="13" r="13" fill="#AAAAAA" className="sp-e27" />
            <g clipPath="url(#clip0_404_565_hero_2)" className="sp-e28">
              <rect
                width="16"
                height="16"
                transform="translate(5 5)"
                fill="black"
                className="sp-e29"
              />
              <path
                d="M13 0C5.824 0 0 5.824 0 13C0 20.176 5.824 26 13 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 13 0ZM17.589 14.339L13.689 18.239C13.494 18.434 13.247 18.525 13 18.525C12.753 18.525 12.506 18.434 12.311 18.239L8.411 14.339C8.034 13.962 8.034 13.338 8.411 12.961C8.788 12.584 9.412 12.584 9.789 12.961L12.025 15.197V8.45C12.025 7.917 12.467 7.475 13 7.475C13.533 7.475 13.975 7.917 13.975 8.45V15.197L16.211 12.961C16.588 12.584 17.212 12.584 17.589 12.961C17.966 13.338 17.966 13.962 17.589 14.339Z"
                fill="#AAAAAA"
                className="sp-e27"
              />
            </g>
            <defs className="sp-e27">
              <clipPath id="clip0_404_565_hero_2" className="sp-e27">
                <rect width="26" height="26" rx="13" fill="white" className="sp-e27" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
}
