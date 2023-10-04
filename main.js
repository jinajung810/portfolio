const divs = document.querySelectorAll('.movie-box, .glitter-bottle, .monthly-todo, .da2ating');

// 각 div를 클릭할 때의 이벤트 처리
divs.forEach((div) => {
  div.addEventListener('click', () => {
    div.classList.toggle('active');
  });
});
