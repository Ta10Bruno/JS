let img = document.getElementById( 'img' );
let buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalID = null

let trafficLight = (event) =>{
    stopAutomatic();
    turnOn[event.target.id]();
}

let nextIndex = () => {
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0;
    }
}

let changeColor = () => {
    let colors = ['red','yellow','green']
    let color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

let stopAutomatic = () =>{
    clearInterval (intervalID);
}

let turnOn = {
    'red':      () => img.src = "./imagens-semaforo/vermelho.png",
    'yellow':   () => img.src = "./imagens-semaforo/amarelo.png",
    'green':    () => img.src = "./imagens-semaforo/verde.png",
    'automatic': () => intervalID = setInterval( changeColor, 1000 )
}

buttons.addEventListener('click', trafficLight);