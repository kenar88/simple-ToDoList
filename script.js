let myNodeList = document.getElementsByTagName('li');

let close = document.getElementsByClassName('close');

let list = document.getElementById('mainUl');

let add = document.getElementById('add');

for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}


for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.hidden = true;
  }

}


list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


add.onclick = () => {
  let li = document.createElement('li');
  let inputValue = document.getElementById('mainInput').value;
  let inputValueTxt = document.createTextNode(inputValue);
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  li.appendChild(inputValueTxt);
  if (inputValue == '') {
    alert('This field cannot be empty');
  } else {
    document.getElementById('mainUl').appendChild(li);
  }

  document.getElementById('mainInput').value = '';
  
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.hidden = true;
    }

  }
}
