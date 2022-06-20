const spent = document.querySelectorAll(".number");
const graph = document.querySelectorAll(".graph");
const day = document.querySelectorAll(".day");

let jReq = new Request ("./data.json");
let numList = [];

fetch(jReq)
.then(req => req.json())
.then(data => {
    // get max amount of the week and its index# for changing bar color
    data.map(item => {
        return numList.push(item.amount);
    })
    let highest = Math.max.apply(null, numList);
    const highestIndex = numList.indexOf(highest);
    graph[highestIndex].style.backgroundColor = "hsl(186, 34%, 60%)";

    // create graph
    for (let i = 0; i < graph.length; i++) {
        spent[i].innerHTML = `$${data[i].amount}`;
        graph[i].style.height = `${data[i].amount * 3}px`;  
        day[i].innerHTML = data[i].day;     
        
        // pop-ups
        graph[i].addEventListener("mouseover", () => {
            spent[i].classList.add("active");
    
            graph[i].addEventListener("mouseout", () => {
                spent[i].classList.remove("active");
            })
        })
    }
})