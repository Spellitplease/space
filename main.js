anime.timeline({loop: false})
.add({
  targets: '.ml15 .word',
  scale: [14,1],
  opacity: [0,1],
  easing: "easeOutCirc",
  duration: 1500,
  delay: (el, i) => 1500 * i
}).add({
  targets: '.ml15',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});



  anime.timeline({loop: false})
  .add({
    targets: '.sat',
    scale: [0.1,2],
    opacity: [1],
    easing: "easeOutExpo",
    duration: 40000,
    delay: (el, i) => 0 * i
  
  });

  
jQuery(document).ready(function(){

    $('.main').hide(0).delay(10000).show(0);
    });
    
 jQuery(document).ready(function(){

      $('#essai').hide(0).delay(5000).show(5000);
    });



const myButton = document.querySelector('#search1');
const imgContainer = document.querySelector('#content1');

myButton.addEventListener('click', () => {
  const API_KEY ='YzL4w4T17cLoLjPhg06eF7WGQVKlhbMCyrVlYEMr';

fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
  .then((response) => {
      if (!response.ok) {
          throw new Error("Erreur HTTP " + response.status);
      }
      return response.json();
  })
  .then((result) => {
      result.photos.forEach((photo) => {
        const imgP = document.createElement("img");
        imgP.src += photo.img_src;
        content1.appendChild(imgP);
      });
  })
  .catch((error) => {
      console.error('Erreur lors de l\'appel API:', error);
  });
});







      
