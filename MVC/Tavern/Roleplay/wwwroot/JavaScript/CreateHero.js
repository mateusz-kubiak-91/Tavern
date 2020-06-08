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
function randomWoundsFatePoints() {
    const mn = 1;
    const mxx = 11;
    const res = Math.floor(Math.random() * (mxx-mn) + mn);
    return res;
}

function updateHiddenInputs() {
    let mapping = {
        WS: "Wepon_Skill",
        BS: "Ballistic_Skill",
        S: "Strength",
        T: "Toughness",
        AG: "Agility",
        INT: "Intelligence",
        WP: "Will_Power",
        FEL: "Fellowship",
        A: "Attack",
        W: "Wounds",
        SB: "Strength_Bonus",
        TB: "Toughness_Bonus",
        M: "Movement",
        MAG: "Magic",
        IP: "Insanity_Points",
        FP: "Fate_Points",
    }
    let hiddenInputs = document.querySelectorAll('.hidden');
    console.log(hiddenInputs);
    for (let input of hiddenInputs) {
        let className = input.classList[0];
        let newInput = document.createElement('input');
        newInput.type = "hidden";
        newInput.value = input.innerHTML;
        newInput.name = mapping[className];
        input.appendChild(newInput);
    }
};

console.log(strength.innerHTML);

randomBtn.addEventListener('click', function (event) {
    event.preventDefault();
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
            if (randomWoundsFatePoints() <= 3) {
                wounds.innerHTML = 10;
            } else if (randomWoundsFatePoints() <= 6 && randomWoundsFatePoints() >= 4) {
                wounds.innerHTML = 11;
            } else if (randomWoundsFatePoints() <= 9 && randomWoundsFatePoints() >= 7) {
                wounds.innerHTML = 12;
            } else if (randomWoundsFatePoints() <= 10) {
                wounds.innerHTML = 13;
            }
        break;
        case 'Elf':
            if (randomWoundsFatePoints() <= 3) {
                wounds.innerHTML = 9;
            } else if (randomWoundsFatePoints() <= 6 && randomWoundsFatePoints() >= 4) {
                wounds.innerHTML = 10;
            } else if (randomWoundsFatePoints() <= 9 && randomWoundsFatePoints() >= 7) {
                wounds.innerHTML = 11;
            } else if (randomWoundsFatePoints() <= 10) {
                wounds.innerHTML = 12;
            }
        break;
        case 'Dwarf':
            if (randomWoundsFatePoints() <= 3) {
                wounds.innerHTML = 11;
            } else if (randomWoundsFatePoints() <= 6 && randomWoundsFatePoints() >= 4) {
                wounds.innerHTML = 12;
            } else if (randomWoundsFatePoints() <= 9 && randomWoundsFatePoints() >= 7) {
                wounds.innerHTML = 13;
            } else if (randomWoundsFatePoints() <= 10) {
                wounds.innerHTML = 14;
            }
        break;
        case 'Halfling':
            if (randomWoundsFatePoints() <= 3) {
                wounds.innerHTML = 8;
            } else if (randomWoundsFatePoints() <= 6 && randomWoundsFatePoints() >= 4) {
                wounds.innerHTML = 9;
            } else if (randomWoundsFatePoints() <= 9 && randomWoundsFatePoints() >= 7) {
                wounds.innerHTML = 10;
            } else if (randomWoundsFatePoints() <= 10) {
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
            if (randomWoundsFatePoints() <= 4) {
                fatePoint.innerHTML = 2;
            } else if (randomWoundsFatePoints() <= 7 && randomWoundsFatePoints() >= 5) {
                fatePoint.innerHTML = 3;
            } else if (randomWoundsFatePoints() <= 10 && randomWoundsFatePoints() >= 8) {
                fatePoint.innerHTML = 3;
            }
        break;
        case 'Elf':
            if (randomWoundsFatePoints() <= 4) {
                fatePoint.innerHTML = 1;
            } else if (randomWoundsFatePoints() <= 7 && randomWoundsFatePoints() >= 5) {
                fatePoint.innerHTML = 2;
            } else if (randomWoundsFatePoints() <= 10 && randomWoundsFatePoints() >= 8) {
                fatePoint.innerHTML = 3;
            }
        break;
        case 'Dwarf':
            if (randomWoundsFatePoints() <= 4) {
                fatePoint.innerHTML = 1;
            } else if (randomWoundsFatePoints() <= 7 && randomWoundsFatePoints() >= 5) {
                fatePoint.innerHTML = 2;
            } else if (randomWoundsFatePoints() <= 10 && randomWoundsFatePoints() >= 8) {
                fatePoint.innerHTML = 3;
            }
        break;
        case 'Halfling':
            if (randomWoundsFatePoints() <= 4) {
                fatePoint.innerHTML = 2;
            } else if (randomWoundsFatePoints() <= 7 && randomWoundsFatePoints() >= 5) {
                fatePoint.innerHTML = 2;
            } else if (randomWoundsFatePoints() <= 10 && randomWoundsFatePoints() >= 8) {
                fatePoint.innerHTML = 3;
            }
            break;
    }
    updateHiddenInputs();
});
