function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr;
    if(views < 10000000){
        viewStr = (views / 1000).toFixed(1) + 'K';
    }
    else if(views >= 10000000){
        viewStr = (views / 1000000).toFixed(1) + 'M';
    }
    else{
        viewStr = (views / 1000).toFixed(1) + 'K';
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("How to play guitar | learn guitar", "Dhamlauwha", 5000000, 3, "31:22", "https://yt3.googleusercontent.com/g3daK8cMeVic-C4PJdkNWo17Mtr-t7SHslWlgRQ7CPgsbXLk-RZFWTAwH118dLUfZizJVtsg4o4=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj");