const btn = document.getElementById('talk-btn');
const text = document.getElementById('respond');

const saludo = ['Hola, como estas?'];
const tiempo = ['Espero este bueno el clima', 'no se mira a ver si esta lloviendo', 'Excelente, para ir a la playa'];
const rap = [
    'El es Diseñador Grafico, diseñador de Interfaz de usuario y experiencia de Usuario, tiene mas de 5 años de experiencia, ademas esta certificado en SEO por Woorank y Google Digital Garage.',
    'El está Certificado en SEO por Woorank, tiene certificaciones en Marketing Digital de Google Digital garage, esta certificado por Free code camp en Front end web development.',
    'El es Front end web developer, Angular Developer, tiene conocimiento de HTML 5, css 3, javascript y typescript, ademas esta tomando cursos para certificarse en Python, ethical hacker e Ionic.'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('talk to mic');
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const trans = event.results[current][0].transcript;
    text.textContent = trans;
    readOutLoud(trans);
}

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'puedes repetir por favor';

    function stSpeech() {
        const eq = document.querySelector('.equalizer');
        eq.classList.add('d-none');
    }

    if (message.includes('hola')) {
        const finalText = saludo[Math.floor(Math.random() * saludo.length)];
        speech.text = finalText;
        if (speech.text) {
            const eq = document.querySelector('.equalizer');
            eq.classList.remove('d-none');
            setTimeout(() => {
                stSpeech();
            }, 2000);
        }
    } else if (message.includes('clima')) {
        const timeText = tiempo[Math.floor(Math.random() * tiempo.length)];
        speech.text = timeText;
        if (speech.text) {
            const eq = document.querySelector('.equalizer');
            eq.classList.remove('d-none');
            setTimeout(() => {
                stSpeech();
            }, 2000);
        }
    } else if (message.includes('experiencia')) {
        const rapText = rap[Math.floor(Math.random() * rap.length)];
        speech.text = rapText;
        text.innerHTML = rapText;
        if (speech.text) {
            const eq = document.querySelector('.equalizer');
            eq.classList.remove('d-none');
            setTimeout(() => {
                stSpeech();
            }, 12000);
        }
    } else if (message.includes('trabajos')) {
        speech.text = 'deme un momento estoy procesando la informacion';
        setTimeout(() => {
            window.location.href = "https://www.raphael.designiumpartner.com/trabajos.html";
        }, 3000);
    } else if (message.includes('gracias')) {
        speech.text = 'Excelente, que puedo hacer por usted ahora.';
        if (speech.text) {
            const eq = document.querySelector('.equalizer');
            eq.classList.remove('d-none');
            setTimeout(() => {
                stSpeech();
            }, 3000);
        }
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}

(function() {
    var animation = document.querySelector('.equalizer');

    function onAnimation(evt) {
        evt.stopPropagation();
    }

    animation.addEventListener('webkitAnimationStart', onAnimation, false);
    animation.addEventListener('webkitAnimationIteration', onAnimation, false);
    animation.addEventListener('animationStart', onAnimation, false);
    animation.addEventListener('animationIteration', onAnimation, false);
}());

// getting the value of switch 

/*
const s = document.getElementById('ck');

s.addEventListener('click', () => {
    const sw = document.getElementById('ck').checked;
    if (sw === true) {
        const bg = document.querySelector('body');
        bg.classList.add('ligth-mode');

        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule('html {height: 100vh !important;}');

    } else {
        const bg = document.querySelector('body');
        bg.classList.remove('ligth-mode');
    }
});
*/

const help = document.getElementById('help');

help.addEventListener('click', () => {
    const el = document.getElementById('help-modal');
    console.log(el);
    el.classList.toggle("d-none");
    el.classList.add("bounceInRight");
});