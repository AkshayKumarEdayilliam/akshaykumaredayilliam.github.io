// Update this object with your real profile details.
const siteData = {
  name: "Your Name",
  role: "PhD Scholar",
  summary:
    "I am a PhD scholar with research interests in rigorous, problem-driven academic work. My work combines careful analysis, systematic experimentation, and practical relevance.",
  location: "Your University, India",
  email: "your.email@university.edu",
  cvUrl: "#",
  focusTitle: "Focused research with academic rigor",
  focusText:
    "Use this space for a short description of your dissertation topic, current lab focus, or ongoing work. Keep it specific and formal.",
  about: [
    "I am currently pursuing my PhD and working on research problems that require both conceptual depth and methodological clarity. My academic interests are centered on producing work that is technically sound, relevant, and carefully evaluated.",
    "This website presents a concise overview of my background, research interests, current work, and selected academic outputs. It can also be used as a central place for updates, publications, and professional contact.",
  ],
  heroMeta: ["PhD Scholar", "Researcher", "Academic Website"],
  news: [
    {
      date: "Mar 2026",
      text: "Currently working on my dissertation and extending my ongoing research.",
    },
    {
      date: "Jan 2026",
      text: "Presented ongoing work in a departmental seminar.",
    },
    {
      date: "Oct 2025",
      text: "Began a new phase of focused doctoral research.",
    },
  ],
  researchTags: [
    "PhD Research",
    "Academic Writing",
    "Experimental Methods",
    "Interdisciplinary Work",
  ],
  researchAreas: [
    {
      title: "Primary Research Theme",
      text: "Replace this with a concise description of your dissertation topic, problem statement, and why it matters.",
    },
    {
      title: "Methods and Approach",
      text: "Mention the methods you use such as experiments, modeling, simulations, field work, theory, or system building.",
    },
    {
      title: "Future Directions",
      text: "Add the problems you want to explore next, the questions driving your work, or the impact you want your research to create.",
    },
  ],
  experience: [
    {
      title: "PhD Scholar",
      text: "Department / Lab Name, University Name. Add your advisor, start year, and the broad focus of your doctoral work.",
    },
    {
      title: "Previous Academic Background",
      text: "Summarize your master's, bachelor's, or earlier research experience in one or two lines.",
    },
  ],
  publications: [
    {
      title: "Working Paper / Publication Title",
      text: "Add one line describing the contribution, venue, or status such as submitted, under review, or published.",
      meta: "Authors, Venue, Year",
    },
    {
      title: "Project or Research Output",
      text: "Use this area for a dataset, software artifact, thesis chapter, workshop paper, or technical report.",
      meta: "Project Link or Note",
    },
  ],
  contactText:
    "I welcome academic correspondence, collaboration opportunities, and professional inquiries related to my research.",
  contactLinks: [
    { label: "Email", value: "your.email@university.edu", href: "mailto:your.email@university.edu" },
    { label: "Google Scholar", value: "Add your profile", href: "#" },
    { label: "LinkedIn", value: "Add your profile", href: "#" },
    { label: "GitHub", value: "AkshayKumarEdayilliam", href: "https://github.com/AkshayKumarEdayilliam" },
  ],
  footer: `© ${new Date().getFullYear()} Your Name. Built for GitHub Pages.`,
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
