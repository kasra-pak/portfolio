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

const dropdownList = document.querySelector(".drop-down-list");
const cardHeader = document.querySelector(".card__header");
const projectTitle = document.querySelector(".project-title");
const projectDesc = document.querySelector(".project-desc");
const cardFooter = document.querySelector(".card__footer");
const projectTechs = document.querySelector(".project-techs");
const projectFeatures = document.querySelector(".project-features");
const projectsList = document.querySelector(".projects-list > ul");

const initialProjectId = "1";

window.addEventListener("DOMContentLoaded", () => {
  fillProjectsList();
  displayProjectDetail(initialProjectId);
});
window.addEventListener("click", handleProjectToggle);

function handleProjectToggle(e) {
  const listItemClicked = e.target.matches(".list-item");
  const toggleBtnClicked = e.target.matches(".drop-down-toggler");

  if (listItemClicked) {
    const clickedProjectId = e.target.dataset.projectId;

    displayProjectDetail(clickedProjectId);
    closeDropDown();

    projectsList.childNodes.forEach((listItem, idx) => {
      if (listItem.dataset.projectId === clickedProjectId) {
        listItem.classList.add("active");
        dropdownList.childNodes[idx].classList.add("active");
      } else {
        listItem.classList.remove("active");
        dropdownList.childNodes[idx].classList.remove("active");
      }
    });
  } else if (toggleBtnClicked) {
    dropdownList.classList.toggle("open");
    cardHeader.classList.toggle("select-mode");
  } else {
    closeDropDown();
  }
}

function closeDropDown() {
  dropdownList.classList.remove("open");
  cardHeader.classList.remove("select-mode");
}

function fillProjectsList() {
  const fragment = document.createDocumentFragment();

  projects.forEach(project => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    if (project.id === initialProjectId) {
      li.classList.add("active");
    }
    li.setAttribute("data-project-id", project.id);
    li.textContent = project.title;
    fragment.appendChild(li);
  });

  const fragmentCopy = fragment.cloneNode(true);

  projectsList.appendChild(fragment);
  dropdownList.appendChild(fragmentCopy);
}

function displayProjectDetail(projectId) {
  const targetProject = projects.find(project => project.id === projectId);
  const fragment = document.createDocumentFragment();
  const checkIconSVG = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
    `;

  projectTitle.textContent = targetProject.title;
  projectDesc.textContent = targetProject.desc;

  targetProject.techs.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    fragment.appendChild(listItem);
  });
  projectTechs.replaceChildren(fragment);

  targetProject.features.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="check">${checkIconSVG}</span>
      <p>${item}</p>
    `;

    fragment.appendChild(listItem);
  });
  projectFeatures.replaceChildren(fragment);

  cardFooter.innerHTML = `
    <a href=${targetProject.url} target="_blank" class="btn-primary-black">Live Site</a>
    <a href=${targetProject.repository} target="_blank" class="btn-secondary-black">View Code</a>
  `;
}
