const list = document.querySelector('#todo-list')
const input = document.querySelector('#todo-input')

const addToDo = () => {
    const value = input.value.trim()
    if(value === ''){
        alert('Cannot add empty to-do')
        return
    }
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')
    const p = document.createElement('p')

    li.classList.add('my-2')
    p.classList.add('mx-2')
    checkbox.classList.add('mx-2')
    button.classList.add('btn', 'btn-danger')
    p.innerHTML = value
    button.innerHTML = 'Remove'
    checkbox.type = 'checkbox'

    checkbox.onchange = function(){
        if(this.checked){
            console.log(this.parentElement);
            this.parentElement.firstChild.style.textDecoration = 'line-through'
        } else {
            this.parentElement.firstChild.style.textDecoration = 'none'
        }
    }
    button.onclick = function(){
        this.parentElement.remove()
    }


    li.appendChild(p)
    li.appendChild(checkbox)
    li.appendChild(button)
    list.appendChild(li)
}