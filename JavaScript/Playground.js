const dice = document.querySelector('.form-control');
const rAll = document.querySelector('.result-all');
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
      fRes += randomAll(opt);
    }
    return fRes;
  }

  function newResult () {
    const throwResult = throwIt();
    const newEl = document.createElement('span');
    
    newEl.innerText = throwResult;
    newEl.classList.add('single-result');
    rAll.appendChild(newEl);
    return throwResult;
  }

goBtn.addEventListener('click', function() {
  const diceResult = newResult();
  const modificationValue = modif.value;
  const testType = test.value;
  const okColor = 'green';
  const nokColor = 'red';
  
  console.log(`Dice Result: ${diceResult}`);
  console.log(`Dice Amount: ${diceAmount.value}`)
  console.log(`Modification Value: ${modificationValue}`);
  console.log(`Test Type: ${testType}`);

  switch (test.value) {
    case 'Attack':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= weponSkill.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('Atak udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('Atak nie udany');
      }
    break;
    case 'Shot':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= ballisticSkill.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('strzał udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('strzał nie udany');
      }
    break;
    case 'Deffence':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= weponSkill.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('Unik udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('Unik nie udany');
      }
    break;
    case 'Gossip':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= willPower.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('Plotkowanie udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('Plotkowanie nie udany');
      }
    break;
    case 'Perceptivity':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= intelligence.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('Spostrzegawczość udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('Spostrzegawczość nie udany');
      }
    break;
    case 'Intimidation':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= strength.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('Zastraszanie udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('Zastraszanie nie udany');
      }
    break;
    case 'Drinking God':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= toughness.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('Mocna głowa udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('Mocna głowa nie udany');
      }
    break;
    case 'Sneaking':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= agility.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('Skradanie się udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('Skradanie się nie udany');
      }
    break;
    case 'Bargain':
      rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
      if ((diceResult + parseInt(modificationValue)) <= fellowship.innerText) {
        document.getElementById('result').style.color = okColor;
        console.log('Targowanie się udany');
      } else {
        document.getElementById('result').style.color = nokColor;
        console.log('Targowanie nie udany');
      }
    break;
    case 'None':
      {
        rAll.innerText = (`Test: ${testType} \n Modificator: ${modificationValue} \n Result: ${diceResult + parseInt(modificationValue)} \n`);
        document.getElementById('result').style.color='black';
        console.log('Test');
      }
    break;
  }
});
