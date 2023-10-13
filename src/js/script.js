// Defina a data-alvo da contagem regressiva (ano, mês, dia, hora, minuto, segundo)
const targetDate = new Date('2023-12-08 00:00:00').getTime();

// Função para atualizar o contador
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('meses').innerHTML = months
    document.getElementById('dias').innerHTML =days
    document.getElementById('horas').innerHTML =hours
    document.getElementById('minutos').innerHTML =minutes
    document.getElementById('segundos').innerHTML =seconds

    if (timeRemaining <= 0) {
        countdownElement.innerHTML = 'Tempo esgotado!';
    }
}

// Atualize a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Garanta que a contagem seja atualizada imediatamente na página
updateCountdown();