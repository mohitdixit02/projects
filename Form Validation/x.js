let Name = document.getElementById('name')
let addr = document.getElementById('address')
let pin = document.getElementById('pin')
let mobile = document.getElementById('mobile')
let submit = document.getElementById('submit')

Name.addEventListener('blur', () => {
    let check = /^[A-Z]([a-z]){2,11}$/
    str = Name.value
    let alpha = document.getElementById('nameerror')
    if (!check.test(str) && Name.value != '') {
        Name.className = 'error_box'
        alpha.innerHTML = `Make sure your first letter is capital, Name must contain upto 12 alphabets only, not other character.`
    }
    else {
        Name.className = 'text_box'
        alpha.innerHTML = ``
    }
})

addr.addEventListener('blur', () => {
    let check = /^([a-zA-z0-9@._]){0,50}$/
    str = addr.value
    let alpha = document.getElementById('addrerror')
    if (!check.test(str) && addr.value != '') {
        addr.className = 'error_box'
        alpha.innerHTML = `Use only alphabets, numbers, '@' or '.' symbol for email.`
    }
    else {
        addr.className = 'text_box'
        alpha.innerHTML = ``
    }
})

pin.addEventListener('blur', () => {
    let check = /^([0-9]){6}$/
    str = pin.value
    let alpha = document.getElementById('pinerror')
    if (!check.test(str) && pin.value != '') {
        pin.className = 'error_box'
        alpha.innerHTML = `Pin must be a 6 digits number.`
    }
    else {
        pin.className = 'text_box'
        alpha.innerHTML = ``
    }
})

mobile.addEventListener('blur', () => {
    let check = /^([0-9]){10}$/
    str = mobile.value
    let alpha = document.getElementById('noerror')
    if (!check.test(str) && mobile.value != '') {
        mobile.className = 'error_box'
        alpha.innerHTML = `Mobile Number must be of 10 digits.`
    }
    else {
        mobile.className = 'text_box'
        alpha.innerHTML = ``
    }
})

submit.addEventListener('click', (e => {
    e.preventDefault()
    let div_array = document.getElementsByClassName('error_box')
    if(div_array.length>0){
        alert('There is error in some field')
        
    }else if(Name.value=='' || addr.value=='' || pin.value=='' || mobile.value==''){
        alert('fill the missing fields. All fields are must')
    }
    else{
        let div_success=document.getElementById('success')
        div_success.innerText=`Your form is submitted successfully..`
        div_success.className='success'
        setTimeout(()=>{
            div_success.innerText=``
            div_success.className=''
        },2000)
        let form=document.getElementById('form');
        form.reset()
    }
}))