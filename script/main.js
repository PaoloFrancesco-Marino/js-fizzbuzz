/**
 * Fizz Buzz
 */

var lista = document.getElementById('lista-html');

var message = '';

//  Scrivi un programma che stampi i numeri da 1 a 100
for (var i= 0; i <= 100; i++) {
    
    if ((i % 3 == 0) && (i % 5 == 0)) {
        // per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
        console.log(i + ' FizzBuzz');   
        message += '<li>' + i + ' FizzBuzz</li>';
    } else if (i % 3 == 0) {
        // per i multipli di 3 stampi “Fizz” al posto del numero
        console.log(i + ' Fizz');
        message += '<li>' + ' Fizz</li>';
    } else if (i % 5 == 0) {
        // per i multipli di 5 stampi Buzz. 
        console.log(i + ' Buzz');
        message += '<li>' + i + ' Buzz</li>';
    } else {
        // numeri restanti
        console.log(i);
        message += '<li>'+ i + '</li>';  
    }
}

lista.innerHTML = message;



