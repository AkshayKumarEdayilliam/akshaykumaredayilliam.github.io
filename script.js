const siteData = {
  name: "Akshay Kumar E",
  role: "PhD Scholar | Hardware Security Researcher",
  summary:
    "I am a PhD scholar in Computer Science and Engineering at IIT Madras, advised by Prof. Chester Rebeiro. My research focuses on hardware security, power side-channel attacks, detection and mitigation systems, and secure processor design.",
  location: "IIT Madras, Chennai, India",
  email: "akshay@cse.iitm.ac.in",
  cvUrl: "RenderCV_sb2nov_Theme.pdf",
  focusTitle: "Hardware security and power side-channel analysis",
  focusText:
    "My current work studies power side-channel leakage and practical detection and mitigation systems, with interests in secure processor design and machine learning applications for side-channel analysis.",
  about: [
    "I am currently pursuing my PhD at the Indian Institute of Technology Madras under the guidance of Prof. Chester Rebeiro. My research primarily centers on hardware security, with a special emphasis on side-channel attacks.",
    "I work on designing and implementing detection and mitigation systems for power side-channel attacks. I am also interested in machine learning applications in side-channel analysis, including learning-based disassemblers and attack detection systems.",
  ],
  heroMeta: ["PhD Scholar", "Hardware Security", "Side-Channel Analysis"],
  news: [
    {
      date: "Current",
      text: "Working on hardware security projects at C-HERD, IIT Madras.",
    },
    {
      date: "Research",
      text: "Focusing on power side-channel attacks, countermeasures, and secure processor design.",
    },
  ],
  researchTags: [
    "Hardware Security",
    "Power Side-Channel Attacks",
    "Countermeasures",
    "Secure Processor Design",
    "RISC-V Architecture",
    "Machine Learning for Security",
  ],
  researchAreas: [
    {
      title: "Power Side-Channel Attacks",
      text: "Analyzing leakage in computing systems and developing practical detection and mitigation methods for power side-channel attacks.",
    },
    {
      title: "Secure Processor Design",
      text: "Studying processor-level security questions, including hardware-aware countermeasures and secure microarchitectural design.",
    },
    {
      title: "Machine Learning for Security Analysis",
      text: "Exploring machine learning based disassemblers and side-channel attack detection systems.",
    },
  ],
  experience: [
    {
      title: "PhD Scholar, Computer Science and Engineering",
      text: "Indian Institute of Technology Madras, Jan 2022 - Ongoing. Research area: Hardware Security. Advisor: Prof. Chester Rebeiro. GPA: 8.5/10.",
    },
    {
      title: "Project Associate, C-HERD",
      text: "IIT Madras, Dec 2024 - Ongoing. Working on hardware security projects at the Centre on Hardware Security Entrepreneurship Research and Development, funded by MeitY, Govt. of India.",
    },
    {
      title: "M.Tech by Research, Computational and Data Science",
      text: "National Institute of Technology Karnataka, Surathkal, 2020 - 2022. Research area: Malware Analysis. Advisor: Prof. Jothi Ramalingam. GPA: 9/10.",
    },
    {
      title: "B.Tech, Computer Science and Engineering",
      text: "Government College of Engineering Kannur, 2015 - 2019. GPA: 8.19/10.",
    },
  ],
  publications: [
    {
      title: "GLiTCH: GLiTCH Induced Transitions for Secure Crypto-Hardware",
      text: "C. Rohin Menon, Jayanth Balasubramanian, Akshay Kumar E, Annapurna Valiveti, Chester Rebeiro, and Janakiraman Viraraghavan.",
      meta: "Accepted for presentation at the 62nd Design Automation Conference (DAC), 2025",
    },
    {
      title: "Light-weight Deep Learning Models for Visual Malware Classification",
      text: "Akshay Kumar E. and Jothi Rangasamy.",
      meta: "7th International Conference on Micro-Electronics, Electromagnetics and Telecommunications (ICMEET), 2022",
    },
  ],
  contactText:
    "I welcome academic correspondence, collaboration opportunities, and professional inquiries related to hardware security and side-channel analysis.",
  contactLinks: [
    { label: "Email", value: "akshay@cse.iitm.ac.in", href: "mailto:akshay@cse.iitm.ac.in" },
    { label: "Website", value: "akshaykumaredayilliam.github.io", href: "https://akshaykumaredayilliam.github.io/" },
    { label: "GitHub", value: "AkshayKumarEdayilliam", href: "https://github.com/AkshayKumarEdayilliam" },
    { label: "CV", value: "Download PDF", href: "RenderCV_sb2nov_Theme.pdf" },
  ],
  footer: `(c) ${new Date().getFullYear()} Akshay Kumar E. Built for GitHub Pages.`,
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
if (cvLink) {
  cvLink.href = siteData.cvUrl;
}

renderList("heroMeta", siteData.heroMeta, (item) => `<li>${item}</li>`);

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

renderList("aboutText", siteData.about, (item) => `<p>${item}</p>`);
renderList("researchTags", siteData.researchTags, (item) => `<span>${item}</span>`);

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
    <a class="contact-link reveal" href="${item.href}" target="_blank" rel="noreferrer">
      <span>${item.label}</span>
      <span>${item.value}</span>
    </a>
  `
);

const heroMeta = document.getElementById("heroMeta");
if (heroMeta) {
  heroMeta.insertAdjacentHTML(
    "beforeend",
    `<li>${siteData.location}</li><li>${siteData.email}</li>`
  );
}
