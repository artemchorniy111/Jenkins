const fs = require("fs");
const readMe = fs.readFileSync("ABC.txt", "utf8");
const readMe2 = fs.readFileSync("nums.txt", "utf8");
// const arr = []
const masAbc = readMe.split(" "); // розбиваю в масив по пробілу
const masNums = readMe2.split(" "); // розбиваю в масив по пробілу

console.log("Завдання варіанту:");
console.log(masAbc);
console.log(masNums);
console.log("Обрахунок методом Борда: ");
let kilkistA = 0;
let kilkistB = 0;
let kilkistC = 0;

 //Функція виклику борда, де abc - кандидат у формі 'A'/'B'/'C'; ABCC - лічильник голосів
function borda(abc, ABCC){
    let kilkist = 0;
    if(ABCC === 'kilkistA'){
        kilkist = kilkistA;
    }else if(ABCC === 'kilkistB'){
        kilkist = kilkistB;
    }else if(ABCC === 'kilkistC'){
        kilkist = kilkistC;
    }

    if(masAbc[0][0] === abc){
        kilkist += masNums[0] * 3;
    }else if(masAbc[0][1] === abc){
        kilkist += masNums[0] * 2;
    }else if(masAbc[0][2] === abc){
        kilkist += masNums[0] * 1;
    }
    if(masAbc[1][0] === abc){
        kilkist += masNums[1] * 3;
    }else if(masAbc[1][1] === abc){
        kilkist += masNums[1] * 2;
    }else if(masAbc[1][2] === abc){
        kilkist += masNums[1] * 1;
    }
    if(masAbc[2][0] === abc){
        kilkist += masNums[2] * 3;
    }else if(masAbc[2][1] === abc){
        kilkist += masNums[2] * 2;
    }else if(masAbc[2][2] === abc){
        kilkist += masNums[2] * 1;
    }
    if(masAbc[3][0] === abc){
        kilkist += masNums[3] * 3;
    }else if(masAbc[3][1] === abc){
        kilkist += masNums[3] * 2;
    }else if(masAbc[3][2] === abc){
        kilkist += masNums[3] * 1;
    }
    if(masAbc[4][0] === abc){
        kilkist += masNums[4] * 3;
    }else if(masAbc[4][1] === abc){
        kilkist += masNums[4] * 2;
    }else if(masAbc[4][2] === abc){
        kilkist += masNums[4] * 1;
    }

 console.log(kilkist); // console.log - Для виводу в консоль зразу;
 return kilkist; // return для запису даних у нові константи (lastA, lastB, lastC);
    
};
console.log('Кандидат А набирає: ');
const lastA = borda('A', kilkistA);
console.log('Кандидат Б набирає: ');
const lastB = borda('B', kilkistB);
console.log('Кандидат В набирає: ');
const lastC = borda('C', kilkistC);

if(lastA > lastB && lastA > lastC){
    console.log(`Переміг кандидат А з кількістю голосів ${lastA}`);
}else if(lastB > lastA && lastB > lastC){
    console.log(`Переміг кандидат Б з кількістю голосів ${lastB}`);    
}else if(lastC > lastA && lastC > lastB){
    console.log(`Переміг кандидат В з кількістю голосів ${lastC}`);    
}

// Кондорсе

console.log('Метод Кондорсе: ');

let konA = 0;
let konB = 0;
let konC = 0;

function kondorse(abc1, abc2, kon){

    let kondor = 0;
    if(kon === 'konA'){
        kondor = konA;
    }else if(kon === 'konB'){
        kondor = konB;
    }else if(kon === 'konC'){
        kondor = konC;
    }
    
    if(masAbc[0].indexOf(abc1) < masAbc[0].indexOf(abc2)){
        kondor += Number.parseInt(masNums[0]);
    };
    if(masAbc[1].indexOf(abc1) < masAbc[1].indexOf(abc2)){
        kondor += Number.parseInt(masNums[1]);
    };
    if(masAbc[2].indexOf(abc1) < masAbc[2].indexOf(abc2)){
        kondor += Number.parseInt(masNums[2]);
    };
    if(masAbc[3].indexOf(abc1) < masAbc[3].indexOf(abc2)){
        kondor += Number.parseInt(masNums[3]);
    };
    if(masAbc[4].indexOf(abc1) < masAbc[4].indexOf(abc2)){
        kondor += Number.parseInt(masNums[4]);
    };

    // console.log(kondor);
    return kondor;
}
// abc абв

const lastKondorAB = kondorse('A', 'B', konA);
const lastKondorBA = kondorse('B', 'A', konB);
const lastKondorAC = kondorse('A', 'C', konA);
const lastKondorCA = kondorse('C', 'A', konC);
const lastKondorBC = kondorse('B', 'C', konB);
const lastKondorCB = kondorse('C', 'B', konC);

console.log(`Порівняння кандидатів А і Б, де А набрав: ${lastKondorAB} голосів, Б: ${lastKondorBA} голосів`);
console.log(`Порівняння кандидатів А і В, де А набрав: ${lastKondorAC} голосів, В: ${lastKondorCA} голосів`);
console.log(`Порівняння кандидатів Б і В, де Б набрав: ${lastKondorBC} голосів, В: ${lastKondorCB} голосів`);

let maxKondorse = Math.max(lastKondorAB, lastKondorBA, lastKondorAC, lastKondorCA, lastKondorBC, lastKondorCB);

if(lastKondorAB === maxKondorse){
    console.log(`Найбільше голосів набрав кандидат А, кількість голосів = ${maxKondorse}`);
}else if(lastKondorBA === maxKondorse){
    console.log(`Найбільше голосів набрав кандидат Б, кількість голосів = ${maxKondorse}`);
}else if(lastKondorAC === maxKondorse){
    console.log(`Найбільше голосів набрав кандидат А, кількість голосів = ${maxKondorse}`);
}else if(lastKondorCA === maxKondorse){
    console.log(`Найбільше голосів набрав кандидат В, кількість голосів = ${maxKondorse}`);
}else if(lastKondorBC === maxKondorse){
    console.log(`Найбільше голосів набрав кандидат Б, кількість голосів = ${maxKondorse}`);
}else if(lastKondorCB === maxKondorse){
    console.log(`Найбільше голосів набрав кандидат В, кількість голосів = ${maxKondorse}`);
}


