let button = document.querySelector(".button")
let div = document.createElement("div");
document.body.append(div);

let img = document.createElement("img");
let title = document.createElement("p");
div.append(title);
div.append(img);




const url = 'https://www.omdbapi.com/?s=spring&apikey=841a117d&page=1';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.Search[3]);
    button.onclick = function() {
        let res = randomInteger(0, 10);
        img.setAttribute("src", data.Search[res].Poster);
        title.innerHTML = "<strong>" + data.Search[res].Title + "</strong>";
    }
}
getData();
  
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


      