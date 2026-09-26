import { Project, ClientLogo, SocialLink } from './types';

export const DIAGONAL_ARROW_SVG = `data:image/svg+xml;charset=utf-8,%3Csvg%20data-v-b7f993da%3D%22%22%20width%3D%2221%22%20height%3D%2222%22%20viewBox%3D%220%200%2021%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20data-v-b7f993da%3D%22%22%20d%3D%22M9.66353%206.95516L14.8459%208.34376L13.4573%2013.5261%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%20%3Cpath%20data-v-b7f993da%3D%22%22%20d%3D%22M5.64453%2013.6562L14.754%208.39687%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E`;

export const DOWN_ARROW_CIRCLE_SVG = `data:image/svg+xml;charset=utf-8,%3Csvg%20data-v-b7f993da%3D%22%22%20width%3D%2226%22%20height%3D%2226%22%20viewBox%3D%220%200%2026%2026%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20data-v-b7f993da%3D%22%22%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%2213%22%20fill%3D%22%23AAAAAA%22%3E%3C%2Fcircle%3E%20%3Cg%20data-v-b7f993da%3D%22%22%20clip-path%3D%22url(%23clip0_404_565)%22%3E%3Crect%20data-v-b7f993da%3D%22%22%20width%3D%2216%22%20height%3D%2216%22%20transform%3D%22translate(5%205)%22%20fill%3D%22black%22%3E%3C%2Frect%3E%20%3Cpath%20data-v-b7f993da%3D%22%22%20d%3D%22M13%200C5.824%200%200%205.824%200%2013C0%2020.176%205.824%2026%2013%2026C20.176%2026%2026%2020.176%2026%2013%2026%205.824%2020.176%200%2013%200ZM17.589%2014.339L13.689%2018.239C13.494%2018.434%2013.247%2018.525%2013%2018.525C12.753%2018.525%2012.506%2018.434%2012.311%2018.239L8.411%2014.339C8.034%2013.962%208.034%2013.338%208.411%2012.961C8.788%2012.584%209.412%2012.584%209.789%2012.961L12.025%2015.197V8.45C12.025%207.917%2012.467%207.475%2013%207.475C13.533%207.475%2013.975%207.917%2013.975%208.45V15.197L16.211%2012.961C16.588%2012.584%2017.212%2012.584%2017.589%2012.961C17.966%2013.338%2017.966%2013.962%2017.589%2014.339Z%22%20fill%3D%22%23AAAAAA%22%3E%3C%2Fpath%3E%3C%2Fg%3E%20%3Cdefs%20data-v-b7f993da%3D%22%22%3E%3CclipPath%20data-v-b7f993da%3D%22%22%20id%3D%22clip0_404_565%22%3E%3Crect%20data-v-b7f993da%3D%22%22%20width%3D%2226%22%20height%3D%2226%22%20rx%3D%2213%22%20fill%3D%22white%22%3E%3C%2Frect%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E`;

export const PROJECTS: Project[] = [
  {
    id: 'hyperion-engine',
    title: 'HYPERION ENGINE',
    year: '2024',
    subtitle: 'Distributed Real-Time Streaming & Telematics Microservices',
    coverImage: 'https://cynthiaugwu.com/images/cover/lucid-motors.webp',
    role: 'Lead Full-Stack Architect',
    client: 'Hyperion Systems',
    timeline: '9 Months · 2024',
    overview:
      'Architected and implemented a high-throughput event processing platform capable of ingesting 250,000+ IoT telemetry payloads per second with sub-50ms glass-to-glass latency.',
    challenge:
      'Handling massive spikes in automotive telemetry during peak grid usage without message loss, while maintaining continuous WebSocket streaming to fleet dashboard operators.',
    solution:
      'Engineered an event-driven architecture using Kafka, Redis Streams, and a cluster of Node.js / Go worker services behind Envoy proxies, paired with a React TypeScript canvas rendering 60 FPS live vehicle vectors.',
    deliverables: [
      'High-Throughput Distributed Microservices (Go / Node.js / Kafka)',
      'Sub-50ms WebSocket Broadcast Gateway with Redis Pub/Sub',
      'React & TypeScript Operational Command Dashboard',
      'Kubernetes CI/CD Pipeline & Automated Horizontal Pod Autoscaling'
    ],
    impact: 'Successfully processed over 4.8 billion vehicle telemetry packets with 99.995% uptime and 40% reduction in cloud compute overhead.'
  },
  {
    id: 'quantum-capital',
    title: 'QUANTUM PLATFORM',
    year: '2023',
    subtitle: 'Institutional Asset Management & Low-Latency Portfolio Engine',
    coverImage: 'https://cynthiaugwu.com/images/cover/baron-capital.webp',
    role: 'Senior Full-Stack Engineer',
    client: 'Baron Capital Group',
    timeline: '7 Months · 2023',
    overview:
      'Developed a modern full-stack quantitative investment portal and risk modeling platform that translates institutional financial datasets into interactive, real-time analytics.',
    challenge:
      'Legacy monolith struggled to calculate multi-currency portfolio variances across millions of positions, resulting in frequent timeouts and laggy UI rendering.',
    solution:
      'Rebuilt the data layer with partitioned PostgreSQL, Redis cache tiers, and GraphQL queries. Developed an ultra-optimized Next.js and Tailwind frontend utilizing Web Workers for client-side financial calculations.',
    deliverables: [
      'GraphQL & REST API Architecture with Strict Type Safety',
      'PostgreSQL Query Optimization & Connection Pooling',
      'High-Density Financial Dashboard with Virtualized Tables',
      'Role-Based Access Control (RBAC) & SOC-2 Compliance Pipeline'
    ],
    impact: 'Decreased query response times from 3.2s to 120ms, enabling real-time risk calculations for 1,200+ portfolio managers and analysts.'
  },
  {
    id: 'nfl-gridstream',
    title: 'NFL GRIDSTREAM',
    year: '2023',
    subtitle: 'Live Play Telemetry & Interactive Fan Engagement Engine',
    coverImage: 'https://cynthiaugwu.com/images/cover/nfl.webp',
    role: 'Full-Stack Developer',
    client: 'National Football League',
    timeline: '6 Months · 2023',
    overview:
      'Built high-concurrency real-time live match companion systems serving millions of concurrent NFL viewers during televised game broadcasts.',
    challenge:
      'Sudden surges of millions of concurrent requests during touchdown plays required resilient distributed caching, stateless serverless routes, and instant live sync across client devices.',
    solution:
      'Implemented an edge-cached architecture with Cloudflare Workers, AWS DynamoDB, and Next.js ISR (Incremental Static Regeneration), complemented by a rich React UI with responsive SVG field trackers.',
    deliverables: [
      'Edge Compute Architecture with Cloudflare Workers & AWS',
      'Zero-Latency Real-Time State Synchronization via WebSockets',
      'Optimized React Frontend with 60 FPS Micro-Interactions',
      'Automated End-to-End Testing & Load Testing via k6'
    ],
    impact: 'Sustained 4.2 million concurrent users during Super Bowl LVII without a single dropped socket connection or performance bottleneck.'
  },
  {
    id: 'spatial-craft',
    title: 'SPATIAL CRAFT',
    year: '2022',
    subtitle: 'WebGL Spatial Architecture Platform & Interactive 3D Viewer',
    coverImage: 'https://cynthiaugwu.com/images/cover/placenew.webp',
    role: 'Full-Stack & Creative Engineer',
    client: 'Placenew Studio',
    timeline: '5 Months · 2022',
    overview:
      'A spatial real estate platform pairing Three.js interactive 3D architectural explorations with a headless CMS, fast search indexing, and seamless booking infrastructure.',
    challenge:
      'Streaming high-polygon 3D building models on mobile devices while maintaining 60 FPS interaction and sub-second page transitions.',
    solution:
      'Constructed a progressive GLTF asset pipeline with mesh compression and level-of-detail (LOD) streaming, integrated with a Node.js REST API and PostgreSQL spatial queries (PostGIS).',
    deliverables: [
      'Three.js / WebGL Custom Shaders & Texture Optimization',
      'Node.js & Express RESTful API with PostGIS Spatial Search',
      'Headless Content Infrastructure with Automated Asset Pipelines',
      'Progressive Web App Architecture with Offline Support'
    ],
    impact: 'Won Awwwards Developer of the Day and achieved a 99/100 Lighthouse performance score across all target mobile devices.'
  },
  {
    id: 'somos-archive',
    title: 'SOMOS CLOUD',
    year: '2022',
    subtitle: 'Decentralized Multimedia Archive & Global Community Platform',
    coverImage: 'https://cynthiaugwu.com/images/cover/somos.webp',
    role: 'Full-Stack Developer',
    client: 'Somos Collective',
    timeline: '5 Months · 2022',
    overview:
      'An open multimedia archive preserving cultural histories through interactive soundscapes, generative visual essays, and distributed peer-curated community stories.',
    challenge:
      'Storing and streaming petabytes of uncompressed audio and archival video globally with zero buffering and low storage egress costs.',
    solution:
      'Designed an S3-compatible object storage layer backed by Cloudflare CDN, with Node.js FFmpeg transcoding pipelines and an accessible React audio player with Web Audio API visualizers.',
    deliverables: [
      'Automated FFmpeg Video & Audio Transcoding Pipeline',
      'Full-Text Search Engine with Elasticsearch Indexing',
      'Web Audio API Interactive Sound Waveform Visualizer',
      'Dockerized Microservices with Automated GitHub Actions CI/CD'
    ],
    impact: 'Cataloged over 1,500 hours of historical recordings accessed by 120,000+ monthly international visitors.'
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'AVIS', logoUrl: 'https://cynthiaugwu.com/logos/AVIS.svg', industry: 'Mobility & Transportation' },
  { name: 'Clover', logoUrl: 'https://cynthiaugwu.com/logos/Clover.svg', industry: 'Fintech & Point of Sale' },
  { name: 'Expedia', logoUrl: 'https://cynthiaugwu.com/logos/Expedia.svg', industry: 'Travel & Global Booking' },
  { name: 'Baron', logoUrl: 'https://cynthiaugwu.com/logos/Baron.svg', industry: 'Asset Management' },
  { name: 'ETS', logoUrl: 'https://cynthiaugwu.com/logos/ETS.svg', industry: 'Global Education & Assessment' },
  { name: 'Lucid', logoUrl: 'https://cynthiaugwu.com/logos/Lucid.svg', industry: 'Electric Vehicles' },
  { name: 'Identity', logoUrl: 'https://cynthiaugwu.com/logos/Identity.svg', industry: 'Digital Brand Agency' },
  { name: 'Microsoft', logoUrl: 'https://cynthiaugwu.com/logos/Microsoft.svg', industry: 'Enterprise Technology' },
  { name: 'Under Armour', logoUrl: 'https://cynthiaugwu.com/logos/Under_armour.svg', industry: 'Athletic Apparel' },
  { name: 'NFL', logoUrl: 'https://cynthiaugwu.com/logos/NFL.svg', industry: 'Sports & Entertainment' },
  { name: 'NEOM', logoUrl: 'https://cynthiaugwu.com/logos/NEOM.svg', industry: 'Future Cities & Sustainable Living' },
  { name: 'Comcast', logoUrl: 'https://cynthiaugwu.com/logos/Comcast.svg', industry: 'Telecommunications' },
  { name: 'Zappos', logoUrl: 'https://cynthiaugwu.com/logos/Zappos.svg', industry: 'E-Commerce' },
  { name: 'Toefl', logoUrl: 'https://cynthiaugwu.com/logos/Toefl.svg', industry: 'Language Evaluation' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GITHUB', url: 'https://github.com' },
  { label: 'LINKEDIN', url: 'https://linkedin.com' },
  { label: 'TWITTER / X', url: 'https://twitter.com' },
  { label: 'EMAIL', url: 'mailto:mursalhayat1.0@gmail.com' }
];
