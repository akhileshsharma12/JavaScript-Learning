
// function printTablesUpTo1000(limit) {

//     for (let j = 1; j <= limit; j++) {
//         console.log(`\nTable of ${j}:\n`); 

//         for (let i = 1; i <= 10; i++) { 
//             console.log(`${j} x ${i} = ${j * i}`);
//         }

//         console.log("--------------------");
//     }
// }

// printTablesUpTo1000(2);

let table = document.getElementById("table");
let output = "";

for(let i = 1; i <= 1000; i ++) {
    for(let j = 1; j <= 10; j ++) {
        output += `<li> ${i} x ${j} = ${i * j} </li>`;
    }
}

table.innerHTML = output;