function saleCarousel(elementId) {
  const salePicture = document.getElementById("sales-picture");
  const salePictureSrc = salePicture.src;
  const salePictureAlt = salePicture.alt;
  console.log(salePictureSrc);
  const newPicture = document.getElementById(elementId);
  salePicture.src = newPicture.src;
  salePicture.alt = newPicture.alt;
  newPicture.src = salePictureSrc;
  newPicture.alt = salePictureAlt;
}
