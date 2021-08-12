
const main = document.getElementById("main");
let temp = document.getElementById("temp");

let calculation;

const empty = (element) => {
    element.value = 0;
};

document.getElementById("ac").addEventListener("click", () => {
    empty(main)
});


document.querySelectorAll(".number").forEach((element) => {
    element.addEventListener("click", () => {
        main.value += element.value
        main.value = parseInt(main.value)
    });
});

document.getElementById("plus").addEventListener("click", () => {
    calculation = '';
    temp = main.value;
    empty(main)
    calculation = "plus";
});


document.getElementById("minus").addEventListener("click", () => {
    calculation = '';
    temp = main.value;
    empty(main)
    calculation = "minus";
});


document.getElementById("multiply").addEventListener("click", () => {
    calculation = '';
    temp = main.value;
    empty(main)
    calculation = "multiply";
});


document.getElementById("divide").addEventListener("click", () => {
    calculation = '';
    temp = main.value;
    empty(main)
    calculation = "divide";
});


document.getElementById("remainder").addEventListener("click", () => {
    calculation = '';
    temp = main.value;
    empty(main)
    calculation = "remainder";
});

document.getElementById("result").addEventListener("click", () => {
    
    if(calculation === "plus"){ // 덧셈 
        main.value = parseInt(temp) + parseInt(main.value)
    }
    else if(calculation === "minus"){ // 뺄셈
        main.value = parseInt(temp) - parseInt(main.value)
    }
    else if(calculation === "multiply"){ // 곱셈
        main.value = parseInt(temp) * parseInt(main.value)

    }
    else if(calculation === "divide"){ // 나누기
        main.value = parseInt(temp) / parseInt(main.value)
    }
    else if(calculation === "remainder"){ // 퍼센트
        main.value = parseInt(temp) % parseInt(main.value)
    }

});
