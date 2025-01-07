// const div = document.createElement("div");
// div.setAttribute("class","created");
// document.querySelector(".container").append(div);
// div.innerHTML = "Hey I am created <b>by Bimal Dhamlauwha <b>";

// const div = document.createElement("div");
// div.setAttribute("class","created");
// document.querySelector(".container").replaceWith(div);
// div.innerHTML = "Hey I am created <b>by Bimal Dhamlauwha <b>";

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterbegin","<b> Hey I am here where are you </b>");
