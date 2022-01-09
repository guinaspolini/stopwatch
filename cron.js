var mm = 0 
var ss = 0
var tempo = 1000
var cron
var situation = null
function start(){
    if (situation == 'played'){
        return
    }
    situation = 'played'
    cron = setInterval(() => { timer(); }, tempo)
}  



function pause(){
    situation = null
    clearInterval(cron);

}
function reset(){
    clearInterval(cron);
    mm = 0;
    ss = 0;
    document.getElementById('seconds').innerText = '00'
    document.getElementById('minutes').innerText = '00'

}
function timer(){
    ss++
    if (ss==59){
        ss=0
        mm++
        if (mm ==59){
        pause()
        }
    }

var formatMin = ( mm < 10 ? '0' + mm : mm ) 
var formatSec = (ss < 10 ? '0' + ss : ss)
document.getElementById('seconds').innerText = formatSec
document.getElementById('minutes').innerText = formatMin
return formatMin
return formatSec

}