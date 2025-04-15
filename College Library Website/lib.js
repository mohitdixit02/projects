//Default
let temp_array = JSON.parse(localStorage.getItem('book'));
if (temp_array==null){
    temp_array=[]
}
else{
    display();
}

//Triggering Submission
let form = document.getElementById('form');
form.addEventListener('submit', Addtostorage);


//Class for book
class Book {
    constructor(bname, bauthor, btype) {
        this.name = bname;
        this.author = bauthor;
        this.type = btype;
    }
    save() {
        temp_array.push([this.name, this.author, this.type]);
        localStorage.setItem('book', JSON.stringify(temp_array));
    }
}

//Addtostorage function
function Addtostorage(e) {
    e.preventDefault();

    //getting elements from FORM
    let book = document.getElementById('book');
    let author = document.getElementById('author');
    let checked_value = document.querySelector('input[name="type"]:checked')
    if (checked_value == null || book.value == '' || author.value == '') {
        display('error');
        form.reset();
    }
    else {
        let obj_book = new Book(book.value, author.value, checked_value.id);
        obj_book.save();
        form.reset();
        display();
    }
}

//Display Function
function display(value) {
    if (value == 'error') {
            alert('You have missed some fields, Enter all details')}
    else {
        let show = JSON.parse(localStorage.getItem('book'))
        let div_table = document.getElementById('entry');
        let html='';
        div_table.innerHTML=`
        <table id="entry">
    <tr class="heading">
        <th>S.No.</th>
        <th>Name</th>
        <th>Author</th>
        <th>Type</th>
        <th></th>
    </tr>
</table>`
        show.forEach(function (element, index) {
            html +=`<tr>
        <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td><i class="bi bi-trash anm" id="${index}"onclick="Delete(this.id)"></i></td>
    </tr>`
        })
        div_table.innerHTML+= html;
    }
}

function Delete(y){
    let del_array = JSON.parse(localStorage.getItem('book'));
    del_array.splice(y,1);
    temp_array=del_array;
    localStorage.setItem('book',JSON.stringify(del_array));
    display();
}