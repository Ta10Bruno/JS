let ligar = document.getElementById( 'turnOn');
let  desligar = document.getElementById('turnOff');
let lampada = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if( !isLampBroken() ){
        lamp.src = './imagens-lampada/ligada.jpg'
    }
    
}

function lampOff(){
    if( !isLampBroken() ){
        lamp.src = './imagens-lampada/desligada.jpg'
    }
}

function lampBroken(){
    lamp.src = './imagens-lampada/quebrada.jpg'
}




ligar.addEventListener('click', lampOn);
desligar.addEventListener('click',lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick',lampBroken);
