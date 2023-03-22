
const img =document.getElementById('img');
fetch('https://api.thecatapi.com/v1/images/search')
.then(res =>{}
.then(data => img.src = data[0].url)










// let searchButton1 = document.querySelector('#search1')
// let searchButton2 = document.querySelector('#search2')
// let API_KEY = 'YzL4w4T17cLoLjPhg06eF7WGQVKlhbMCyrVlYEMr';
// let response = '';

// searchButton1.addEventListener('click', ()=>{
// console.log('button pressed')
// sendApiRequest1()
// })



// async function sendApiRequest1(){
//   try {
//     let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
//     let data = await response.json();
//     useApiData1(data);
// } catch (error) {
//     console.error(error);
// }
// console.log(response)

// console.table(response)
// let data = await response.json()
// console.table(data)
// useApiData1(data)
// } 




// function useApiData1(data){

// for(i=0; i<=999; i += 98) {
  

// document.querySelector('#content1').innerHTML += `<img id=${imgApi} src=${data.photos[i].img_src}>`;
// }

//}






      
