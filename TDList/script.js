let myNodeList = document.getElementsByTagName('li');
for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.hidden = true;
  }

}

let list = document.getElementById('mainUl');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
}
}, false);

let add = document.getElementById('add');
add.onclick = () => {
  let li = document.createElement('li');
  let inputValue = document.getElementById('mainInput').value;
  let inputValueTxt = document.createTextNode(inputValue);
  li.appendChild(inputValueTxt);
  if(inputValue == '') {
    alert('This field cannot be empty');
  }else {
    document.getElementById('mainUl').appendChild(li);
  }
} 
