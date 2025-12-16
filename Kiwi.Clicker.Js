let countEl = document.getElementById("count-el");
let Sonbtn = document.getElementById("son-btn");

let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent = count;
}
Sonbtn.addEventListener("click", increment);


function upgrade() {
    if (count >= 10) {
        count = count - 10;
        countEl.textContent = count;
        setInterval(() => {
            count = count + 1;
            countEl.textContent = count;
        }, 1000);
    }
}
//put interval or timeout in if(count>=100 or whatever number is)
Sonbtn.addEventListener("click", upgrade);

function upgrade2() {
    if (count >= 1000) {
        count = count - 1000;
        countEl.textContent = count;
            setInterval(() => {

        count = count + 1000;
        countEl.textContent = count;
    }, 10000);
  }
}
function upgrade3() {
  if (count >= 100000) {
        count = count - 100000;
        countEl.textContent = count;
            setInterval(() => {

        count = count * 167000;
        countEl.textContent = count;
    }, 1);
  }
}
Sonbtn.addEventListener("click", upgrade3)   
