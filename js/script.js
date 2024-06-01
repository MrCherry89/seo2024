$(document).ready(function () {
  $(".our-expertise-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".our-expertise .title-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".our-expertise .title-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          dots: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
    $("#header").toggleClass("bg");
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: -1,
  });

  // if ($(".why-us .wrapper").length) {
  //   const windowWidth = window.innerWidth;

  //   if (windowWidth <= 768) {
  //     gsap.to(".why-item .icon1", {
  //       y: "0px",
  //       scrollTrigger: {
  //         y: "120px",
  //         trigger: ".why-us .wrapper",
  //         start: "-50%",
  //         end: "bottom 20%",
  //         scrub: 4,
  //       },
  //     });
  //   } else {
  //     gsap.to(".why-item .icon1", {
  //       y: "0px",
  //       scrollTrigger: {
  //         y: "120px",
  //         trigger: ".why-us .wrapper",
  //         start: "-50%",
  //         end: "bottom 20%",
  //         scrub: 4,
  //       },
  //     });
  //   }
  // }

  if ($(".consult").length) {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      gsap.to(".consult .img2", {
        x: "200px",
        scrollTrigger: {
          x: "-200px",
          trigger: ".consult",
          start: "-20%",
          end: "bottom 20%",
          scrub: 4,
        },
      });
    } else {
      gsap.to(".consult .img2", {
        x: "200px",
        scrollTrigger: {
          x: "-200px",
          trigger: ".consult",
          start: "-20%",
          end: "bottom 20%",
          scrub: 4,
        },
      });
    }
  }

  if ($(".our-cases").length) {
    const windowWidth = window.innerWidth;
    const scrollTriggerConfig = {
      trigger: ".our-cases",
      start: "-10%",
      toggleClass: {
        targets: ".cases-item.item8 .img2",
        className: "my-class",
      }, // Add class here
    };

    gsap.to(".cases-item.item8 .img2", {
      scrollTrigger: scrollTriggerConfig,
    });
  }

  if ($(".our-cases").length) {
    const windowWidth = window.innerWidth;
    const scrollTriggerConfig = {
      trigger: ".our-cases",
      start: "-10%",
      toggleClass: { targets: ".cases-item .img", className: "my-class" }, // Add class here
    };

    gsap.to(".cases-item .img", {
      scrollTrigger: scrollTriggerConfig,
    });
  }

  if ($(".our-cases").length) {
    const windowWidth = window.innerWidth;
    const scrollTriggerConfig = {
      y: 100,
      x: 100,
      trigger: ".our-cases",
      start: "-10%",
      toggleClass: { targets: ".cases-item .img2", className: "my-class" }, // Add class here
    };

    gsap.to(".cases-item .img2", {
      scrollTrigger: scrollTriggerConfig,
    });
  }

  if ($(".why-us .wrapper").length) {
    const windowWidth = window.innerWidth;
    const scrollTriggerConfig = {
      trigger: ".why-us .wrapper",
      start: "-10%",
      toggleClass: { targets: ".why-item .icon1", className: "my-class" }, // Add class here
    };

    gsap.to(".why-item .icon1", {
      scrollTrigger: scrollTriggerConfig,
    });
  }

  if ($(".why-us .wrapper").length) {
    const windowWidth = window.innerWidth;
    const scrollTriggerConfig = {
      trigger: ".why-us .wrapper",
      start: "-10%",
      toggleClass: { targets: ".why-item .icon2", className: "my-class" }, // Add class here
    };

    gsap.to(".why-item .icon2", {
      scrollTrigger: scrollTriggerConfig,
    });
  }

  if ($(".why-us .wrapper").length) {
    const windowWidth = window.innerWidth;
    const scrollTriggerConfig = {
      trigger: ".why-us .wrapper",
      start: "-10%",
      toggleClass: { targets: ".why-item .icon3", className: "my-class" }, // Add class here
    };

    gsap.to(".why-item .icon3", {
      scrollTrigger: scrollTriggerConfig,
    });
  }

  if ($(".cost-promotion").length) {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      gsap.to(".calculate-cost-item #style-img", {
        y: "15%",
        scrollTrigger: {
          y: "-15%",
          trigger: ".cost-promotion",
          start: "-20%",
          end: "bottom 20%",
          scrub: 4,
        },
      });
    } else {
      gsap.to(".calculate-cost-item #style-img", {
        y: "15%",
        scrollTrigger: {
          y: "-15%",
          trigger: ".cost-promotion",
          start: "-20%",
          end: "bottom 20%",
          scrub: 4,
        },
      });
    }
  }

  if ($(".why-us").length) {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      gsap.to(".bg img", {
        x: "30%",
        scrollTrigger: {
          x: "-30%",
          trigger: ".why-us",
          start: "-20%",
          end: "bottom 20%",
          scrub: 4,
        },
      });
    } else {
      gsap.to(".bg img", {
        x: "30%",
        scrollTrigger: {
          x: "-30%",
          trigger: ".why-us",
          start: "-20%",
          end: "bottom 20%",
          scrub: 4,
        },
      });
    }
  }

  if ($(".logos-container").length) {
    const logosContainer = document.querySelector(".logos-container");

    logosContainer.innerHTML += logosContainer.innerHTML;

    function scrollLogos() {
      logosContainer.scrollLeft += 1;

      if (logosContainer.scrollLeft >= logosContainer.scrollWidth / 2) {
        logosContainer.scrollLeft = 0;
      }
    }

    setInterval(scrollLogos, 10);
  }
});
