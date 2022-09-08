const projects = [
  {
    id: "1",
    title: "space tourism",
    desc: "multi-page space tourism website.",
    techs: ["styled components", "react"],
    features: [],
    url: "https://kasra-pak.github.io/space-tourism-website/",
    repository: "https://github.com/kasra-pak/space-tourism-website",
  },
  {
    id: "2",
    title: "movie database",
    desc: "A website that provides recent information and details about movies, tv shows, etc. Uses The Movie DataBase (TMDB) API as a backbone.",
    techs: ["react", "tailwind CSS", "firebase", "API"],
    features: ["login/logout", "custom watchlist"],
    url: null,
    repository: "https://github.com/kasra-pak/movie-db-website",
  },
  {
    id: "3",
    title: "rest countries api",
    desc: "Integrates with the REST Countries API to pull country data and display it.",
    techs: ["scss", "react"],
    features: [
      "search",
      "filter search results",
      "detailed information",
      "dark mode toggle",
    ],
    url: "https://kasra-pak.github.io/rest-countries-api-with-dark-theme/",
    repository:
      "https://github.com/kasra-pak/rest-countries-api-with-dark-theme",
  },
  {
    id: "4",
    title: "fylo landing page",
    desc: "a template landing page with great layout. ",
    techs: ["html", "scss", "js"],
    features: [],
    url: "https://kasra-pak.github.io/Fylo-dark-theme-landing-page/",
    repository: "https://github.com/kasra-pak/Fylo-dark-theme-landing-page",
  },
];

const dropdownToggler = document.querySelector(".drop-down-toggler");
const dropdownList = document.querySelector(".drop-down-list");
const cardHeader = document.querySelector(".card__header");
const projectTitle = document.querySelector(".project-title");
const projectDesc = document.querySelector(".project-desc");
const cardFooter = document.querySelector(".card__footer");
const projectTechs = document.querySelector(".project-techs");
const projectFeatures = document.querySelector(".project-features");
const projectsList = document.querySelector(".projects-list > ul");

let selectedProjectIndex = "2";

window.addEventListener("DOMContentLoaded", () => {
  populateLists();
  displayDetail(selectedProjectIndex);
});

dropdownToggler.addEventListener("click", toggleDropdown);

function populateLists() {
  dropdownList.append(
    ...projects.map(item => createListItem(item.title, item.id))
  );

  projectsList.append(
    ...projects.map(item => createListItem(item.title, item.id))
  );
}

function createListItem(text, id) {
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.setAttribute("data-project-id", id);
  li.textContent = text;
  li.addEventListener("click", e => {
    selectedProjectIndex = e.currentTarget.dataset.projectId;
    displayDetail(selectedProjectIndex);
    dropdownList.classList.remove("open");
    cardHeader.classList.remove("select-mode");
  });
  return li;
}

function displayDetail(projectId) {
  // const targetProjectId = ;

  const [targetProject] = projects.filter(item => item.id === projectId);

  updateProjectCard(targetProject);
}

function updateProjectCard(project) {
  projectTitle.textContent = project.title;
  projectDesc.textContent = project.desc;

  projectTechs.replaceChildren(
    ...project.techs.map(tech => createTechItem(tech))
  );

  projectFeatures.replaceChildren(
    ...project?.features.map(feature => createFeatureItem(feature))
  );

  cardFooter.innerHTML = `
    <a href=${project.url} class="btn-primary-black">Live Site</a>
    <a href=${project.repository} class="btn-secondary-black">View Code</a>
  `;
}

function createTechItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

function createFeatureItem(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="check">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
    </span>
    <p>${text}</p>
  `;
  return li;
}

function toggleDropdown() {
  dropdownList.classList.toggle("open");
  cardHeader.classList.toggle("select-mode");
}
