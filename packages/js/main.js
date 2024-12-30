document.addEventListener("DOMContentLoaded", () => {
  const options = {
      strings: ["IT Enthusiast", "Game Lover"],
      typeSpeed: 100, // Kecepatan mengetik (ms per karakter)
      backSpeed: 50,  // Kecepatan menghapus
      backDelay: 2000, // Jeda sebelum teks berikutnya
      loop: true,      // Mengulang animasi
  };

  const typed = new Typed("#typed-text", options);
});
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// For Projek
const projects = [
  // { img: '/packages/images/', name: 'Project 1', description: 'Description of Project 1.' },
  { img: '/packages/images/moodle.png', name: 'Create LMS for elementary school exams', description: 'Based on Moodle with Moodle, web-server Nginx, and database MariaDB.' },
  { img: '/packages/images/mikrodik.png', name: 'Router Configuration(Routing, Forwarding)', description: 'Just routing into a destination and forward it.' },
  { img: '/packages/images/ssl.png', name: 'Create ssl and basic security for several school pages', description: 'Vocational High School 2 Yogyakarta.' },
  { img: '/packages/images/proxmox.png', name: 'Troubleshooting Clustering error in DataCenter', description: 'Proxmox Clustering Proxy error.' },
  { img: '/packages/images/terrapom.jpg', name: 'Infrastructure automation with Terraform', description: 'Using code to provision and manage infrastructure efficiently and consistently.' },
  { img: '/packages/images/nas.png', name: 'Proxmox installation with clustering and NAS storage', description: 'Setting up Proxmox VE on multiple nodes to create a cluster, and configuring shared storage using NAS for high availability and efficient resource management.' },
  { img: '/packages/images/load-balancing.jpg', name: 'Load Balancing Moodle E-Learning with High Availability', description: 'Distributing the load across multiple servers to ensure that the system remains responsive and available.' },
  { img: '/packages/images/cicd', name: 'CI/CD pipeline (Continuous Integration/Continuous Deployment)', description: 'Automates the process of integrating code changes, running tests, and deploying applications.' },
  { img: '/packages/images/postdov.gif', name: 'Mail server with Postfix & Dovecot(LKS DIY)', description: 'Configuring Postfix as the Mail Transfer Agent (MTA) to handle sending and receiving emails, and Dovecot as the IMAP/POP3 server to manage email retrieval and storage.' },
  { img: '/packages/images/pgsql.png', name: 'CMS and LMS with PostgreSQL database(LKS DIY)', description: 'Systems to use PostgreSQL as the backend database for storing and managing content and user data.' },
  { img: '/packages/images/bind.jpg', name: 'Setting DNS with bind9(LKS DIY)', description: 'BIND software to act as a DNS server, managing domain name resolution for your network.' },
  { img: '/packages/images/CA.jpeg', name: 'Certification Authority(CA) Windows Server(LKS DIY)', description: 'Configuring Active Directory Certificate Services (AD CS) to manage digital certificates for your organization.' },
  // Add more projects as needed
];

const projectsPerPage = 4;
let currentPage = 1;

function renderProjects() {
  const projectsContainer = document.getElementById('projectsContainer');
  projectsContainer.innerHTML = '';

  const start = (currentPage - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  const paginatedProjects = projects.slice(start, end);

  paginatedProjects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('projects__content');
    projectElement.innerHTML = `
      <img src="${project.img}" alt="${project.name}" class="projects__img">
      <h3 class="projects__name">${project.name}</h3>
      <p class="projects__description">${project.description}</p>
    `;
    projectsContainer.appendChild(projectElement);
  });

  document.getElementById('paginationInfo').textContent = `Page ${currentPage} of ${Math.ceil(projects.length / projectsPerPage)}`;
  document.getElementById('prevPage').disabled = currentPage === 1;
  document.getElementById('nextPage').disabled = currentPage === Math.ceil(projects.length / projectsPerPage);
}

function scrollToProjects() {
  const projectsSection = document.querySelector('.projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderProjects();
    scrollToProjects();
  }
});

document.getElementById('nextPage').addEventListener('click', () => {
  if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
    currentPage++;
    renderProjects();
    scrollToProjects();
  }
});

document.addEventListener('DOMContentLoaded', renderProjects);