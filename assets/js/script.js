let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 10, { y: -10 })
  .to(".girl", 10, { x: "+=610", y: "-=100" }, "-=10")
  .to(".man", 10, { x: "-=610", y: "+=130" }, "-=10")
  .to(".tree", 10, { y: -400 }, "-=10")
  .fromTo(".bg1", { y: -40 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { bottom: "0%" }, "-=10")
  .to('.bg1', {height: '100vh'})
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);