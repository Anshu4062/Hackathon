const section2 = document.querySelector("#section2");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: section2,
    start: "top 20%",
    end: "bottom -700%",
    scrub: true,
    pin: true,
  },
  duration: 2,
});

// Add animations to the timeline
tl.to(".center-img", { scale: 0 })
  .to(".row-left", { x: "+=300", stagger: 0.1 }, "<") // Start at the same time as the previous animation
  .to(".row-right", { x: "-=300", stagger: 0.1 }, "<"); // Start at the same time as the previous animation
