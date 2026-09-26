import { useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/locomotive-scroll.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import AboutSection from './components/AboutSection';
import ClientLogos from './components/ClientLogos';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';
import { Project } from './types';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;
    const tickerUpdate = () => {
      ScrollTrigger.update();
    };

    try {
      scroll = new LocomotiveScroll({
        lenisOptions: {
          duration: 1.25,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        },
        scrollCallback: () => {
          ScrollTrigger.update();
        },
      });
      (window as unknown as { __locomotiveScroll?: LocomotiveScroll }).__locomotiveScroll = scroll;
      gsap.ticker.add(tickerUpdate);
    } catch (err) {
      console.warn('LocomotiveScroll initialization:', err);
    }

    // Master Entrance & Scroll Animation Timeline triggered on site reload
    const reloadTimeline = gsap.timeline({
      delay: 0.15,
    });

    // 1. Reveal Navbar
    reloadTimeline.fromTo(
      '.NavContainer',
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    );

    // 2. Hero typography masked reveal (Product & Designer)
    reloadTimeline.fromTo(
      '.hero .product .split-line-content',
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.25, ease: 'power4.out' },
      '-=0.6'
    );

    reloadTimeline.fromTo(
      '.hero .designer .split-line-content',
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.25, ease: 'power4.out' },
      '-=1.05'
    );

    // 3. Side & Subtitle text
    reloadTimeline.fromTo(
      ['.hero .based .split-line-content', '.hero .available .split-line-content'],
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
      '-=0.9'
    );

    // 4. Hero links and arrow indicators
    reloadTimeline.fromTo(
      '.hero .links',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    // 5. Trigger smooth scroll animation on site reload:
    // Cues the user with a fluid micro-scroll preview down and smooth return to top,
    // activating Locomotive Scroll inertia & refreshing ScrollTrigger.
    reloadTimeline.add(() => {
      if (scroll) {
        scroll.scrollTo(180, {
          duration: 1.3,
          easing: (t: number) => Math.sin((t * Math.PI) / 2),
          onComplete: () => {
            setTimeout(() => {
              scroll?.scrollTo(0, {
                duration: 1.1,
                easing: (t: number) => 1 - Math.cos((t * Math.PI) / 2),
                onComplete: () => {
                  ScrollTrigger.refresh();
                },
              });
            }, 350);
          },
        });
      }
    }, '+=0.1');

    // 6. Setup scroll-triggered reveals for all page sections
    // Project list items
    const listItems = gsap.utils.toArray<HTMLElement>('#works .list-item');
    listItems.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Client logos roller entrance
    gsap.fromTo(
      '#roller',
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#roller',
          start: 'top 85%',
        },
      }
    );

    // About section entrance
    gsap.fromTo(
      '.about-me .graphic',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-me',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.about-me .text',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-me',
          start: 'top 80%',
        },
      }
    );

    // Footer entrance
    gsap.fromTo(
      'footer.text-white',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: 'footer.text-white',
          start: 'top 92%',
        },
      }
    );

    return () => {
      reloadTimeline.kill();
      gsap.ticker.remove(tickerUpdate);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (scroll) {
        scroll.destroy();
      }
      delete (window as unknown as { __locomotiveScroll?: LocomotiveScroll }).__locomotiveScroll;
    };
  }, []);

  const handleOpenContact = () => {
    window.location.href = 'mailto:mursalhayat1.0@gmail.com';
  };

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black">
      {/* Custom smooth cursor follower */}
      <CustomCursor />

      {/* Main Layout Container */}
      <div className="relative mx-auto w-full max-w-[1920px]">
        {/* Navigation */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Hero Section with reload title reveal */}
        <Hero />

        {/* Selected Works / Floating Image Hover List with ScrollTrigger */}
        <ProjectList onSelectProject={(project) => setSelectedProject(project)} />

        {/* Selected Clients & Collaborators (#roller) */}
        <ClientLogos />

        {/* About Cynthia Ugwu Section with ScrollTrigger */}
        <AboutSection onOpenContact={handleOpenContact} />

        {/* Horizontal Divider Line */}
        <div className="w-full border-t border-white/10" role="separator" aria-hidden="true" />

        {/* Footer with Toronto Clock & Socials */}
        <Footer />
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
