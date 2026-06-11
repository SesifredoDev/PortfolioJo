import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteUrl = "https://sesifredodev.github.io/PortfolioJo";
const siteName = "PortfoliJo";
const ownerName = "Jo Sockett";
const email = "josockettmusic@gmail.com";
const phone = "+44 7340 856843";
const modifiedDate = "2026-06-11";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(rootDir, "public");
const projectsDir = path.join(publicDir, "projects");
const videosDir = path.join(publicDir, "videos");

const projects = [
  {
    slug: "spirited-away-alternative-score",
    title: "Spirited Away Alternative Score",
    shortTitle: "Spirited Away",
    type: "Alternative film score",
    category: "Film scoring",
    description:
      "An alternative score to Spirited Away, written and produced in Logic Pro X using MIDI sounds.",
    detail:
      "This project focuses on alternative scoring for picture, using MIDI production and scene-led composition to reshape the emotional direction of a recognisable animated sequence.",
    tags: ["Film scoring", "Alternative score", "Logic Pro X", "MIDI composition"],
    keywords:
      "Spirited Away alternative score, film composer portfolio, Logic Pro X scoring, MIDI film music",
    media: {
      type: "local-video",
      filename: "spirited-away.mp4",
      url: `${siteUrl}/videos/spirited-away.mp4`,
    },
  },
  {
    slug: "edward-scissorhands-alternative-score",
    title: "Edward Scissorhands Alternative Score",
    shortTitle: "Edward Scissorhands",
    type: "Alternative film score",
    category: "Film scoring",
    description:
      "A rewritten score for Edward Scissorhands, produced with Logic Pro X and MIDI sounds.",
    detail:
      "The score explores how new harmonic choices, texture and timing can redirect a familiar film scene while preserving its dramatic shape.",
    tags: ["Film scoring", "Alternative score", "Logic Pro X", "Screen composition"],
    keywords:
      "Edward Scissorhands alternative score, screen composer, film scoring portfolio, Logic Pro X music",
    media: {
      type: "local-video",
      filename: "edward-scissorhands.mp4",
      url: `${siteUrl}/videos/edward-scissorhands.mp4`,
    },
  },
  {
    slug: "agent-mx-z3ro-adr-sound-design",
    title: "Agent MX Z3RO ADR and Sound Design",
    shortTitle: "Agent MX Z3RO",
    type: "ADR and sound design",
    category: "Sound design",
    description:
      "ADR recording and editing, temp score editing and sound design for Agent MX Z3RO, including Jo's voice work for Agent Sierra.",
    detail:
      "This piece combines voice recording, ADR performance, temp score editing and sound-design decisions for a short screen workflow.",
    tags: ["ADR", "Sound design", "Temp score", "Voice recording"],
    keywords:
      "ADR portfolio, sound design portfolio, voice recording, temp score editing, Agent MX Z3RO",
    media: {
      type: "youtube",
      id: "EXLT3gbgUSg",
      uploadDate: "2026-06-11",
    },
  },
  {
    slug: "the-firefly-flute-cello-piano-trio",
    title: "The Firefly - Flute, Cello and Piano Trio",
    shortTitle: "The Firefly",
    type: "Live ensemble composition",
    category: "Composition",
    description:
      "A flute, cello and piano trio inspired by minimalism and Steve Reich, exploring unusual time signatures and limited musical material.",
    detail:
      "The Firefly uses restricted musical material, ensemble interplay and minimalist influence to create a compact acoustic composition.",
    tags: ["Composition", "Flute", "Cello", "Piano", "Minimalism"],
    keywords:
      "flute cello piano trio, minimalist composition, Steve Reich inspired music, composition portfolio",
    media: {
      type: "youtube",
      id: "e19ETowKhXE",
      uploadDate: "2026-06-11",
    },
  },
  {
    slug: "i-want-to-go-home-composition-study",
    title: "I Want to go Home - Composition Study",
    shortTitle: "I Want to go Home",
    type: "Composition study",
    category: "Composition",
    description:
      "A piece focused on atonality and unconventional composing, built as a practical study in bending theory rules.",
    detail:
      "The work leans into atonality, tension and less conventional theory choices as part of a practical composition study.",
    tags: ["Atonality", "Composition", "Music theory", "Experimental writing"],
    keywords:
      "atonal composition, composition study, experimental music portfolio, music theory composition",
    media: {
      type: "youtube",
      id: "NcOSf1qAutM",
      uploadDate: "2026-06-11",
    },
  },
  {
    slug: "captain-seahorse-voyage-of-doom",
    title: "Captain Seahorse and the Voyage of Doom",
    shortTitle: "Captain Seahorse",
    type: "Orchestral programme music",
    category: "Composition",
    description:
      "A seven-movement orchestral programme piece about a ship lost at sea and returning to safety, connected by a five-note motif.",
    detail:
      "The piece is structured as a programme work, connecting orchestral sections with recurring motivic writing and narrative pacing.",
    tags: ["Orchestral music", "Programme music", "Motif", "Composition"],
    keywords:
      "orchestral programme music, motif composition, orchestral portfolio, Captain Seahorse score",
    media: {
      type: "youtube",
      id: "Fq6xgqzLbVM",
      uploadDate: "2026-06-11",
    },
  },
  {
    slug: "maybe-just-one-more-sonic-arts",
    title: "Maybe Just One More - Sonic Arts",
    shortTitle: "Maybe Just One More",
    type: "Sonic arts",
    category: "Sound design",
    description:
      "A single wind chime recording transformed with stretch plugins, EQ, reverb and distortion into a blurred, disorientating sound world.",
    detail:
      "The project turns one source recording into a larger electroacoustic texture through stretching, EQ, space and distortion.",
    tags: ["Sonic arts", "Electroacoustic", "Reverb", "Distortion"],
    keywords:
      "sonic arts portfolio, electroacoustic sound design, wind chime sound art, experimental audio",
    media: {
      type: "youtube",
      id: "-zcUWyBUYmk",
      uploadDate: "2026-06-11",
    },
  },
  {
    slug: "hollow-knight-game-audio",
    title: "Hollow Knight Soundtrack and Sound Design",
    shortTitle: "Hollow Knight",
    type: "Game audio",
    category: "Game audio",
    description:
      "Music, sound design, editing and mix work for a Hollow Knight playthrough, using Logic Pro X, Pro Tools and sourced effects.",
    detail:
      "This project shows gameplay-focused audio timing, atmospheric soundtrack choices, effects editing and mix decisions for an interactive sequence.",
    tags: ["Game audio", "Sound design", "Logic Pro X", "Pro Tools"],
    keywords:
      "game audio portfolio, Hollow Knight sound design, game soundtrack, Pro Tools game audio",
    media: {
      type: "youtube",
      id: "aFMa1FinjpI",
      uploadDate: "2026-06-11",
    },
  },
  {
    slug: "stardew-valley-game-audio",
    title: "Stardew Valley Soundtrack and Sound Design",
    shortTitle: "Stardew Valley",
    type: "Game audio",
    category: "Game audio",
    description:
      "Original soundtrack and sound design work for a Stardew Valley playthrough, edited and mixed in Pro Tools.",
    detail:
      "The work balances gentle original music, gameplay sound editing and mix clarity for a recognisable game environment.",
    tags: ["Game audio", "Sound design", "Original soundtrack", "Pro Tools"],
    keywords:
      "Stardew Valley game audio, game sound design portfolio, original game soundtrack, Pro Tools mix",
    media: {
      type: "youtube",
      id: "xMAcoljWejg",
      uploadDate: "2026-06-11",
    },
  },
  {
    slug: "what-do-you-love-electroacoustic",
    title: "What do you Love? - Electroacoustic Piece",
    shortTitle: "What do you Love?",
    type: "Electroacoustic sound",
    category: "Sound design",
    description:
      "An electroacoustic piece created in Pro Tools from voice recordings of people answering one question: what do you love?",
    detail:
      "The project uses recorded speech as musical source material, shaping voices into a textural electroacoustic composition.",
    tags: ["Electroacoustic", "Voice recording", "Pro Tools", "Experimental audio"],
    keywords:
      "electroacoustic portfolio, voice recording sound art, experimental audio, Pro Tools composition",
    media: {
      type: "youtube",
      id: "Lnxa8ygV53Q",
      uploadDate: "2026-06-11",
    },
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function jsonLd(data) {
  return JSON.stringify(data, null, 2).replaceAll("</", "<\\/");
}

function projectUrl(project) {
  return `${siteUrl}/projects/${project.slug}/`;
}

function youtubeEmbedUrl(project) {
  return `https://www.youtube.com/embed/${project.media.id}`;
}

function youtubeWatchUrl(project) {
  return `https://www.youtube.com/watch?v=${project.media.id}`;
}

function videoObject(project) {
  const contentUrl = project.media.type === "youtube" ? youtubeWatchUrl(project) : project.media.url;
  const embedUrl = project.media.type === "youtube" ? youtubeEmbedUrl(project) : project.media.url;

  return {
    "@type": "VideoObject",
    name: project.title,
    description: project.description,
    thumbnailUrl: [`${siteUrl}/og-image.png`],
    uploadDate: project.media.uploadDate ?? modifiedDate,
    contentUrl,
    embedUrl,
    publisher: {
      "@id": `${siteUrl}/#jo-sockett`,
    },
  };
}

function videoSitemapEntry(project) {
  const contentLoc =
    project.media.type === "local-video"
      ? `\n      <video:content_loc>${project.media.url}</video:content_loc>`
      : "";
  const playerLoc = project.media.type === "youtube" ? youtubeEmbedUrl(project) : project.media.url;

  return `<video:video>
      <video:thumbnail_loc>${siteUrl}/og-image.png</video:thumbnail_loc>
      <video:title>${escapeHtml(project.title)}</video:title>
      <video:description>${escapeHtml(project.description)}</video:description>${contentLoc}
      <video:player_loc>${playerLoc}</video:player_loc>
      <video:publication_date>${project.media.uploadDate ?? modifiedDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>`;
}

function baseStructuredData({ title, description, url, breadcrumbName, extra = [] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#jo-sockett`,
        name: ownerName,
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        email: `mailto:${email}`,
        telephone: phone,
        jobTitle: "Composer and Sound Designer",
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
        },
        sameAs: [
          "https://www.youtube.com/@JoSockett",
          "https://www.linkedin.com/in/josie-sockett-548237226/",
        ],
        knowsAbout: [
          "Film scoring",
          "Game audio",
          "ADR",
          "Foley",
          "Sound design",
          "Electroacoustic music",
          "Logic Pro X",
          "Pro Tools",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        inLanguage: "en-GB",
        publisher: {
          "@id": `${siteUrl}/#jo-sockett`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#jo-sockett`,
        },
        dateModified: modifiedDate,
        inLanguage: "en-GB",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbName,
            item: url,
          },
        ],
      },
      ...extra,
    ],
  };
}

function pageShell({ title, description, keywords, canonical, structuredData, body }) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);

  return `<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="${ownerName}">
    <meta name="description" content="${safeDescription}">
    <meta name="keywords" content="${escapeHtml(keywords)}">
    <meta name="theme-color" content="#812332">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="en-gb" href="${canonical}">
    <link rel="alternate" hreflang="x-default" href="${canonical}">
    <link rel="alternate" type="application/rss+xml" title="${siteName} project feed" href="${siteUrl}/feed.xml">
    <link rel="sitemap" type="application/xml" href="${siteUrl}/sitemap.xml">
    <link rel="icon" href="${siteUrl}/favicon.svg" type="image/svg+xml">
    <link rel="manifest" href="${siteUrl}/site.webmanifest">
    <meta property="og:locale" content="en_GB">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:title" content="${safeTitle}">
    <meta property="og:description" content="${safeDescription}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${siteUrl}/og-image.png">
    <meta property="og:image:secure_url" content="${siteUrl}/og-image.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1800">
    <meta property="og:image:height" content="1100">
    <meta property="og:image:alt" content="Original score and waveform collage representing Jo Sockett's music and sound design portfolio.">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${safeTitle}">
    <meta name="twitter:description" content="${safeDescription}">
    <meta name="twitter:image" content="${siteUrl}/og-image.png">
    <script type="application/ld+json">
${jsonLd(structuredData)}
    </script>
    <title>${safeTitle}</title>
    <style>
      :root {
        color-scheme: light;
        --paper: #f3d3d4;
        --shell: #fffaf4;
        --ink: #211918;
        --muted: #675c58;
        --wine: #812332;
        --wine-deep: #4b141d;
        --line: rgba(33, 25, 24, 0.16);
      }

      * { box-sizing: border-box; }

      html { scroll-behavior: smooth; }

      body {
        margin: 0;
        min-width: 320px;
        color: var(--ink);
        background:
          linear-gradient(90deg, rgba(75, 20, 29, 0.045) 1px, transparent 1px),
          linear-gradient(rgba(33, 25, 24, 0.04) 1px, transparent 1px),
          var(--paper);
        background-size: 58px 58px, 58px 58px, auto;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        line-height: 1.6;
      }

      a { color: inherit; }

      .site-header,
      main,
      footer {
        width: min(100% - 36px, 1080px);
        margin-inline: auto;
      }

      .site-header {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        align-items: center;
        justify-content: space-between;
        padding: 22px 0;
      }

      .brand,
      .nav-link,
      .button {
        font-weight: 900;
        text-decoration: none;
      }

      .brand {
        display: inline-flex;
        gap: 10px;
        align-items: center;
      }

      .brand-mark {
        display: grid;
        width: 38px;
        height: 38px;
        place-items: center;
        color: var(--shell);
        background: var(--wine);
        border-radius: 50%;
      }

      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .nav-link,
      .button {
        display: inline-flex;
        min-height: 42px;
        align-items: center;
        justify-content: center;
        padding: 9px 14px;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: rgba(255, 250, 244, 0.64);
      }

      .button.primary {
        color: var(--shell);
        background: var(--wine);
        border-color: rgba(75, 20, 29, 0.32);
      }

      .hero {
        display: grid;
        gap: 24px;
        padding: clamp(54px, 8vw, 104px) 0 44px;
      }

      .eyebrow {
        margin: 0;
        color: var(--wine);
        font-size: 0.78rem;
        font-weight: 900;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      h1 {
        max-width: 12ch;
        margin: 0;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(3rem, 7vw, 7rem);
        line-height: 0.94;
      }

      h2 {
        margin: 0 0 12px;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(2rem, 4vw, 3.6rem);
        line-height: 1;
      }

      p {
        max-width: 72ch;
        margin: 0 0 18px;
        color: var(--muted);
      }

      .lede {
        max-width: 68ch;
        font-size: 1.16rem;
      }

      .panel,
      .project-list {
        background: rgba(255, 250, 244, 0.78);
        border: 1px solid var(--line);
        border-radius: 8px;
        box-shadow: 0 20px 50px rgba(33, 25, 24, 0.14);
      }

      .panel {
        display: grid;
        gap: 24px;
        padding: clamp(24px, 4vw, 42px);
      }

      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .meta li {
        padding: 8px 10px;
        color: var(--wine-deep);
        background: rgba(255, 250, 244, 0.86);
        border: 1px solid var(--line);
        border-radius: 999px;
        font-weight: 800;
      }

      .media {
        overflow: hidden;
        background: #130d0d;
        border-radius: 8px;
        aspect-ratio: 16 / 9;
      }

      .media iframe,
      .media video {
        width: 100%;
        height: 100%;
        border: 0;
      }

      .project-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1px;
        overflow: hidden;
        margin-top: 22px;
      }

      .project-list a {
        display: grid;
        gap: 8px;
        min-height: 156px;
        padding: 20px;
        text-decoration: none;
        background: rgba(255, 250, 244, 0.74);
      }

      .project-list strong {
        color: var(--wine-deep);
        font-size: 1.12rem;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      footer {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: space-between;
        padding: 34px 0 44px;
        color: var(--muted);
      }
    </style>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="${siteUrl}/">
        <span class="brand-mark" aria-hidden="true">J</span>
        <span>${siteName}</span>
      </a>
      <nav aria-label="Portfolio navigation">
        <a class="nav-link" href="${siteUrl}/#work">Work</a>
        <a class="nav-link" href="${siteUrl}/projects/">Projects</a>
        <a class="nav-link" href="${siteUrl}/#about">About</a>
        <a class="nav-link" href="${siteUrl}/#contact">Contact</a>
      </nav>
    </header>
${body}
    <footer>
      <span>${ownerName} Music</span>
      <a href="mailto:${email}">${email}</a>
    </footer>
  </body>
</html>
`;
}

function renderMedia(project) {
  if (project.media.type === "youtube") {
    return `<div class="media">
          <iframe
            src="${youtubeEmbedUrl(project)}"
            title="${escapeHtml(project.title)}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>`;
  }

  return `<div class="media">
          <video controls playsinline preload="metadata" poster="${siteUrl}/og-image.png" src="${project.media.url}">
            <a href="${project.media.url}">Open ${escapeHtml(project.title)}</a>
          </video>
        </div>`;
}

function projectPage(project) {
  const canonical = projectUrl(project);
  const title = `${project.title} | ${ownerName} Portfolio`;
  const structuredData = baseStructuredData({
    title,
    description: project.description,
    url: canonical,
    breadcrumbName: project.shortTitle,
    extra: [
      {
        "@type": "CreativeWork",
        "@id": `${canonical}#creative-work`,
        name: project.title,
        headline: project.title,
        description: project.description,
        url: canonical,
        genre: project.category,
        keywords: project.tags,
        creator: {
          "@id": `${siteUrl}/#jo-sockett`,
        },
        video: {
          "@id": `${canonical}#video`,
        },
      },
      {
        "@id": `${canonical}#video`,
        ...videoObject(project),
      },
    ],
  });

  const body = `    <main>
      <section class="hero">
        <p class="eyebrow">${escapeHtml(project.category)} / ${escapeHtml(project.type)}</p>
        <h1>${escapeHtml(project.title)}</h1>
        <p class="lede">${escapeHtml(project.description)}</p>
        <div class="actions">
          <a class="button primary" href="${siteUrl}/#contact">Contact Jo</a>
          <a class="button" href="${siteUrl}/projects/">Browse all projects</a>
        </div>
      </section>

      <section class="panel" aria-labelledby="project-title">
        ${renderMedia(project)}
        <div>
          <h2 id="project-title">Project notes</h2>
          <p>${escapeHtml(project.detail)}</p>
          <p>${escapeHtml(ownerName)}'s portfolio covers film scoring, game audio, ADR, Foley, sound design, composition and experimental audio practice.</p>
          <ul class="meta">
            ${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("\n            ")}
          </ul>
        </div>
      </section>
    </main>`;

  return pageShell({
    title,
    description: project.description,
    keywords: project.keywords,
    canonical,
    structuredData,
    body,
  });
}

function projectIndexPage() {
  const canonical = `${siteUrl}/projects/`;
  const title = `${ownerName} Projects | Film Scoring, Game Audio and Sound Design`;
  const description =
    "Browse Jo Sockett's portfolio projects across film scoring, game audio, ADR, sound design, composition and electroacoustic music.";
  const structuredData = baseStructuredData({
    title,
    description,
    url: canonical,
    breadcrumbName: "Projects",
    extra: [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#collection`,
        name: title,
        description,
        url: canonical,
        mainEntity: {
          "@id": `${canonical}#project-list`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#project-list`,
        name: "Jo Sockett portfolio projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: projectUrl(project),
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: projectUrl(project),
            creator: {
              "@id": `${siteUrl}/#jo-sockett`,
            },
          },
        })),
      },
    ],
  });

  const projectLinks = projects
    .map(
      (project) => `<a href="${projectUrl(project)}">
          <span class="eyebrow">${escapeHtml(project.category)}</span>
          <strong>${escapeHtml(project.title)}</strong>
          <span>${escapeHtml(project.description)}</span>
        </a>`,
    )
    .join("\n        ");

  const body = `    <main>
      <section class="hero">
        <p class="eyebrow">Portfolio projects</p>
        <h1>Film scoring, game audio and sound design work.</h1>
        <p class="lede">${description}</p>
        <div class="actions">
          <a class="button primary" href="${siteUrl}/#showreel">Watch showreel</a>
          <a class="button" href="${siteUrl}/#contact">Contact Jo</a>
        </div>
      </section>

      <section aria-labelledby="projects-title">
        <h2 id="projects-title">All projects</h2>
        <div class="project-list">
        ${projectLinks}
        </div>
      </section>
    </main>`;

  return pageShell({
    title,
    description,
    keywords: "Jo Sockett projects, film scoring portfolio, game audio portfolio, sound design portfolio, ADR portfolio",
    canonical,
    structuredData,
    body,
  });
}

function sitemapXml() {
  const simpleUrls = [
    { loc: `${siteUrl}/`, priority: "1.0", changefreq: "monthly" },
    { loc: `${siteUrl}/projects/`, priority: "0.9", changefreq: "monthly" },
  ];
  const projectUrls = projects.map((project) => ({
    loc: projectUrl(project),
    priority: "0.8",
    changefreq: "monthly",
    project,
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${simpleUrls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${modifiedDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <image:image>
      <image:loc>${siteUrl}/og-image.png</image:loc>
      <image:title>${ownerName} music and sound design portfolio</image:title>
    </image:image>
  </url>`,
  )
  .join("\n")}
${projectUrls
  .map(
    ({ loc, priority, changefreq, project }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${modifiedDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${siteUrl}/og-image.png</image:loc>
      <image:title>${escapeHtml(project.title)}</image:title>
    </image:image>
    ${videoSitemapEntry(project)}
  </url>`,
  )
  .join("\n")}
</urlset>
`;
}

function feedXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteName} - ${ownerName} Portfolio Projects</title>
    <link>${siteUrl}/projects/</link>
    <description>Film scoring, game audio, ADR, sound design, composition and experimental audio work by ${ownerName}.</description>
    <language>en-GB</language>
    <lastBuildDate>${new Date(`${modifiedDate}T00:00:00Z`).toUTCString()}</lastBuildDate>
${projects
  .map(
    (project) => `    <item>
      <title>${escapeHtml(project.title)}</title>
      <link>${projectUrl(project)}</link>
      <guid isPermaLink="true">${projectUrl(project)}</guid>
      <description>${escapeHtml(project.description)}</description>
      <pubDate>${new Date(`${modifiedDate}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;
}

function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function webManifest() {
  return JSON.stringify(
    {
      name: "PortfoliJo - Jo Sockett Portfolio",
      short_name: "PortfoliJo",
      description:
        "Portfolio of Jo Sockett, composer and sound designer for film, games, ADR and experimental audio.",
      start_url: `${siteUrl}/`,
      scope: `${siteUrl}/`,
      display: "standalone",
      background_color: "#f3d3d4",
      theme_color: "#812332",
      icons: [
        {
          src: `${siteUrl}/favicon.svg`,
          sizes: "any",
          type: "image/svg+xml",
          purpose: "any maskable",
        },
        {
          src: `${siteUrl}/og-image.png`,
          sizes: "1800x1100",
          type: "image/png",
        },
      ],
    },
    null,
    2,
  );
}

async function main() {
  await mkdir(projectsDir, { recursive: true });
  await mkdir(videosDir, { recursive: true });

  await Promise.all([
    copyFile(path.join(rootDir, "assets", "scorewave.png"), path.join(publicDir, "og-image.png")),
    copyFile(path.join(rootDir, "assets", "spirited-away.mp4"), path.join(videosDir, "spirited-away.mp4")),
    copyFile(path.join(rootDir, "assets", "edward-scissorhands.mp4"), path.join(videosDir, "edward-scissorhands.mp4")),
  ]);

  await writeFile(path.join(projectsDir, "index.html"), projectIndexPage());

  await Promise.all(
    projects.map(async (project) => {
      const projectDirectory = path.join(projectsDir, project.slug);
      await mkdir(projectDirectory, { recursive: true });
      await writeFile(path.join(projectDirectory, "index.html"), projectPage(project));
    }),
  );

  await Promise.all([
    writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml()),
    writeFile(path.join(publicDir, "robots.txt"), robotsTxt()),
    writeFile(path.join(publicDir, "feed.xml"), feedXml()),
    writeFile(path.join(publicDir, "site.webmanifest"), `${webManifest()}\n`),
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
