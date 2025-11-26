const xValueElement = document.querySelector("#xValue");
const yValueElement = document.querySelector("#yValue");
const iterationElement = document.querySelector("#Iteration");


const formX = (x, y) => {
    return (Math.sin(x + y) + 0.1) / 1.5;
}

const formY = (x, y) => {
    return Math.sqrt(1 - x**2);
}

const detector = (curX, curY, nextX, nextY) => {
    if ( E > Math.max( Math.abs(curX - nextX), Math.abs(curY - nextY))) {
        return false;
    }
    return true;
}

const E = 0.0001;
let iteration = 0;

const yakobiMethod = () => {
    let curX = 1;
    let curY = -1;

    let nextX = formX(curX, curY);
    let nextY = formY(curX, curY);

    while(detector(curX, curY, nextX, nextY)) {
        
        curX = nextX;
        curY = nextY;

        nextX = formX(curX, curY);
        nextY = formY(curX, curY);
        
        iteration++;
    }

    console.log(nextX);
    console.log(nextY);
    console.log(iteration);

    xValueElement.textContent = `x ≈ ${nextX}`;
    yValueElement.textContent = `y ≈ ${nextY}`;
    iterationElement.textContent = `Iteration = ${iteration}`;
} 

yakobiMethod();