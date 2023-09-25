let head = document.getElementById("head")
let i = 0
head.textContent = i

increase = () => {
    head.textContent = ++i;
}
decrease = () => {
    head.textContent = --i;
}
reset = () => {
    head.style.color = "White"
    i = 0
    head.textContent = i;
}

document.body.addEventListener('keydown',(event)=>{
    if(event.key == 'ArrowRight'){
        increase()
    }
})

document.body.addEventListener('keydown',(event)=>{
    if(event.key == 'ArrowLeft'){
        decrease()
    }
})

document.body.addEventListener('keydown',(event)=>{
    if(event.key == ' ' || event.key == 'ArrowDown'){
        reset()
    }
})