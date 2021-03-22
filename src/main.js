// const queryString = require('query-string');
let pagina = 1;
let start =  ( (pagina - 1) * 30) + 1;

console.log(location.search);

// const parsed = queryString.parse(location.search);
// console.log(parsed);


const div1 = document.getElementById("div1");
const back = document.getElementById("back");
back.href = `index.html?p=${pagina - 1}`;
const next = document.getElementById("next");
next.href = `index.html?p=${pagina + 1}`;

const city = async function () {
    let response = await fetch( `https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=${start}&size=30`);
    return response.json();
};
city().then((data)=> loop(data));

function loop(data) {
    for (let i of data){
        const div = document.createElement("div");
        div.innerHTML = i.name;
        div1.appendChild(div);
    }
}

// city().then(data => console.log(data));