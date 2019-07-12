// Madlib inputs
const verbIn1 = document.getElementById('vInput1');
const nounIn1 = document.getElementById('nInput1');
const adjIn1 = document.getElementById('aInput1');
// Madlib fills
const verbOut1 = document.getElementById('inputV');
const nounOut1 = document.getElementById('inputN');
const adjOut1 = document.getElementById('inputA');
// Final madlib
const finalMadlib = document.getElementById('finalResult');

function makeMadlib() {
    verbOut1.textContent = verbIn1.value;
    nounOut1.textContent = nounIn1.value;
    adjOut1.textContent = adjIn1.value;
    finalMadlib.classList.remove('hidden');
    
}



