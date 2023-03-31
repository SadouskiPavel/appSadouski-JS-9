//ToDoList++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++!!!!!!!!!!!!!!!!!++++++++++++
"Use strict"

const form = document.querySelector('form');
const input = document.querySelector('.message');
console.log(input)

const div = document.querySelector('.container_event')
console.log(div)

const button = document.querySelector('.button')
console.log(button)



form.addEventListener('submit', function (event) {

    event.preventDefault();
    const taskText = input.value;

    const taskHTML = `<div class="container_checkbox" ><input class="checkbox"  type="checkbox" name="checkbox"><span  class ="event">${taskText}</span></div>`

    div.insertAdjacentHTML('beforeend', taskHTML);

    input.value = ""
    input.focus()

    const even = document.querySelectorAll('.event')

    const checkbox = document.querySelectorAll('.checkbox')


    checkbox.forEach(function (element) {
        element.addEventListener('click', function () {
            for (let i = 0; i <= checkbox.length - 1; i++) {
                if (checkbox[i].checked) {
                    even[i].style.textDecoration = 'line-through';
                    console.log('выбран');
                } else {
                    console.log('Не выбран');
                    even[i].style.textDecoration = 'none';

                }
            }
        })
    })

    even.forEach(function (element) {
        button.addEventListener('click', function () {
            element.remove()

        })

    })





})
