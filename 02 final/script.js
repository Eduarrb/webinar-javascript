'use strict';

// document.querySelector('.message').textContent = '✌ Número correcto';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 20;

const numero = Math.trunc(Math.random() * 20) + 1;

let puntaje = 20;

// document.querySelector('.number').textContent = numero;

document.querySelector('.check').addEventListener('click', function(){
    const numInput = document.querySelector('.guess').value;
    // console.log(numInput);

    if(!numInput){
        document.querySelector('.message').textContent = 'No has ingresado ningún número 💥💥';
    }
    else if(numInput == numero){
        document.querySelector('.message').textContent = 'Número correcto ⭐';
        document.querySelector('body').style.backgroundColor = '#30b347';
        document.querySelector('.number').textContent = numero;
    }
    else if(numInput > numero){
        if(puntaje > 1){
            document.querySelector('.message').textContent = 'El número ingresado es muy alto';
            // puntaje = puntaje - 1;
            puntaje--;
            document.querySelector('.score').textContent = puntaje;
        }
        else{
            document.querySelector('.message').textContent = 'Has perdido el juego 😢';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(numInput < numero){
        if(puntaje > 1){
            document.querySelector('.message').textContent = 'El número ingresado es muy bajo';
            // puntaje = puntaje - 1;
            puntaje--;
            document.querySelector('.score').textContent = puntaje;
        }
        else{
            document.querySelector('.message').textContent = 'Has perdido el juego 😢';
            document.querySelector('.score').textContent = 0;
        }
    }
    document.querySelector('.guess').value = '';
});
