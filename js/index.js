/*스와이퍼*/ 
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".best-sellers-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    on: {
      init() {
        updateProgress(this);
      },

      slideChange() {
        updateProgress(this);
      },
    },
  });

  function updateProgress(swiper) {
    const progressFill = document.querySelector(
      ".best-sellers-progress-fill"
    );

    const totalSlides = swiper.slides.length;
    const currentIndex = swiper.activeIndex;

    const barWidth = 100 / totalSlides;
    const moveX = currentIndex * 100;

    progressFill.style.width = `${barWidth}%`;
    progressFill.style.transform = `translateX(${moveX}%)`;
  }
});

/*스크롤 시 헤더 고정*/ 
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  });
});

window.addEventListener("load", () => {
  const bannerTitle = document.querySelector(
    ".banner-title img"
  );

  bannerTitle.classList.add("show");
});


document,addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  let currentIndex = 0;
  let isScrolling = false;
  
  window.addEventListener("wheel", (e) => {
    if (isScrolling) return;
  
    isScrolling = true;
  
    if (e.deltaY > 0) {
      currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
      currentIndex = Math.max(currentIndex - 1, 0);
    }
  
    sections[currentIndex].scrollIntoView({
      behavior: "smooth"
    });
  
    setTimeout(() => {
      isScrolling = false;
    }, 800);
  });
});