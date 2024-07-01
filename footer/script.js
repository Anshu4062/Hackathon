//JS Below 
gsap.from(".fixed_footer", {
	y: -500,
	scrollTrigger: {
	  trigger: ".content",
	  start: "bottom bottom",
	  scrub: true,
	},
});