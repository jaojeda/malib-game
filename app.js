
const imputVerb1 = document.getElementById('verb1')
const imputVerb2 = document.getElementById('verb2')
const imputNoun1 = document.getElementById('noun1')
const imputNoun2 = document.getElementById('noun2')
const imputAdjective1 = document.getElementById('adjective1')

const outputVerb1 = document.getElementById('outverb1')
const outputVerb2 = document.getElementById('outverb2')
const outputNoun1 = document.getElementById('outnoun1')
const outputNoun2 = document.getElementById('outnoun2')
const outputAdjective1 = document.getElementById('outadjective1')


function updateResult() {
    outputVerb1.textContent = imputVerb1.value;
    outputVerb2.textContent = imputVerb2.value;
    outputNoun1.textContent = imputNoun1.value;
    outputNoun2.textContent = imputNoun2.value;
    outputAdjective1.textContent = imputAdjective1.value;

    console.log('Test');
}