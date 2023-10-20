
const targetDate = new Date('2023-12-08 00:00:00').getTime();
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('meses').innerHTML = months
    document.getElementById('dias').innerHTML = days
    document.getElementById('horas').innerHTML = hours < 10 ? '0'+hours : hours;
    document.getElementById('minutos').innerHTML = minutes < 10 ? '0'+minutes : minutes;
    document.getElementById('segundos').innerHTML = seconds < 10 ? '0'+seconds : seconds;

    if (timeRemaining <= 0) {
        countdownElement.innerHTML = 'Tempo esgotado!';
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#anchor").offset().top
    });
});

function ConfirmarPresenca(){
    const Full_name = document.getElementById('Full_name').value;
    if(Full_name){
        const token = "6451367922:AAHkpC3tCzo1G1vwiQhmfMlTWh3ydoY0gWQ"

        const chat_id = "6411144351"

        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${Full_name}`

        let api = new XMLHttpRequest()
        api.open("get", url, true)
        api.send()
        Full_name.value = 'teste'
        document.getElementById('DivConfirmacao').classList.remove('enviado')
        $('#DivConfirmacao').html('Presença confirmada com sucesso!!!');
    }
    else{
        $('#DivConfirmacao').html('Por favor, preencha seu nome.');
    }
}