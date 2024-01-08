function meuScoop(){
const relogio = document.querySelector(".time-number")
const divTimer= document.querySelector('.time')
const play = document.querySelector(".play")
const pause = document.querySelector(".pausa")
const retorna = document.querySelector(".reiniciar")
let seg25= 1500;
let segundos =0;
let time;
function mostra(){
    time = setInterval(function(){
       
        segundos++
        relogio.innerHTML = HorsMin(seg25-segundos)
        if(segundos === 1500){
            alert("Hora de uma pausa, ok retornara o cronometro")
            segundos = 0;
            seg25= 1500;
        }
        },1000)
        
}
function HorsMin(segundos){
    let date = new Date(segundos *1000)
    let min = date.getUTCMinutes()
    let seg = date.getUTCSeconds()
    return `${min < 10 ? '0' : ''}${min}:${seg < 10 ? '0' : ''}${seg}`;

}
console.log(HorsMin(5))
play.addEventListener('click', function (e){
    clearInterval(time)
    relogio.classList.remove('red')
    relogio.classList.add('blue')
    divTimer.classList.remove('redDiv')
    divTimer.classList.add('blueDiv')
    mostra()
    
})
pause.addEventListener('click', function (e){
    clearInterval(time)
    relogio.classList.add('red')
    relogio.classList.remove('blue')
    divTimer.classList.add('redDiv')
    divTimer.classList.remove('blueDiv')
    
    
})
retorna.addEventListener('click', function (e){
    clearInterval(time)
    relogio.innerHTML= '25:00'
    relogio.classList.remove('red')
    relogio.classList.add('blue')
    divTimer.classList.remove('redDiv')
    divTimer.classList.add('blueDiv')
    
    segundos=0
})
}
meuScoop()