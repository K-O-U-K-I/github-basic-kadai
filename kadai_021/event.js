const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  console.log('Button clicked');
  setTimeout(() => {
      console.log('2 seconds passed');
      text.textContent = 'ボタンをクリックしました';
  }, 2000);
});


