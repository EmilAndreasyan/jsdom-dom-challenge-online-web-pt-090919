let counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const commentInput = document.getElementById('comment-input')

plus.addEventListener('click', (ev) => {
  let counter = document.getElementById('counter').value;
  ev.target.color = 'red';
})

minus.addEventListener('click', () => {
  counter.value - 1
  counter.appendChild(minus)
})
