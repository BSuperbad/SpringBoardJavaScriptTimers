//countdown

function countDown(num) {
    let timer = setInterval(function () {
        num--;
        if (num <= 0) {
            clearInterval(timer);
            console.log('DONE!');
        } else {
            console.log(num)
        }
    }, 1000)
}

//randomGame

function randomGame(num) {
    let counter = 0;
    let timer = setInterval(function () {
        let num = Math.random();
        counter++;
        console.log(num, counter);
        if (num > 0.75) {
            clearInterval(timer);
            console.log('It took ' + counter + ' try/tries!');
        }

    }, 1000)
}