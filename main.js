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
  //&lt;![CDATA[


    
    //]]&gt;
  
    anime.timeline({loop: false})
    .add({
      targets: '.sat',
      scale: [0.1,2],
      opacity: [1],
      easing: "easeOutExpo",
      duration: 40000,
      delay: (el, i) => 0 * i
    
    });
    //&lt;![CDATA[
    
    jQuery(document).ready(function(){

      $('.main').hide(0).delay(10000).show(0);
      });
      
   jQuery(document).ready(function(){

        $('#essai').hide(0).delay(5000).show(5000);
      });

let searchButton1 = document.querySelector('#search1')
let searchButton2 = document.querySelector('#search2')
let API_KEY = 'YzL4w4T17cLoLjPhg06eF7WGQVKlhbMCyrVlYEMr';
let response = '';

searchButton1.addEventListener('click', ()=>{
console.log('button pressed')
sendApiRequest1()
})



async function sendApiRequest1(){
  try {
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
    let data = await response.json();
    useApiData1(data);
} catch (error) {
    console.error(error);
}
console.log(response)

console.table(response)
let data = await response.json()
console.table(data)
useApiData1(data)
} 




function useApiData1(data){

for(i=0; i<=999; i += 98) {
  

document.querySelector('#content1').innerHTML += `<img id=${imgApi} src=${data.photos[i].img_src}>`;
}

}






      
