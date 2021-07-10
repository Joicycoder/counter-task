let number = 7;
let count = document.querySelector(".count")
let min = document.querySelector(".subtract")
let max = document.querySelector(".add")
count.innerHTML = number;
console.log(count)
min.addEventListener('click', ()=> {
    if (number <= 50 && number > 0) {
        number--;
        count.innerHTML = number;
    }
})

max.addEventListener('click', ()=> {
    if (number < 50) {
        number++;
        count.innerHTML = number;
    }
})