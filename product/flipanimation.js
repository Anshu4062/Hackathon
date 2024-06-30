function moveBox() {
    // Get the elements with class name 'box2'
    var elements = document.getElementsByClassName('box2');
    // Check if elements exist
    if (elements.length > 0) {
      // Change the left property of the first element with class name 'box2'
      elements[0].style.left = '300px';
    }
  }


gsap.from(".box1", {
    delay: 2,
    duration: 1,
    x: 580,
    y: 200
})
gsap.from(".box2", {
    delay: 2,
    duration: 1,
    x: 280,
    y: 200
    //, onComplete: moveYTo300
})
gsap.from(".box3", {
  delay: 2,
  duration: 1,
  x: -20,
  y: 200,
  //, onComplete: moveYTo300
})

gsap.from(".box4", {
  delay: 2,
  duration: 1,
  x: -320,
  y: 200
  //, onComplete: moveYTo300
})

gsap.from(".box5", {
  delay: 2,
  duration: 1,
  x: -620,
  y: 200
  //, onComplete: moveYTo300
})

gsap.from(".box6", {
  delay: 2,
  duration: 1,
  x: 580,
  y: -200
  //, onComplete: moveYTo300
})

gsap.from(".box7", {
  delay: 2,
  duration: 1,
  x: 280,
  y: -200
  //, onComplete: moveYTo300
})

gsap.from(".box8", {
  delay: 2,
  duration: 1,
  x: -20,
  y: -200
  //, onComplete: moveYTo300
})
