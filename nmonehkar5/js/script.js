// show nav-bar-lg
const iconbars = document.querySelector(".icon-toggle");
const menu_lg = document.querySelector(".list-lg");

iconbars.addEventListener("click", () => {
  // add class active to menu_lg
  menu_lg.classList.toggle("active");
});

//////////////////////////////////////////////////////////

//slider
function slider() {
  const slides = document.querySelectorAll(".slide");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const dotsEl = document.querySelector(".dots");

  let current = 0;
  let maxSLide = slides.length - 1;

  // go to slide
  function gotoSlide(current) {
    slides.forEach((slide, inx) => {
      slide.style.transform = `translateX(${(inx - current) * 100}%)`;
    });
  }

  function transitionSlide() {
    slides.forEach((slide) => {
      slide.style.transition = `transform 1s`;
    });
  }
  // next slide
  arrowRight.addEventListener("click", () => {
    current == maxSLide ? (current = 0) : current++;
    gotoSlide(current);
    activateDot(current);
    transitionSlide();
    displayCaptionSlide(current);
  });

  //prev Slide
  arrowLeft.addEventListener("click", () => {
    current == 0 ? (current = maxSLide) : current--;
    gotoSlide(current);
    activateDot(current);
    transitionSlide();
    displayCaptionSlide(current);
  });

  //create dot
  slides.forEach((_, inx) => {
    const dotEl = `<span class="dot" data-slide="${inx}"></span>`;
    dotsEl.insertAdjacentHTML("beforeend", dotEl);

    activateDot();
  });

  // activate dot
  activateDot(0);
  gotoSlide(0);

  function activateDot(current) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      const dataSlide = dot.getAttribute("data-slide");
      if (dataSlide == current) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
  dotsEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset;
      gotoSlide(slide);
      activateDot(slide);
      displayCaptionSlide(slide);
      transitionSlide();
    }
  });

  // display element caption slide
  displayCaptionSlide(0);
  function displayCaptionSlide(current) {
    slides.forEach((slide, inx) => {
      if (inx == current) {
        slide.querySelector(".caption-slide").classList.add("active");
      } else {
        slide.querySelector(".caption-slide").classList.remove("active");
      }
    });
  }
}
slider();

/////////////////////////////////////////////////////////////////

// position fixed in nav-bar
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const Obs = new IntersectionObserver(
  (entreis, index) => {
    entreis.forEach((entry) => {
      if (!entry.isIntersecting) nav.classList.add("fixed");
      else nav.classList.remove("fixed");
    });
  },
  {
    threshold: "0",
    root: null,
  }
);
Obs.observe(header);

//////////////////////////////////////////////////////////////////////

// show overlay services

const overlayEl = document.querySelector(".overlay-services");
const imgEl = document.querySelector(".overlay-services .img");
const closeBtn = document.querySelector(".close");
const showOverlay = document.querySelectorAll(".services_btn");

showOverlay.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    overlayEl.classList.add("active");
    const imgSrc =
      e.target.parentElement.previousElementSibling.lastElementChild.getAttribute(
        "src"
      );
    imgEl.src = imgSrc;
  });
});

closeBtn.addEventListener("click", () => {
  overlayEl.classList.remove("active");
});

overlayEl.addEventListener("click", function () {
  this.classList.remove("active");
});

////////////////////////////////////////////////////////////////

//show sub text in

const head_text = document.querySelectorAll(".header-text");
head_text.forEach((head) => {
  head.addEventListener("click", () => {
    head.parentElement.classList.toggle("active");
  });
});

//////////////////////////////////////////////////////////////////
function transitiontoSec() {
  const servicesSection = document
    .querySelectorAll(".services .sec")
    .forEach((ser, i) => {
      ser.style.transition = `${(i + 1) * 250}ms`;
    });
  const teamsSection = document
    .querySelectorAll(".teams .sec")
    .forEach((team, i) => {
      team.style.transition = `${(i + 1) * 300}ms`;
    });

  const quesSectionRigth = document
    .querySelectorAll(".right-panel .sec")
    .forEach((panel, i) => {
      panel.style.transition = `${(i + 1) * 300}ms`;
    });
  const quesSectionLeft = document
    .querySelectorAll(".left-panel .sec")
    .forEach((panel, i) => {
      panel.style.transition = `${(i + 1) * 300}ms`;
    });
  const blogSec = document
    .querySelectorAll(".blogs .sec")
    .forEach((panel, i) => {
      panel.style.transition = `${(i + 1) * 300}ms`;
    });
}
transitiontoSec();

// animation with scroll

const sections = document.querySelectorAll(".sec");
const obsSec = new IntersectionObserver(
  (entreis) => {
    entreis.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("animated");
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
  }
);
sections.forEach((sec) => obsSec.observe(sec));
