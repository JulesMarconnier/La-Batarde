const images = [
  "../assets/images/carroussel-1920x466.1.webp",
  "../assets/images/carroussel-1920x466.2.webp",
  "../assets/images/carroussel-1920x466.4.webp",
];

const imagesDesktop = [
  "../assets/images/carroussel-1920x466.1.webp",
  "../assets/images/carroussel-1920x466.2.webp",
  "../assets/images/carroussel-1920x466.3.webp",
  "../assets/images/carroussel-1920x466.4.webp",
];
let currentIndex = 0;

function changeImage(button) {
  if (window.innerWidth < 1200 && window.innerWidth > 768) {
    const image = document.getElementById("carousel");
    if (button === "prev") {
      if (currentIndex === 0) {
        currentIndex = images.length - 1;
      } else {
        currentIndex = currentIndex - 1;
      }
    } else if (currentIndex === images.length - 1 && button !== "prev") {
      currentIndex = 0;
    } else {
      currentIndex = currentIndex + 1;
    }
    image.src = images[currentIndex];
  } else if (window.innerWidth > 1200) {
    const image = document.getElementById("carouselDesktop");

    if (button === "prev") {
      if (currentIndex === 0) {
        currentIndex = images.length - 1;
      } else {
        currentIndex = currentIndex - 1;
      }
    } else if (currentIndex === imagesDesktop.length - 1 && button !== "prev") {
      currentIndex = 0;
    } else {
      currentIndex = currentIndex + 1;
    }
    image.srcset = imagesDesktop[currentIndex];
  }
}

setInterval(changeImage, 4000);
