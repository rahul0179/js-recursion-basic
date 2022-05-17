// for (let i = 1; i < 6; i++) {
//     console.log(i);
// }

function consoleNumber(i) {
    if (i > 20) {
        return;
    }
    console.log(i);
    consoleNumber(i + 3);
}
consoleNumber(0);