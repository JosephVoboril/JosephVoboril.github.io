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

function upgrade() {
    // setTimeout(() => {
    //     count = count * 1.03;
    //     countEl.textContent = count;
    // }, 500);
    setInterval(() => {
        count= count +1;
        countEl.textContent = count;
    }, 500);
        count= count-1
        countEl.textContent = count;
}
Sonbtn.addEventListener("click",)   