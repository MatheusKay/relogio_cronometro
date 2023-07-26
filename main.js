document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id = ${abaAlvo}]`)

            esconderAba()
            aba.classList.add('form-frent--is-active')
        })
    }
})

function esconderAba() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i <tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('form-frent--is-active')
    }
}

const contadorRelogio = setInterval(function() {
    const dataHoje = new Date();
    const timeStampHoje = dataHoje.getTime();

    const horasAtuais = dataHoje.getHours();
    const minutosAtuais = dataHoje.getMinutes();
    const segundosAtuais = dataHoje.getSeconds();
    const mileSegundoAtuais = dataHoje.getMilliseconds();

    const formataHorasAtuais = horasAtuais.toString().padStart(2, "0")
    const formataMinutosAtauais = minutosAtuais.toString().padStart(2, "0")
    const formataSegundosAtuais = segundosAtuais.toString().padStart(2, "0")

    document.getElementById('horas').innerHTML = `${formataHorasAtuais}:`
    document.getElementById('minutos').innerHTML = `${formataMinutosAtauais}:`
    document.getElementById('segundos').innerHTML = `${formataSegundosAtuais}`
}, 1000)

const form = document.getElementById('form')
let calcular;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('calcular').innerHTML = "";

    let anoInput = document.getElementById('numero').value
    let mesInput = document.getElementById('numero2').value
    let diaInput = document.getElementById('numero3').value

    const um = 'Jan'
    const dois = 'Feb'
    const tres = 'Mar'
    const quatro = 'April'
    const cinco = 'May'
    const seis = 'Jun'
    const sete = 'Jul'
    const oito = 'Aug'
    const nove = 'Sep'
    const dez = 'Oct'
    const onze = 'Nov'
    const doze = 'Dec'

    const diasEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    clearInterval(calcular)

    if(document.getElementById('calcular').textContent.trim() === '') {
        if(mesInput == 1){
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${um} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        } else if(mesInput == 2) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${dois} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 3) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${tres} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 4) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${quatro} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 5) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${cinco} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 6) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${seis} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 7) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${sete} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 8) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${oito} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 9) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${nove} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 10) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${dez} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 11) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${onze} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }else if(mesInput == 12) {
            calcular = setInterval(function() {
                const dataCalcular = new Date(`${doze} ${diaInput}, ${anoInput}`)
                const timeStampCalcular = dataCalcular.getTime();
    
                const dataHoje = new Date();
                const timeStampHoje = dataHoje.getTime();
    
                const tempoRestante = timeStampCalcular - timeStampHoje;
    
                const diasRestantes = Math.floor(tempoRestante / diasEmMs)
                const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs)
                const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs)
                const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / 1000)
                
                document.getElementById('calcular').innerHTML = `${diasRestantes}d  ${horasRestantes}h  ${minutosRestantes}m  ${segundosRestantes}s`
            }, 1000)
        }
    } else {
        alert('Por gentileza, coloque os valores para podermos calcular.')
    }

    document.getElementById('numero').value = "";
    document.getElementById('numero2').value = "";
    document.getElementById('numero3').value = "";
})

let cronometro;
let horas = 0;
let minutos = 0;
let segundos = 0;
let mileSegundos = 0;

const cronometroHtml = document.getElementById('cronometro')
const cronometroMile = document.getElementById('mile-segundos')

function atualizarCronometro() {
    mileSegundos += 100
    
    if(mileSegundos >= 1000) {
        mileSegundos = 0
        segundos++

        if(segundos >= 60) {
            segundos = 0;
            minutos++
            
            if(minutos >= 60) {
                minutos = 0;
                horas++
            }
        } 
    }

    const formataHora = horas.toString().padStart(2, '0')
    const formataMinutos = minutos.toString().padStart(2, '0')
    const formataSegundos = segundos.toString().padStart(2, '0')
    const formataMileSegundos = mileSegundos.toString().padStart(3, '0')

    cronometroHtml.innerHTML = `${formataHora}: ${formataMinutos}: ${formataSegundos}`
    cronometroMile.innerHTML = `${formataMileSegundos}`
}

function iniciarCronometro() {
    cronometro = setInterval(atualizarCronometro, 100)
}

function pararCronometro() {
    clearInterval(cronometro)
}

function resetarCronometro() {
    clearInterval(cronometro)
    mileSegundos = 0
    segundos = 0
    minutos = 0
    horas = 0
    
    cronometroHtml.innerHTML = '00: 00: 00';
    cronometroMile.innerHTML = '000';
}