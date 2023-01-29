let soya = document.querySelector('.soya')
let noTodoItems = document.querySelector('.no-todo-items')
let yesTodoItems = document.querySelector('.yes-todo-items')
let noTodoItem = document.querySelector('.no-todo-item')
let yesTodoItem = document.querySelector('.yes-todo-item')
let plus = document.querySelector('.plus')
let forma = document.querySelector('.forma')
let xBtn = document.querySelector('.x-btn')
let sarlavha = document.querySelector('.sarlavha')
let matn = document.querySelector('.matn')
let muddat = document.querySelector('.muddat')
let guruh = document.querySelector('.guruh')
let addBtn = document.querySelector('.add-btn')

let noTask = document.querySelector('.no-text')
let yesTask = document.querySelector('.yes-text')






let noArray = []
let yesArray = []



xBtn.addEventListener('click', ()=> {
    forma.style.display = 'none'
    soya.classList.remove('d-active')
})


plus.addEventListener('click', ()=> {
    forma.style.display = 'flex'
    soya.classList.add('d-active')
})





addBtn.addEventListener('click', ()=> {
    let topshiriq = {
        sarlavha: sarlavha.value,
        matn: matn.value,
        muddat: muddat.value,
        guruh: guruh.value
    }

    noArray.push(topshiriq)

    
    render(noArray)


})


const render = (noArray)=> {

    noTodoItems.innerHTML = ''

    noArray.forEach((vazifa, index)=> {
        noTodoItems.innerHTML += `
            <div class="no-todo-item">
                <div class="todo-icons">
                    <div>${index+1}- task</div>
                    <div>
                         <span class="verify-span" onclick="addTodo(${index})">✔</span> 
                         <span class="udalit-span" onclick="delTodo(${index})">✖</span>
                    </div>
                </div>
                <div class="todo-name">${vazifa.sarlavha}</div>
                <div class="todo-more">${vazifa.matn}</div>
                <div class="todo-bottom">
                    <div class="todo-data">🕓 ${vazifa.muddat}</div>
                    <div class="todo-user">${vazifa.guruh}</div>
                </div>
            </div>
            `
    })
    forma.style.display = 'none'
    soya.classList.remove('d-active')

    sarlavha.value = ''
    matn.value = ''
    muddat.value = ''



}


const delTodo = (index)=> {
      noArray.splice(index, 1)
      render(noArray)
}


const addTodo = (index)=> {
    yesArray.push(noArray[index])
    bajarilgan(yesArray)
    noArray.splice(index, 1)
    render(noArray)
}

const bajarilgan = (yesArray)=> {
    yesTodoItems.innerHTML = ''
    
    yesArray.forEach((vazifa, element)=> {
        yesTodoItems.innerHTML += `
            <div class="yes-todo-item">
                <div class="todo-icons">
                    <div></div>
                    <div onclick="vozvrat(${element})"; style="font-size: 28px; color: #fff; cursor: pointer;">♻</div>
                </div>
                <div class="todo-name">${vazifa.sarlavha}</div>
                <div class="todo-more">${vazifa.matn}</div>
                <div class="todo-bottom">
                    <div class="todo-data">${vazifa.muddat}</div>
                    <div class="todo-user">${vazifa.guruh}</div>
                </div>
            </div>
            `

    })
}


const vozvrat = (index)=> {
     noArray.push(yesArray[index])
     render(noArray)
     yesArray.splice(index, 1)
     bajarilgan(yesArray)
}





noTask.addEventListener('click', ()=> {
    yesTodoItems.style.display = 'none'
    noTodoItems.style.display = 'block'
    noTask.style.borderBottom = `2px solid #000`
    yesTask.style.border = 'unset'
})
yesTask.addEventListener('click', ()=> {
    noTodoItems.style.display = 'none'
    yesTodoItems.style.display = 'block'
    yesTask.style.borderBottom = `2px solid #000`
    noTask.style.border = 'unset'
})
