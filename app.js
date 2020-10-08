console.log(`this file was created by Vi`);

// Define variable. This variable is an array which keeps 02 matched Ids in an object.
const sections = [
  {
    menuId: "section-welcome", // this Id will be added for newNavButton when it was generated.
    sectionId: "welcome", // this Id was added for each section in HTML file manually.
  },
  {
    menuId: "section-service",
    sectionId: "service",
  },
  {
    menuId: "section-technician",
    sectionId: "technician",
  },
  {
    menuId: "section-about-us",
    sectionId: "about-us",
  },
  {
    menuId: "section-appointment",
    sectionId: "appointment",
  },
];

// Building navbar as anorder list
function initialSetup() {
  const navBar = document.querySelector("ul.nav__links");
  const fragment = document.createDocumentFragment();
  sections.forEach((section) => {
    const newNavButton = makeNewNavButtion(section);
    newNavButton.addEventListener("click", function () {
      scrollToSection(section.sectionId);
    });
    fragment.appendChild(newNavButton);
  });
  navBar.appendChild(fragment);
}

function makeNewNavButtion(section) {
  const newNavButton = document.createElement("li");
  newNavButton.setAttribute("id", section.menuId);
  if (section.sectionId === "welcome") {
    newNavButton.textContent = "Home";
  } else {
    newNavButton.textContent = section.sectionId;
  }
  return newNavButton;
}

// Scroll to another sections //

function scrollToSection(id) {
  const element = document.getElementById(id);
  console.log(element.offsetTop);
  window.scrollTo({
    top: element.offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

// Handle burger menu click//

function setUpBurgerBtn() {
  const menuBtn = document.querySelector("button.burger-menu");
  menuBtn.addEventListener("click", function (e) {
    if (menuBtn.classList.contains("clicked")) {
      menuBtn.classList.remove("clicked");
    } else {
      menuBtn.classList.add("clicked");
    }
  });
}

// Slider image in welcome section //

function setUpSliderImages() {
  const sliderImages = Array.from(document.querySelectorAll(".main-pic"));

  setInterval(function () {
    const findIndex = sliderImages.findIndex(function (sliderImage) {
      return sliderImage.classList.contains("show");
    });
    let nextIndex = (findIndex + 1) % sliderImages.length; // 1,2,0
    sliderImages[findIndex].classList.remove("show");
    sliderImages[nextIndex].classList.add("show");
  }, 2000);
}

// Collapse button - service section//

function setUpCollapseBtn() {
  const collapeBtn = document.querySelector("button.collapsible");
  const serviceCards = Array.from(document.querySelectorAll(".service-item"));
  const filteredHiddenCards = serviceCards.filter(function (serviceCard) {
    return serviceCard.classList.contains("hidden");
  });

  filteredHiddenCards.forEach(function (hiddenCard) {
    collapeBtn.addEventListener("click", function (e) {
      if (hiddenCard.classList.contains("hidden")) {
        hiddenCard.classList.remove("hidden");
        collapeBtn.classList.add("clicked");
        e.target.textContent = "Collapse";
      } else {
        hiddenCard.classList.add("hidden");
        collapeBtn.classList.remove("clicked");
        e.target.textContent = "See more";
      }
    });
  });
}
// Button on technician cards//

function setUpCardProfileTech() {
  const cardProfiles = document.querySelectorAll(".tag");

  cardProfiles.forEach(function (cardProfile) {
    const introduceBtn = cardProfile.querySelector("button.introduce");
    introduceBtn.addEventListener("click", function (e) {
      if (
        cardProfile.classList.contains("active") &&
        introduceBtn.classList.contains("clicked")
      ) {
        e.target.textContent = "Introduce";
        cardProfile.classList.remove("active");
        introduceBtn.classList.remove("clicked");
      } else {
        e.target.textContent = "Close";
        cardProfile.classList.add("active");
        introduceBtn.classList.add("clicked");
      }
    });
  });
}

//Button for appointment request//

function setUpAppointmentBtn() {
  const aptmBtn = document.querySelector(".post-btn");

  aptmBtn.addEventListener("click", function (e) {
    if (aptmBtn.classList.contains("clicked")) {
      e.target.textContent = "Request";
      aptmBtn.classList.remove("clicked");
    } else {
      e.target.textContent = "Requested";
      aptmBtn.classList.add("clicked");
    }
  });
}

// Button Back-to-top//

function setupBackToTopBtn() {
  const backToTopBtn = document.querySelector(".back-to-top");

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
}

// Call functions when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initialSetup();
  setUpBurgerBtn();
  setUpSliderImages();
  setUpCollapseBtn();
  setUpCardProfileTech();
  setUpAppointmentBtn();
  setupBackToTopBtn();
});

// Check which section is in viewport, then add active class for it and active class for its button in navbar.

document.addEventListener(
  "scroll",
  function () {
    checkSectionInViewport();
  },
  {
    passive: true,
  }
);

function checkSectionInViewport() {
  sections.forEach((section) => {
    const sectionElement = document.getElementById(`${section.sectionId}`);
    const activeNavBtn = document.getElementById(`${section.menuId}`);
    if (isInViewport(sectionElement) === "yes") {
      sectionElement.classList.add("active");
      activeNavBtn.classList.add("active");
    } else {
      sectionElement.classList.remove("active");
      activeNavBtn.classList.remove("active");
    }
  });
}

function isInViewport(Element) {
  const rect = Element.getBoundingClientRect();
  if (rect.top <= 80 && rect.bottom >= 80) {
    return "yes";
  } else {
    return "no";
  }
}

// Create fixed header
document.addEventListener(
  "scroll",
  function () {
    fixedHeader();
  },
  {
    passive: true,
  }
);
const header = document.getElementById("header");

function fixedHeader() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}
