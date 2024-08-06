const url = 'https://669fa4ceb132e2c136fe972e.mockapi.io/api/v1/WashingMachine';
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const succes = document.querySelector("h1")

function Add() {
    const data = {
        Name: inputs[0].value,
        Model: inputs[1].value,
        Price: inputs[2].value,
        Color: inputs[3].value,
        garanty: inputs[4].value,
        Size: inputs[5].value,
        image: inputs[6].value,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        succes.innerText = `Успешно Добавлен`;
        inputs.value = ''
    })

}

button.addEventListener('click', Add);
