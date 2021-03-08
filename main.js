const city = async function () {
    let response = await fetch('https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=1&size=30');
    let data = await response.json();

    const div1 = document.getElementById("div1");

    for (let i of city){
        const div = document.createElement("div");
        div.innerHTML = data[i];
        div1.appendChild(div);
    }
};

city();



// city().then(data => console.log(data));