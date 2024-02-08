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

        pessoas.push();
        pessoas.push(personInfo);
        console.log(pessoas);

        const print = document.getElementById("result")
        print.innerHTML = `Name: ${personInfo.name}, Age: ${personInfo.age}, Weight: ${personInfo.weight}, Height: ${personInfo.height}`;
    };
    form.addEventListener("submit", addEvent);
}
run();