const dice = document.querySelector('.form-control');
const rAll = document.querySelector('.result-all');
const leftBottom = document.querySelector('.left-bottom');
const goBtn = document.querySelector('.go');
const modif = document.querySelector('.modificator');
const amount = document.querySelector('.amount');
const test = document.querySelector('.test');
const weponSkill = document.querySelector('.WS');
const ballisticSkill = document.querySelector('.BS');
const strength = document.querySelector('.S');
const toughness = document.querySelector('.T');
const agility = document.querySelector('.AG');
const intelligence = document.querySelector('.INT');
const willPower = document.querySelector('.WP');
const fellowship = document.querySelector('.FEL');
const diceAmount = document.querySelector('.diceAmount');

  function randomAll(mx) {
    const mn = 1;
    const mxx = mx + 1;
    const res = Math.floor(Math.random() * (mxx-mn) + mn);
    return res;
  }

  function throwIt () {
    let fRes = 0;
    
    const opt = +(dice.value);
    const diceAmountVal = +(diceAmount.value);
  
    for (let i=0; i<diceAmountVal; i++) {
      randomResult = randomAll(opt)
      fRes += randomResult;
      console.log(`Dice ${i + 1} value: ${randomResult}`)
    }
    return fRes;
  }

  function newResult (msg, color) {
    const newEl = document.createElement('span');
    newEl.innerText = msg;
    newEl.classList.add('single-result');
    newEl.style.color = color;
    rAll.appendChild(newEl);
    leftBottom.scrollTop = rAll.scrollHeight;
  }

goBtn.addEventListener('click', function() {
  const diceResult = throwIt();
  const modificationValue = modif.value;
  const testType = test.value;
  const okColor = 'green';
  const nokColor = 'red';

  console.log(`Dice Amount: ${diceAmount.value}`)
  console.log(`Modification Value: ${modificationValue}`);
  console.log(`Test Type: ${testType}`);
  console.log(`Dice Result: ${diceResult}`);

  const resultMsg = `Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n ----- \n`;
  let currentColor = 'black';

  switch (test.value) {
    case 'Attack':
      if ((diceResult + parseInt(modificationValue)) <= weponSkill.innerText) {
        console.log('Atak udany');
        currentColor = okColor;
      } else {
        console.log('Atak nie udany');
        currentColor = nokColor;
      }
      newResult(resultMsg, currentColor);
    break;
    case 'Shot':
      if ((diceResult + parseInt(modificationValue)) <= ballisticSkill.innerText) {
        currentColor = okColor;
        console.log('strzał udany');
      } else {
        currentColor = nokColor;
        console.log('strzał nie udany');
      }
      newResult(resultMsg, currentColor);
      break;
    case 'Deffence':
      if ((diceResult + parseInt(modificationValue)) <= weponSkill.innerText) {
        currentColor = okColor;
        console.log('Unik udany');
      } else {
        currentColor = nokColor;
        console.log('Unik nie udany');
      }
      newResult(resultMsg, currentColor);
      break;
    case 'Gossip':
      if ((diceResult + parseInt(modificationValue)) <= willPower.innerText) {
        currentColor = okColor;
        console.log('Plotkowanie udany');
      } else {
        currentColor = nokColor;
        console.log('Plotkowanie nie udany');
      }
      newResult(resultMsg, currentColor);
      break;
    case 'Perceptivity':
      if ((diceResult + parseInt(modificationValue)) <= intelligence.innerText) {
        currentColor = okColor;
        console.log('Spostrzegawczość udany');
      } else {
        currentColor = nokColor;
        console.log('Spostrzegawczość nie udany');
      }
      newResult(resultMsg, currentColor);
      break;
    case 'Intimidation':
      if ((diceResult + parseInt(modificationValue)) <= strength.innerText) {
        currentColor = okColor;
        console.log('Zastraszanie udany');
      } else {
        currentColor = nokColor;
        console.log('Zastraszanie nie udany');
      }
      newResult(resultMsg, currentColor);
      break;
    case 'Drinking God':
      if ((diceResult + parseInt(modificationValue)) <= toughness.innerText) {
        currentColor = okColor;
        console.log('Mocna głowa udany');
      } else {
        currentColor = nokColor;
        console.log('Mocna głowa nie udany');
      }
      newResult(resultMsg, currentColor);
      break;
    case 'Sneaking':
      if ((diceResult + parseInt(modificationValue)) <= agility.innerText) {
        currentColor = okColor;
        console.log('Skradanie się udany');
      } else {
        currentColor = nokColor;
        console.log('Skradanie się nie udany');
      }
      newResult(resultMsg, currentColor);
      break;
    case 'Bargain':
      if ((diceResult + parseInt(modificationValue)) <= fellowship.innerText) {
        currentColor = okColor;
        console.log('Targowanie się udany');
      } else {
        currentColor = nokColor;
        console.log('Targowanie nie udany');
      }
      newResult(resultMsg, currentColor);
      break;
    case 'None':
      {
        console.log('Test');
        newResult(resultMsg, currentColor);
      }
    break;
  }
});