let boxes = document.querySelectorAll(".box");

function getElementColor(){
    let color1 = Math.ceil(Math.random() * 255);
    let color2 = Math.ceil(Math.random() * 255);
    let color3 = Math.ceil(Math.random() * 255);
    return `rgb(${color1}, ${color2}, ${color3})`;
}


function autoRefresh(){
    Array.from(boxes).forEach((e) => {
        e.style.backgroundColor = getElementColor();
        e.style.color = getElementColor();
    })
}

setInterval(autoRefresh,1000)
