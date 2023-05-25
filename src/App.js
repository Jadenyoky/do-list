import React from 'react';

const App = () => {
  return (
    <div>
      <h1 className='headPage' onClick={startApp}>
        To Do List ..
      <span className='line'></span>
      </h1>
      <div className='content'>
        <input onChange={akk} type="text" id="inText" placeholder='Write Something To Do ..' />
        <button className='btn-add' onClick={adding}>
          Add
        </button>
      </div>
      <div className='contentNew'>
        <span className='highlight'></span>
      </div>
    </div>
  );
}

export default App;



function div(){
  const contentNew = document.querySelector('.contentNew')
  const div = document.createElement('li')
  const inText = document.querySelector('#inText')

  div.classList.add('divStyle')
  contentNew.appendChild(div)
  div.innerHTML = inText.value

  const btnDelete = document.createElement('button')
  contentNew.appendChild(btnDelete)
  btnDelete.classList.add('delStyle')

  btnDelete.scrollIntoView()

  btnDelete.addEventListener('click', function(){
    div.remove()
    btnDelete.remove()
  })
}

function notWritten(){
  const contentNew = document.querySelector('.contentNew')
  const span = document.createElement('span')

  span.classList.add('spanStyle')
  contentNew.appendChild(span)
  span.innerHTML = 'Not Text Written !!'
}

function adding(){
  const inText = document.querySelector('#inText')

  inText.value !== '' ?
  div() : notWritten()

  inText.value = ''
  
  // if(inText.value === ''){
  //   console.log('not write')
  // } else {
  //   const div = document.createElement('div')
  //   div.classList.add('divStyle')
  //   contentNew.appendChild(div)
  //   div.innerHTML = inText.value

  //   console.log('write')
  // }
}

const akk = (e) =>{
  let y = e.target.value
  console.log(y)
}

function startApp(){
  const headPage = document.querySelector('.headPage')
  const line = document.querySelector('.line')
  const content = document.querySelector('.content')

  headPage.style.height = '10vh'
  headPage.classList.add('headPageClick')
  line.style.display = "none"

  setTimeout(() => {
    content.classList.add('contentShow')
  }, 300);
}