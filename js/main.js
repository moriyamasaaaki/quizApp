'use strict';

{
  const question = document.getElementById('question');
  const btn = document.getElementById('btn');
  const choices = document.getElementById('choices');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  var container = document.getElementById('container');
  var h2 = document.getElementById('h2');


  let num = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }
  // shuffleを実行した戻り値をquizSetにセットする
  const quizList = shuffle([
    {q: '玉蜀黍', c: ['トウモロコシ', 'タマネギ', 'レタス','キャベツ']},
    {q: '陸蓮根', c: ['オクラ', 'レンコン', 'ゴボウ','ダイコン']},
    {q: '竜髭菜', c: ['アスパラガス', 'もやし', 'ホウレンソウ','みょうが']},
    {q: '檸檬', c: ['レモン', 'ミカン', 'モモ','カボス']},
    {q: '章魚', c: ['タコ', 'イカ', 'カレイ','マンボウ']},
    {q: '鰐梨', c: ['アボカド', 'ラフランス', 'ナシ','ドラゴンフルーツ']},
    // {q: '', c: ['協力', '会社', '双眼鏡','賞賛']},
    // {q: '', c: ['協力', '会社', '双眼鏡','賞賛']},

  ]);

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizList[num].c[0]) {
      li.classList.add('correct');
      score++;
    } else  {
      li.classList.add('wrong');
      anser.textContent = `正解は${quizList[num].c[0]}です。`;
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;
    question.textContent = quizList[num].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizList[num].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });


    if (num === quizList.length - 1) {
      btn.textContent = 'スコア';
    }
  }
  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    anser.textContent = '';

    if (num === quizList.length - 1) {
      container.style = 'display: none';
      scoreLabel.textContent = `スコア: ${score} / ${quizList.length}`;
      result.classList.add('show');
    } else {
      num++;
      setQuiz();
    }
  });
}
