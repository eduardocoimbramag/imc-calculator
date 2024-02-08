function run() {
    form = document.querySelector(".form");
    result = document.querySelector(".result");

    const pessoas = []

    function addEvent(event) {
        event.preventDefault();
        const name = document.querySelector("#name-box");
        const age = document.querySelector("#age-box");
        const weight = document.querySelector("#weight-box");
        const height = document.querySelector("#height-box");

        const personInfo = {
            name: name.value,
            age: age.value,
            weight: weight.value,
            height: height.value
        }

        pessoas.push(personInfo)

        const imc = personInfo.weight / personInfo.height ** 2

        console.log(imc)

        let msg;

        if (imc > 0 && imc <= 18.5) {
            msg = `Your IMC is ${imc.toFixed(2)}. You are underweight.`
        } else if (imc > 18.5 && imc <= 24.9) {
            msg = `Your IMC is ${imc.toFixed(2)}. You are at the ideal weight, congratulations!`
        } else if (imc > 24.9 && imc <= 29.9) {
            msg = `Your IMC is ${imc.toFixed(2)}. You are slightly overweight.`
        } else if (imc > 29.9 && imc <= 34.9) {
            msg = `Your IMC is ${imc.toFixed(2)}. You have obesity grade 1.`
        } else if (imc > 34.9 && imc <= 39.9) {
            msg = `Your IMC is ${imc.toFixed(2)}. You have obesity grade 2.`
        } else if (imc > 39.9) {
            msg = `Your IMC is ${imc.toFixed(2)}. You have obesity grade 3.`
        }


        console.log(msg)

        const print = document.getElementById("result")
        print.innerHTML = `Hello, ${personInfo.name}. ${msg}`;
    };
    form.addEventListener("submit", addEvent);
}
run();