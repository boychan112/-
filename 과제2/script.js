function exchange(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let h5 = document.querySelector('h5');
    let val = 0;
    val = a;
    a = b;
    b = val;
    h5.textContent = `a: ${a} b: ${b}`;
    console.dir(h5);
}

let list = [];
function addlist(){
    const arrValue = document.getElementById('arrValue');
    const addSpan = document.querySelector('.addSpanDelate');
    const arrSpan = document.querySelector('#second span');
    const span = document.createElement('span');
    list.push(arrValue.value);
    if(list.length > 3){
        addSpan1(addSpan, span);
    }
    arrSpan.innerHTML = list;
}