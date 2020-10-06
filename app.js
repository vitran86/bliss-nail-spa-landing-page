console.log(`this file was created by Vi`);

// Handle burger menu click//

const menuBtn = document.querySelector("button.burger-menu");
menuBtn.addEventListener("click", function (e) {
  if (menuBtn.classList.contains("clicked")) {
    menuBtn.classList.remove("clicked");
  } else {
    menuBtn.classList.add("clicked");
  }
});

// Slider image in welcome section //

const sliderImages = Array.from(document.querySelectorAll(".main-pic"));

setInterval(function () {
  const findIndex = sliderImages.findIndex(function (sliderImage) {
    return sliderImage.classList.contains("show");
  });
  let nextIndex = (findIndex + 1) % sliderImages.length; // 1,2,0
  sliderImages[findIndex].classList.remove("show");
  sliderImages[nextIndex].classList.add("show");
}, 2000);

// Collapse button - service section//

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
// Button on technician cards//

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

//Button for appointment request//

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

// Button Back-to-top//

const backToTopBtn = document.querySelector(".back-to-top");

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// Scroll to another sections //
const sections = [
  {
    menuId: "section-welcome",
    sectionId: "welcome",
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

function scrollToSection(id) {
  const element = document.getElementById(id);
  console.log(element.offsetTop);
  window.scrollTo({
    top: element.offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

sections.forEach((section) => {
  const menuLink = document.getElementById(section.menuId);
  return menuLink.addEventListener("click", function () {
    scrollToSection(section.sectionId);
  });
});
