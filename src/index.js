import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

// Snapshot
// 在浏览器上看到的任何内容，都是 DOM 被渲染的一瞬间的内容，JS 执行这一刻的内容

// let text = (new Date()).toString();
// let text = 'Hello world';

// const render = () => {
//   document.getElementById('root').innerHTML = '';
  
//   document.getElementById('root').appendChild(input);
//   document.getElementById('root').appendChild(button);
//   document.getElementById('root').appendChild(document.createTextNode(text));
// }

// const input = document.createElement('input');

// const button = document.createElement('button');
// button.appendChild(document.createTextNode('Tick'));
// button.onclick = () => {
//   console.log('Tick');
//   text = input.value;
//   console.log(text);

//   // render();
// }

// render();

// // const Clock = () => (
// //   <div>{(new Date()).toString()}</div>
// // )

ReactDOM.render(<App />, document.getElementById('root'));
