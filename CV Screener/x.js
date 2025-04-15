const people = [
    {
        name: 'Varun',
        age: 31,
        work: 'Coder',
        experience: 2,
        Image: 'https://randomuser.me/api/portraits/men/46.jpg'
    },
    {
        name: 'Kunal',
        age: 27,
        work: 'WebD',
        experience: 3,
        Image: 'https://randomuser.me/api/portraits/men/64.jpg'
    },
    {
        name: 'Kavy',
        age: 41,
        work: 'AppD',
        experience: 2,
        Image: 'https://randomuser.me/api/portraits/women/34.jpg'
    },
    {
        name: 'Avina',
        age: 34,
        work: 'Coder',
        experience: 4,
        Image: 'https://randomuser.me/api/portraits/women/31.jpg'
    },
    {
        name: 'Haris',
        age: 32,
        work: 'DSA',
        experience: 1,
        Image: 'https://randomuser.me/api/portraits/men/29.jpg'
    }, {
        name: 'Morisa',
        age: 24,
        work: 'DSA',
        experience: 0,
        Image: 'https://randomuser.me/api/portraits/women/21.jpg'
    },
    {
        name: 'Kefi',
        age: 35,
        work: 'Coder',
        experience: 2,
        Image: 'https://randomuser.me/api/portraits/women/74.jpg'
    },
    {
        name: 'Anaiya',
        age: 27,
        work: 'AppD',
        experience: 2,
        Image: 'https://randomuser.me/api/portraits/women/35.jpg'
    },
    {
        name: 'Leomni',
        age: 28,
        work: 'Coder',
        experience: 4,
        Image: 'https://randomuser.me/api/portraits/women/18.jpg'
    },
    {
        name: 'Khaima',
        age: 35,
        work: 'DSA',
        experience: 1,
        Image: 'https://randomuser.me/api/portraits/women/42.jpg'
    }, 
    {
        name: 'Naveen',
        age: 29,
        work: 'DSA',
        experience: 0,
        Image: 'https://randomuser.me/api/portraits/men/20.jpg'
    }
]
function cvcaller(a){
    let index = 0;
    let flag
    return {
        next: function () {
            if(index==a.length){
                index=index-1;
                flag=true;
            }
            if(index==-1){
                index=index+2;
                flag=true;
            }
            else if(flag==false){
                index=index+2;
                flag=true;
            }
            if (index < a.length) {
                console.log(index)
                flag=true;
                return {
                    obj: a[index++],
                    done: false
                }
            }
            else {
                index=(a.length-1);
            }
        },
        back: function () {
            if(index==a.length){
                index=index-2;
                flag=false;
            }
            if(flag==true){
                index=index-2;
                flag=false
            }
            if(index==-1){
                index=0
            }

            if (index >=0) {
                console.log(index)
                flag=false
                return {
                    obj: a[index--],
                    done: false
                }
            }
            else {
               index=0;
            }}
    }
}
let cv = cvcaller(people);
let Name = document.getElementById('name')
let age = document.getElementById('age')
let work = document.getElementById('work')
let exp = document.getElementById('exp')
let img = document.getElementById('img')
movenext();
let next_bttn = document.getElementById('next');
next_bttn.addEventListener('click',movenext);
let back_bttn = document.getElementById('back');
back_bttn.addEventListener('click',moveback);

function movenext() {
    let temp_array=cv.next()['obj']
    Name.innerText = `${temp_array.name}`
    age.innerText = `${temp_array.age}`
    work.innerText = `${temp_array.work}`
    exp.innerText = `${temp_array.experience}`
    img.innerHTML = `<img src="${temp_array.Image}" alt="">`
}
function moveback() {
    let temp_array=cv.back()['obj']
    Name.innerText = `${temp_array.name}`
    age.innerText = `${temp_array.age}`
    work.innerText = `${temp_array.work}`
    exp.innerText = `${temp_array.experience}`
    img.innerHTML = `<img src="${temp_array.Image}" alt="">`
}
