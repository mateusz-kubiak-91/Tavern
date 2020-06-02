const weponSkill = document.querySelector('.WS');
const balisticSkill = document.querySelector('.BS');
const strength = document.querySelector('.S');
const toughness = document.querySelector('.T');
const agility = document.querySelector('.AG');
const intelligence = document.querySelector('.INT');
const willPower = document.querySelector('.WP');
const fellowship = document.querySelector('.FEL');
const attack = document.querySelector('.A');
const wounds = document.querySelector('.W');
const strengthBonus = document.querySelector('.SB');
const toughnessBonus = document.querySelector('.TB');
const movement = document.querySelector('.M');
const magic = document.querySelector('.MAG');
const insanityPoint = document.querySelector('.IP');
const fatePoint = document.querySelector('.FP');
const randomBtn = document.querySelector('.run');
const race = document.querySelector('.race');

function randomStatistic() {
    const mn = 1;
    const mxx = 21;
    const res = Math.floor(Math.random() * (mxx-mn) + mn);
    return res;
  }
function randomWFP() {
    const mn = 1;
    const mxx = 11;
    const res = Math.floor(Math.random() * (mxx-mn) + mn);
    return res;
  }

console.log(strength.innerHTML);

randomBtn.addEventListener('click', function (){
    switch (race.value) {
        case 'Dwarf':
            weponSkill.innerHTML = randomStatistic() + 30;
        break;
        case 'Halfling':
            weponSkill.innerHTML = randomStatistic() + 10;
        break;
        default:
            weponSkill.innerHTML = randomStatistic() + 20;
    }
    switch (race.value) {
        case 'Elf':
            balisticSkill.innerHTML = randomStatistic() + 30;
        break;
        case 'Halfling':
            balisticSkill.innerHTML = randomStatistic() + 30;
        break;
        default:
            balisticSkill.innerHTML = randomStatistic() + 20;
    }
    switch (race.value) {
        case 'Halfling':
            strength.innerHTML = randomStatistic() + 10;
        break;
        default:
            strength.innerHTML = randomStatistic() + 20;
    }
    switch (race.value) {
        case 'Halfling':
            toughness.innerHTML = randomStatistic() + 10;
        break;
        case 'Dwarf':
            toughness.innerHTML = randomStatistic() + 30;
        break;
        default:
            toughness.innerHTML = randomStatistic() + 20;
    }
    switch (race.value) {
        case 'Human':
            agility.innerHTML = randomStatistic() + 20;
        break;
        case 'Dwarf':
            agility.innerHTML = randomStatistic() + 10;
        break;
        default:
            agility.innerHTML = randomStatistic() + 30;
    }
    intelligence.innerHTML = randomStatistic() + 20;
    willPower.innerHTML = randomStatistic() + 20;
    switch (race.value) {
        case 'Halfling':
            fellowship.innerHTML = randomStatistic() + 30;
        break;
        case 'Dwarf':
            fellowship.innerHTML = randomStatistic() + 10;
        break;
        default:
            fellowship.innerHTML = randomStatistic() + 20;
    }
    attack.innerHTML = 1;
    switch (race.value) {
        case 'Human':
            if (randomWFP() <= 3) {
                wounds.innerHTML = 10;
            } else if (randomWFP() <= 6 && randomWFP() >= 4) {
                wounds.innerHTML = 11;
            } else if (randomWFP() <= 9 && randomWFP() >= 7) {
                wounds.innerHTML = 12;
            } else if (randomWFP() <= 10) {
                wounds.innerHTML = 13;
            }
        break;
        case 'Elf':
            if (randomWFP() <= 3) {
                wounds.innerHTML = 9;
            } else if (randomWFP() <= 6 && randomWFP() >= 4) {
                wounds.innerHTML = 10;
            } else if (randomWFP() <= 9 && randomWFP() >= 7) {
                wounds.innerHTML = 11;
            } else if (randomWFP() <= 10) {
                wounds.innerHTML = 12;
            }
        break;
        case 'Dwarf':
            if (randomWFP() <= 3) {
                wounds.innerHTML = 11;
            } else if (randomWFP() <= 6 && randomWFP() >= 4) {
                wounds.innerHTML = 12;
            } else if (randomWFP() <= 9 && randomWFP() >= 7) {
                wounds.innerHTML = 13;
            } else if (randomWFP() <= 10) {
                wounds.innerHTML = 14;
            }
        break;
        case 'Halfling':
            if (randomWFP() <= 3) {
                wounds.innerHTML = 8;
            } else if (randomWFP() <= 6 && randomWFP() >= 4) {
                wounds.innerHTML = 9;
            } else if (randomWFP() <= 9 && randomWFP() >= 7) {
                wounds.innerHTML = 10;
            } else if (randomWFP() <= 10) {
                wounds.innerHTML = 11;
            }
        break;
    }
    strengthBonus.innerHTML = strength.innerHTML.charAt(0);
    toughnessBonus.innerHTML = toughness.innerHTML.charAt(0);
    switch (race.value) {
        case 'Human':
            movement.innerHTML = 4;
        break;
        case 'Elf':
            movement.innerHTML = 5;
        break;
        case 'Dwarf':
            movement.innerHTML = 3;
        break;
        case 'Halfling':
            movement.innerHTML = 4;
        break;
    }
    magic.innerHTML = 0;
    insanityPoint.innerHTML = 0;
    fatePoint.innerHTML = 1;
    switch (race.value) {
        case 'Human':
            if (randomWFP() <= 4) {
                fatePoint.innerHTML = 2;
            } else if (randomWFP() <= 7 && randomWFP() >= 5) {
                fatePoint.innerHTML = 3;
            } else if (randomWFP() <= 10 && randomWFP() >= 8) {
                fatePoint.innerHTML = 3;
            }
        break;
        case 'Elf':
            if (randomWFP() <= 4) {
                fatePoint.innerHTML = 1;
            } else if (randomWFP() <= 7 && randomWFP() >= 5) {
                fatePoint.innerHTML = 2;
            } else if (randomWFP() <= 10 && randomWFP() >= 8) {
                fatePoint.innerHTML = 3;
            }
        break;
        case 'Dwarf':
            if (randomWFP() <= 4) {
                fatePoint.innerHTML = 1;
            } else if (randomWFP() <= 7 && randomWFP() >= 5) {
                fatePoint.innerHTML = 2;
            } else if (randomWFP() <= 10 && randomWFP() >= 8) {
                fatePoint.innerHTML = 3;
            }
        break;
        case 'Halfling':
            if (randomWFP() <= 4) {
                fatePoint.innerHTML = 2;
            } else if (randomWFP() <= 7 && randomWFP() >= 5) {
                fatePoint.innerHTML = 2;
            } else if (randomWFP() <= 10 && randomWFP() >= 8) {
                fatePoint.innerHTML = 3;
            }
        break;
    }
});
