let countEl = document.getElementById("count-el");
let Sonbtn = document.getElementById("son-btn");

let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent = count;
}


//function upgrade() {
//count = count * 1.03;
//countEl.textContent = count;
//}
//Sonbtn.addEventListener("click", increment);


// function upgrade() {
//     count = count * 1.03;
//     countEl.textContent = count;
// }

// Call displayTime every 1000 milliseconds (1 second)
// const intervalId = setInterval(countEl, 1000);


// // To stop the repetition after some time (e.g., 5 seconds)
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped.");
// }, 5000);

function upgrade(event) {
    // setTimeout(() => {
    //     count = count * 1.03;
    //     countEl.textContent = count;
    // }, 500);
    if (count >= 10) {
        count = count - 10;
        countEl.textContent = count;
    }
    setInterval(() => {
        count = count + 1;
        countEl.textContent = count;
    }, 1000);


}
Sonbtn.addEventListener("click",upgrade);

function upgrade2(event) {
    // setTimeout(() => {
    //     count = count * 1.03;
    //     countEl.textContent = count;
    // }, 500);
    if (count >= 1000) {
        count = count - 1000;
        countEl.textContent = count;
    }
    setInterval(() => {

        count = count + 1000;
        countEl.textContent = count;
    }, 10000);


}
function upgrade3(event) {

    if (count >= 10000) {
        count = count - 10000;
        countEl.textContent = count;
    }
    setInterval(() => {

        count = count * 167000;
        countEl.textContent = count;
    }, 1);


}
Sonbtn.addEventListener("click", upgrade3)   