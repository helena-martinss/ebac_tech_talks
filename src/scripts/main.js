AOS.init();

const dataDoEvento = new Date("May 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs= 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / segundosEmMs);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'O evento já aconteceu'
    }
},1000)