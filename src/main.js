import "./styles.css";
import scorewavePoster from "../assets/scorewave.png";
import edwardVideo from "../assets/edward-scissorhands.mp4";
import spiritedVideo from "../assets/spirited-away.mp4";

const projectData = {
  spirited: {
    kicker: "Alternative score",
    title: "Spirited Away Alternative Score",
    text: "An alternative score to Spirited Away, written and produced in Logic Pro X using MIDI sounds.",
    tags: ["Screen scoring", "Logic Pro X", "MIDI"],
    media: {
      type: "local-video",
      src: spiritedVideo,
      title: "Spirited Away Alternative Score",
    },
  },
  edward: {
    kicker: "Alternative score",
    title: "Edward Scissorhands Alternative Score",
    text: "A rewritten score for Edward Scissorhands, produced with Logic Pro X and MIDI sounds.",
    tags: ["Screen scoring", "Logic Pro X", "Film"],
    media: {
      type: "local-video",
      src: edwardVideo,
      title: "Edward Scissorhands Alternative Score",
    },
  },
  agent: {
    kicker: "ADR / sound design",
    title: "Agent MX Z3RO",
    text: "ADR recording and editing, temp score editing and sound design for Agent MX Z3RO, including Jo's voice work for Agent Sierra.",
    tags: ["ADR", "Temp score", "Sound edit"],
    media: {
      type: "youtube",
      id: "EXLT3gbgUSg",
      title: "Agent MX Z3RO ADR, Sound Design and Temp Score",
    },
  },
  firefly: {
    kicker: "Trio",
    title: "The Firefly",
    text: "A flute, cello and piano trio inspired by minimalism and Steve Reich, exploring unusual time signatures and limited musical material.",
    tags: ["Flute", "Cello", "Piano", "Live ensemble"],
    media: {
      type: "youtube",
      id: "e19ETowKhXE",
      title: "The Firefly by Jo Sockett",
    },
  },
  home: {
    kicker: "Composition study",
    title: "I Want to go Home",
    text: "A piece focused on atonality and unconventional composing, built as a practical study in bending theory rules.",
    tags: ["Atonality", "Theory", "Composition"],
    media: {
      type: "youtube",
      id: "NcOSf1qAutM",
      title: "I Want to go Home",
    },
  },
  seahorse: {
    kicker: "Orchestral programme",
    title: "Captain Seahorse and the Voyage of Doom",
    text: "A seven-movement orchestral programme piece about a ship lost at sea and returning to safety, connected by a five-note motif.",
    tags: ["Orchestral", "Motif", "Programme music"],
    media: {
      type: "youtube",
      id: "Fq6xgqzLbVM",
      title: "Captain Seahorse and the Voyage of Doom",
    },
  },
  maybe: {
    kicker: "Sonic arts",
    title: "Maybe Just One More",
    text: "A single wind chime recording transformed with stretch plugins, EQ, reverb and distortion into a blurred, disorientating sound world.",
    tags: ["Sonic arts", "Reverb", "Distortion"],
    media: {
      type: "youtube",
      id: "-zcUWyBUYmk",
      title: "Maybe Just One More",
    },
  },
  hollow: {
    kicker: "Game audio",
    title: "Hollow Knight Soundtrack and Sound Design",
    text: "Music, sound design, editing and mix work for a Hollow Knight playthrough, using Logic Pro X, Pro Tools and sourced effects.",
    tags: ["Game audio", "Logic Pro X", "Pro Tools"],
    media: {
      type: "youtube",
      id: "aFMa1FinjpI",
      title: "Hollow Knight Soundtrack and Sound Design",
    },
  },
  stardew: {
    kicker: "Game audio",
    title: "Stardew Valley Soundtrack and Sound Design",
    text: "Original soundtrack and sound design work for a Stardew Valley playthrough, edited and mixed in Pro Tools.",
    tags: ["Game audio", "Sound design", "Pro Tools"],
    media: {
      type: "youtube",
      id: "xMAcoljWejg",
      title: "Stardew Valley Soundtrack and Sound Design",
    },
  },
  love: {
    kicker: "Electroacoustic",
    title: "What do you Love?",
    text: "An electroacoustic piece created in Pro Tools from voice recordings of people answering one question: what do you love?",
    tags: ["Voice", "Electroacoustic", "Pro Tools"],
    media: {
      type: "youtube",
      id: "Lnxa8ygV53Q",
      title: "What do you Love?",
    },
  },
};

const year = document.querySelector("[data-year]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
const projectButtons = document.querySelectorAll("[data-project-card]");
const copyButtons = document.querySelectorAll("[data-copy]");
const navLinks = document.querySelectorAll(".site-nav a");
const detail = {
  player: document.querySelector("[data-project-player]"),
  kicker: document.querySelector("[data-project-kicker]"),
  title: document.querySelector("[data-project-title]"),
  text: document.querySelector("[data-project-text]"),
  tags: document.querySelector("[data-project-tags]"),
};

if (year) {
  year.textContent = new Date().getFullYear();
}

function selectProject(projectId) {
  const project = projectData[projectId];

  if (!project) {
    return;
  }

  detail.kicker.textContent = project.kicker;
  detail.title.textContent = project.title;
  detail.text.textContent = project.text;
  renderProjectMedia(project.media);
  detail.tags.replaceChildren(
    ...project.tags.map((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      return item;
    }),
  );

  projectButtons.forEach((button) => {
    const isSelected = button.dataset.projectCard === projectId;
    button.closest(".project-card").classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderProjectMedia(media) {
  if (!detail.player || !media) {
    return;
  }

  if (media.type === "local-video") {
    detail.player.innerHTML = `
      <video controls playsinline preload="metadata" poster="${scorewavePoster}" src="${media.src}">
        <a href="${media.src}">Open ${media.title}</a>
      </video>
    `;
    return;
  }

  if (media.type === "youtube") {
    detail.player.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${media.id}"
        title="${media.title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
  }
}

function applyFilter(filter) {
  let firstVisibleProject = null;

  projectCards.forEach((card) => {
    const categories = card.dataset.category.split(" ");
    const isVisible = filter === "all" || categories.includes(filter);

    card.hidden = !isVisible;

    if (isVisible && !firstVisibleProject) {
      firstVisibleProject = card.querySelector("[data-project-card]").dataset.projectCard;
    }
  });

  if (firstVisibleProject) {
    selectProject(firstVisibleProject);
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    applyFilter(button.dataset.filter);
  });
});

projectButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.closest(".project-card").classList.contains("is-selected")));
  button.addEventListener("click", () => selectProject(button.dataset.projectCard));
});

selectProject("spirited");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const originalLabel = button.textContent;

    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = "Copied";
    } catch {
      window.location.href = `mailto:${button.dataset.copy}`;
      button.textContent = "Opening";
    }

    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 1600);
  });
});

const sections = [...document.querySelectorAll("section[id]")];

function setActiveNav() {
  const checkpoint = window.scrollY + 140;
  let activeId = null;

  sections.forEach((section) => {
    if (section.offsetTop <= checkpoint) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", Boolean(activeId) && link.getAttribute("href") === `#${activeId}`);
  });
}

setActiveNav();
window.addEventListener("scroll", setActiveNav, { passive: true });
window.addEventListener("resize", setActiveNav);
