document.getElementById('addnote').addEventListener('click',addnote);
let head=JSON.parse(localStorage.getItem('heading'))
let note=JSON.parse(localStorage.getItem('note'));
let datenote=JSON.parse(localStorage.getItem('date'));
if(note==null){
    notesarray=[];
}
else{
    notesarray=note;
    shownote();
}
if(head==null){
    headarray=[];
}
else{
    headarray=head;
    shownote();
}
if(datenote==null){

    datearray=[];
}
else{
    datearray=datenote;
    shownote();
}

function addnote(){
    let textbox=document.getElementById('text');
    let headbox=document.getElementById('heading');
    notesarray.push(textbox.value);
    localStorage.setItem('note',JSON.stringify(notesarray));
    headarray.push(headbox.value);
    localStorage.setItem('head',JSON.stringify(headarray));
    let saved_time= new Date();

    datearray.push(saved_time.getDate() +'/'+(saved_time.getMonth()+1)+'/'+(saved_time.getFullYear())+', '+saved_time.getHours()+':'+ saved_time.getMinutes()+':'+saved_time.getSeconds());
    localStorage.setItem('date',JSON.stringify(datearray));

   shownote();
   textbox.value='';
   headbox.value='';
}
function shownote(){
    let date_write=JSON.parse(localStorage.getItem('date'));
    let head_write=JSON.parse(localStorage.getItem('head'));
    let html='';
    notesarray.forEach(function(element,index){
        html +=`
        <div class="card" style="width: 18rem; margin:7px;">
<div class="card-body">
<div class='box'>
<div id='date'>Note added : ${date_write[index]}</div> 
  <h5 class="Note">${head_write[index]}</h5></div>

  <p class="card-text">${element}</p>

  <a href="#" class="btn btn-primary" onclick="del(this.id)" id="${index}">Delete Note</a> <br>
</div>
</div>
 `
    });
    var addcard=document.getElementById('carddesign');
if(notesarray.length==0){
    addcard.innerHTML='Nothing to show, click on Add note to add something';
}
else{
    addcard.innerHTML=html;
}
}

function del(i){
    notesarray.splice(i,1);
    datearray.splice(i,1);
    headarray.splice(i,1);
    localStorage.setItem('note',JSON.stringify(notesarray))
    localStorage.setItem('date',JSON.stringify(datearray))
    localStorage.setItem('head',JSON.stringify(headarray))
    shownote();
}

document.getElementById('search_text').addEventListener('input',search);
function search(){
    let ival=document.getElementById('search_text').value;
    let cardbody=document.getElementsByClassName('card');
    Array.from(cardbody).forEach(function(element){
        let txt=(element.getElementsByClassName('card-text')[0].innerText);
        console.log(txt);
        if(txt.includes(ival)){
            element.style.display="block";
        }
        else{
            element.style.display='none';
        }
    })
}

