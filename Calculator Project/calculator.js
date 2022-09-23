//text area
let textarea = document.getElementById('textbox');
let power = document.getElementById('power');
textarea.value = 'POWER OFF...'
let Status = false
power.addEventListener('click', () => {
    Status = !(Status);
    if (Status) {
        textarea.value = '';
    }
    else {
        textarea.value = 'POWER OFF...'
    }
})

//buttons + calculations
let fbutton = document.querySelectorAll('button');
for (element of fbutton) {
    element.addEventListener('click', (e) => {
        //for numbers and functions only
        if (Status) {
            let y = e.target.innerText
            if (!((y == 'B') || (y == 'M') || (y == 'C') || (y == '2nd') || (y == 'x2') || (y == 'x-1') || (y == '=') || (y == '10^x') || (y == 'e^x'))) {
                textarea.value += y
            }
            if (y == 'C') { textarea.value = ''; }
            if (y == 'B') { backspace(); }
            if ((y == 'x2') || (y == 'x-1')) {
                if (y == 'x2') {
                    textarea.value += '^2';
                }
                if (y == 'x-1') {
                    textarea.value += '^-1';
                }
            }
            if (y == '10^x') {
                textarea.value += '10^';
            }
            if (y == 'e^x') {
                textarea.value += 'e^';
            }
            if (y == '=') {
                let tempstr = /\^/
                if (tempstr.test(textarea.value)) {
                    let temp = textarea.value.replace('^', ',');
                    temp = `pow(${temp})`;
                    textarea.value = `Math.${temp}`
                }
                let output = evaluate();
                creatememory(textarea.value, output);
                if (output == undefined) {
                    alert('Enter some operation')
                    textbox.value = '';
                }
                else if(isNaN(output)){
                    textbox.value = 'Wrong data entry !!';
                }
                else {
                    textarea.value = output;
                }
            }
        }
    })
}

//evaluating function
function evaluate() {
    let y = textarea.value;
    y = y.replace('sin', "Math.sin")
    y = y.replace('cos', "Math.cos")
    y = y.replace('tan', "Math.tan")
    y = y.replace('log', "Math.log10")
    y = y.replace('ln', "Math.log")
    y = y.replace('pi', "Math.PI")
    //xroot fn
    let tempstr=/x√/
    if(tempstr.test(y)){
        let w=y.search(tempstr);
        let k1=y.substr(0,w);
        let k2=y.substr(w+2,y.length);
        y=`Math.pow(${k2},${1/k1})`;
    }
    y = y.replace('√', "Math.sqrt");
    y = y.replace('e', "2.718281828")
    y = y.replace('aMath.sin', "Math.asin")
    y = y.replace('aMath.cos', "Math.acos")
    y = y.replace('aMath.tan', "Math.atan")
    y = y.replace('X', "*");
    return eval(y);
}

//backspace function
function backspace() {
    temp = textarea.value
    k = ((temp.length) - 1)
    textarea.value = temp.replace(temp[k], '')
}

//Dau Night Switch
let light = document.getElementById('light')
let dark = document.getElementById('dark')
light.style.display = 'block';
dark.style.display = 'none';
let main = document.getElementById('main');
let Switch = document.getElementById('switch_bttn');
main.style.backgroundColor = "ghostwhite";
let time_flag = 'day';
Switch.addEventListener('click', () => {
    if (time_flag == 'day') {
        light.style.display = 'none';
        dark.style.display = 'block';
        main.style.backgroundColor = 'black';
        time_flag = 'night'
    }
    else {
        light.style.display = 'block';
        dark.style.display = 'none';
        main.style.backgroundColor = 'ghostwhite';
        time_flag = 'day';
    }
})

//Memory Creating Function
let m_array = [];
let resultbox = document.getElementById('memory');
function creatememory(a, r) {
    let powstr = /Math.pow/;
    if (powstr.test(a)) {
        a = a.replace(`Math.pow(`, '');
        a = a.replace(`)`, '');
        a = a.replace(',', '^');
    }
    let time = new Date();
    m_array.push({
        entry: a,
        result: r,
        d: time.getDate(),
        m: time.getMonth() + 1,
        y: time.getFullYear(),
        h: time.getHours(),
        mn: time.getMinutes()
    })
    memory_print(m_array);
}

//Memory Print Function
function memory_print(b) { //b=memory array
    resultbox.innerHTML = ``;
    b.forEach((e, a) => {
        resultbox.innerHTML += `<tr class="mem"><td class="liresult">${e['entry']} = ${e['result']}</td><td class="litime">${e['d']}/${e['m']}/${e['y']},  ${e['h']}:${e['mn']}</td><td class="lidelete"><i class="bi bi-x-circle red_bttn2 mdelete" id="${a}"></i></td></tr>`;
    });

    //deleting function
    let m_del_buttons = document.getElementsByClassName('mdelete');
    for (a of m_del_buttons) {
        a.addEventListener('click', (e) => {
            delete b[e.target.id]
            memory_print(b);
        })
    }
}



//memory calling on website
let Status2 = false
let mbttn = document.getElementById('memory_bttn');
let mdiv = document.getElementById('memory_main');
mdiv.style.display = 'none';
mbttn.addEventListener('click', () => {
    Status2 = !(Status2);
    if (Status2) {
        mdiv.style.display = 'block';
    }
    else {
        mdiv.style.display = 'none';
    }

})

//2nd shift function
let shift = document.getElementById('shift');
let fsin = document.getElementById('s')
let fcos = document.getElementById('c')
let ftan = document.getElementById('t')
let flog = document.getElementById('l10')
let fln = document.getElementById('le')
let sqr = document.getElementById('x2')
let xqr = document.getElementById('x-1')
let shift_flag = false
shift.addEventListener('click', () => {
    shift_flag = !(shift_flag);
    if (shift_flag) {
        fsin.innerText = 'asin';
        fcos.innerText = 'acos';
        ftan.innerText = 'atan';
        flog.innerText = '10^x';
        fln.innerText = 'e^x';
        sqr.innerHTML = '<span style="font-size:18px;">&#8730</span>';
        xqr.innerHTML = '<span style="font-size:18px;">x&#8730</span>';
    }
    else {
        fsin.innerText = 'sin';
        fcos.innerText = 'cos';
        ftan.innerText = 'tan';
        flog.innerText = 'log';
        fln.innerText = 'ln';
        sqr.innerHTML = 'x<sup style="font-size:7px;">2</sup>';
        xqr.innerHTML = 'x<sup style="font-size:7px;">-1</sup>';
    }
})

