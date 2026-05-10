// Update this object with your real profile details.
const siteData = {
  name: "Akshay Kumar E",
  role: "PhD Scholar | Cybersecurity Researcher",
  summary:
    "I am a PhD scholar at IIT Madras working with Prof. Chester Rebeiro. My research focuses on power side-channel attacks, countermeasures, and secure processor design.",
  location: "IIT Madras, Chennai, India",
  email: "akshay@cse.iitm.ac.in",
  cvUrl: "#",
  focusTitle: "Power side-channel attacks and secure processor design",
  focusText:
    "My current work studies security risks in modern computing systems, with emphasis on side-channel leakage, countermeasure design, and hardware-aware security analysis.",
  about: [
    "I am currently pursuing my PhD at the Indian Institute of Technology Madras under the guidance of Prof. Chester Rebeiro. My research interests lie broadly in cybersecurity, cryptography, side-channel attacks, and secure processor design.",
    "I am particularly interested in understanding practical leakage channels in computing systems and developing rigorous methods to analyze and mitigate them.",
  ],
  heroMeta: ["PhD Scholar", "Cybersecurity", "Secure Hardware"],
  news: [
    {
      date: "Current",
      text: "Working on doctoral research in power side-channel attacks and secure processor design.",
    },
    {
      date: "Research",
      text: "Exploring countermeasures, RISC-V architecture, and deep learning methods for security analysis.",
    },
  ],
  researchTags: [
    "Cybersecurity",
    "Cryptography",
    "Side-Channel Attacks",
    "Secure Processor Design",
    "RISC-V Architecture",
    "Deep Learning for Security Analysis",
  ],
  researchAreas: [
    {
      title: "Side-Channel Attacks and Countermeasures",
      text: "Analyzing leakage channels in computing systems and studying techniques to reduce practical attack surfaces.",
    },
    {
      title: "Secure Processor Design",
      text: "Investigating hardware-aware security questions, including processor-level design choices and their security implications.",
    },
    {
      title: "Learning-Based Security Analysis",
      text: "Exploring the role of deep learning methods in security evaluation and side-channel analysis.",
    },
  ],
  experience: [
    {
      title: "PhD Scholar",
      text: "Indian Institute of Technology Madras. Advisor: Prof. Chester Rebeiro. Research focus: cybersecurity, side-channel attacks, and secure processor design.",
    },
  ],
  publications: [
    {
      title: "Selected publications and projects",
      text: "Research outputs, publications, and project links will be added here as they become available.",
      meta: "PhD Research",
    },
  ],
  contactText:
    "I welcome academic correspondence, collaboration opportunities, and professional inquiries related to my research.",
  contactLinks: [
    { label: "Email", value: "akshay@cse.iitm.ac.in", href: "mailto:akshay@cse.iitm.ac.in" },
    { label: "GitHub", value: "AkshayKumarEdayilliam", href: "https://github.com/AkshayKumarEdayilliam" },
  ],
  footer: `© ${new Date().getFullYear()} Akshay Kumar E. Built for GitHub Pages.`,
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
};

const renderList = (id, items, template) => {
  const node = document.getElementById(id);
  if (!node) {
    return;
  }

  node.innerHTML = items.map(template).join("");
};

document.title = `${siteData.name} | ${siteData.role}`;

setText("heroRole", siteData.role);
setText("heroName", siteData.name);
setText("heroSummary", siteData.summary);
setText("focusTitle", siteData.focusTitle);
setText("focusText", siteData.focusText);
setText("contactText", siteData.contactText);
setText("footerText", siteData.footer);

const cvLink = document.getElementById("cvLink");
cvLink.href = siteData.cvUrl;

renderList(
  "heroMeta",
  siteData.heroMeta,
  (item) => `<li>${item}</li>`
);

renderList(
  "newsList",
  siteData.news,
  (item) => `
    <article class="timeline-item reveal">
      <strong>${item.date}</strong>
      <p>${item.text}</p>
    </article>
  `
);

renderList(
  "aboutText",
  siteData.about,
  (item) => `<p>${item}</p>`
);

renderList(
  "researchTags",
  siteData.researchTags,
  (item) => `<span>${item}</span>`
);

renderList(
  "researchAreas",
  siteData.researchAreas,
  (item) => `
    <article class="stack-item reveal">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </article>
  `
);

renderList(
  "experienceList",
  siteData.experience,
  (item) => `
    <article class="stack-item reveal">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </article>
  `
);

renderList(
  "publicationList",
  siteData.publications,
  (item) => `
    <article class="publication-item reveal">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
      <div class="publication-meta">${item.meta}</div>
    </article>
  `
);

renderList(
  "contactLinks",
  siteData.contactLinks,
  (item) => `
    <a class="contact-link reveal" href="${item.href}">
      <span>${item.label}</span>
      <span>${item.value}</span>
    </a>
  `
);

const heroMeta = document.getElementById("heroMeta");
heroMeta.insertAdjacentHTML(
  "beforeend",
  `<li>${siteData.location}</li><li>${siteData.email}</li>`
);
