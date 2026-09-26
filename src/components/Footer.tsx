import { useState, useEffect } from 'react';

export default function Footer() {
  const [torontoTime, setTorontoTime] = useState('3:15 AM ET');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Toronto',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(now);
        setTorontoTime(`${formatted} ET`);
      } catch {
        setTorontoTime('3:15 AM ET');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="text-white sp-e1" style={{ opacity: 1 }}>
      <div className="FooterContainer container sp-e2">
        <div className="Left sp-e3">
          <span className="copyright sp-e4">
            <span className="sp-e5">© 2026 Mursal Hayat</span>
          </span>
          <span className="currentTime sp-e6">
            <span id="time" className="sp-e7">
              {torontoTime}
            </span>
          </span>
        </div>
        <div className="Right border-color-1 sp-e8">
          <ul className="start flex-wrap sp-e9">
            <li className="sp-e10">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer nofollow"
                className="sp-e11"
              >
                linkedin
              </a>
            </li>
            <li className="sp-e12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer nofollow"
                className="sp-e13"
              >
                github
              </a>
            </li>
            <li className="sp-e14">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer nofollow"
                className="sp-e15"
              >
                x/twitter
              </a>
            </li>
            <li className="sp-e16">
              <a
                href="mailto:mursalhayat1.0@gmail.com"
                target="_blank"
                rel="noreferrer nofollow"
                className="sp-e17"
              >
                email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
