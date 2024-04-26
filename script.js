// gsap.to("#box1", {
//   x: 1200,
//   delay: 1,
//   duration: 2,
// });

// gsap.to("#box2", {
//   x: 500,
//   y: 500,
//   delay: 1,
//   duration: 2,
// });

// gsap.to("#box1", {
//   x: 1200,
//   delay: 1,
//   duration: 2,
//   rotate: 20,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: 2,
// });

// gsap.from("#box2", {
//   x: 500,
//   y: 500,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });

// gsap.from("h1", {
//   y: 20,
//   opacity: 0,
//   duration: 2,
//   delay: 1,
//   // stagger: -1,   -> ulta chalega isse
//   stagger: 0.3,
// });

// gsap.to("#box", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 60,
//   // repeat: 1, // -> ek bar to chelga phir kyunki repeat 1 hai to ek bar aur chalega means total 2 bar chalega
//   repeat: -1, // infinite repeat
//   yoyo: true,
// });

// TIMELINE

// gsap.to("#box1", {
//   x: 1000,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 1000,
//   backgroundColor: "blue",
//   duration: 1.5,
//   delay: 2.5,
// });

// gsap.to("#box3", {
//   x: 1000,
//   scale: 0.5,
//   borderRadius: "50%",
//   duration: 1.5,
//   delay: 4,
// });

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1000,
  rotate: 360,
  duration: 1.5,
  delay: 1,
})
  .from("#box2", {
    x: 1000,
    backgroundColor: "blue",
    duration: 1.5,
  })
  .to("#box3", {
    x: 1000,
    scale: 0.5,
    borderRadius: "50%",
    duration: 1.5,
  });

var tl2 = gsap.timeline();

tl2
  .from("h2", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  })
  .from("h4", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  })
  .from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    // scale: 0.2,
  });
