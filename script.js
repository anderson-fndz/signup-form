const form = document.querySelector('.forms')
const Allinputs = document.querySelectorAll('.input-div')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    Allinputs.forEach(e => {
        let input = e.querySelector('.inputs')
        let messageError = e.querySelector('.text-invalid')

        if(input.value === ''){
            input.classList.add('invalid')
            messageError.style.display = 'block'
        }else{
            input.classList.remove('invalid')
            messageError.style.display = 'none'
        }
    })
})

/*
forms.addEventListener("submit", (event) => {
    event.preventDefault();
    inputs.forEach(e => {
       const input = e.querySelector('.inputs')
        if(input.value === ''){
            input.classList.add('invalid')
        }else{
            input.classList.remove('invalid')
        }
    });
}) */