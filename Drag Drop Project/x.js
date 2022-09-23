let box=document.getElementsByClassName('box')
let ibox=document.getElementById('imgbox')

ibox.addEventListener('dragenter',()=>{
    ibox.style.display='none'
})
ibox.addEventListener('dragend',()=>{
    ibox.style.display='block'
})

for(element of box){
    element.addEventListener('drop',(e)=>{
        e.target.append(ibox)
    })
    element.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
}
