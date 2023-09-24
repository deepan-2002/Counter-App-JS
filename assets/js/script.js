let head = document.getElementById("head")
let i = 0
head.textContent = i

increase = () => {
    head.textContent = ++i;
    head.style.color = "#00b530"
}
decrease = () => {
    head.textContent = --i;
    head.style.color = "#ff0000"
}
reset = () => {
    head.style.color = "White"
    i = 0
    head.textContent = i;
}