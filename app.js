// promises and async


// const demoPromise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('the task is completed')
//     }, 5000)
// })
// demoPromise.then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// })


//  fetch is used to fetch the data from the API

// fetch is an async code


// below api not working - giving error


// fetch('https://type.fit/api/quotes').then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data)
// })




// async function fetchQuotes(){
//     let data =await  fetch('https://type.fit/api/quotes');
//     let quotes = await data.json();
//     let random = Math.floor(Math.random()*quotes.length);
//     let quote = quotes[random];
//     document.getElementById('quote').innerText = quote.text;
//     document.getElementById('author').innerText = quote.author;
// }
// fetchQuotes()






// fetch('https://randomuser.me/api').then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data)
// })



// Assignment - generating random user from randomuser api


// async function fetchRandomUser(){
//     let data = await fetch('https://randomuser.me/api');
//     let randomUser = await data.json();
//     console.log(randomUser);
//     let user = randomUser.results[0];
//     // document.getElementById('name').innerText = randomUser.results[0].name.first
//     // document.getElementById('country').innerText = randomUser.results[0].location.country
//     document.getElementById('name').innerText = user.name.first
//     document.getElementById('country').innerText = user.location.country
//     document.getElementById('api_img').src = user.picture.medium
// }
// fetchRandomUser()



// customized above code some more, for random user



// const apiUrl = 'https://randomuser.me/api';
// let name = document.getElementById('name');
// let country = document.getElementById('country');
// let api_img = document.getElementById('api_img');

// async function fetchRandomUser(){
//     let data = await fetch(apiUrl);
//     let randomUser = await data.json();

//     let user = randomUser.results[0];
//     name.innerText = `${user.name.first} ${user.name.last}`
//     country.innerText = user.location.country
//     api_img.src = user.picture.medium
// }
// fetchRandomUser()


