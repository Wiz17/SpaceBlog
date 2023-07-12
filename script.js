window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".nav");
  var scrollPosition = window.scrollY;
  var changeColorPosition = 50; // Scroll position at which to change the color

  if (scrollPosition > changeColorPosition) {
    navbar.style.backgroundColor = "black"; // Change to the desired color
  } else {
    navbar.style.backgroundColor = "transparent"; // Change to the initial color
  }
});
//   var i = 0;
//   var txt = "Welcome to our space blog, where we dive into mysteries and discoveries of the cosmos...";
//   var speed = 50;
//   function typeWriter(){

//   if (i < txt.length) {
//   document.getElementById("about-blog").innerHTML += txt.charAt(i);
//   i++;
//   setTimeout(typeWriter, speed);
//   }
//   }
const sentences = [
  "Welcome to our space blog!!", "Where we dive into mysteries and discoveries of the cosmos...",
  "Use of captivating background image of a starry night sky","& breathtaking view of space with galaxies, stars, and nebulae."
];

const delay = 100; // Delay between each character (in milliseconds)
const typewriter = document.getElementById("about-blog");
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  console.log("HIHIHI");
  const currentSentence = sentences[sentenceIndex];

  if (isDeleting) {
    typewriter.innerHTML = currentSentence.substring(0, charIndex - 1)+'|';
    charIndex--;
  } else {
    typewriter.innerHTML = currentSentence.substring(0, charIndex + 1)+'|';
    charIndex++;
  }

  if (!isDeleting && charIndex === currentSentence.length) {
    isDeleting = true;
    setTimeout(typeWriter, delay * 10);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    sentenceIndex++;
    if (sentenceIndex === sentences.length) {
      sentenceIndex = 0;
    }
    setTimeout(typeWriter, delay*5);
  } else {
    setTimeout(typeWriter, delay);
  }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

//   typeWriter();
