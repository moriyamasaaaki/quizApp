'use strict';

{
  const question = document.getElementById('question');
  const btn = document.getElementById('btn');
  const choices = document.getElementById('choices');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  var container = document.getElementById('container');
  const start = document.getElementById('start-ctn');



  let num = 0;
  let isAnswered;
  let score = 0;


  container.style = 'display: none';
  start.addEventListener('click', () => {
    container.style = 'display: block';
    start.style = 'display: none';
  });

  function shuffle(arr) {
    for (let i = arr.length - 1; i < 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }
  // shuffleを実行した戻り値をquizSetにセットする
  const quizList = shuffle([
    {q: '玉蜀黍', c: ['トウモロコシ', 'タマネギ', 'レタス']},
    {q: '陸蓮根', c: ['オクラ', 'レンコン', 'ゴボウ']},
    {q: '竜髭菜', c: ['アスパラガス', 'もやし', 'ホウレンソウ']},
    {q: '檸檬', c: ['レモン', 'ミカン', 'モモ']},
    {q: '章魚', c: ['タコ', 'イカ', 'カレイ']},
    {q: '鰐梨', c: ['アボカド', 'ラフランス', 'ナシ']},
    // {q: '金剛石', c: ['ダイヤモンド', 'パール', 'プラチナ']},
    // {q: '烏賊', c: ['イカ', 'カモメ', 'バッタ']},
    {q: '西瓜', c: ['スイカ', 'メロン', 'ヘチマ']},
    {q: '豌豆豆', c: ['エンドウ豆', 'いんげん豆', 'ソラ豆']},
    {q: '辣韮', c: ['ラッキョウ', 'ニラ', 'パセリ']},
    {q: '大蒜', c: ['ニンニク', 'ショウガ', 'カブ']},

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
      anser.textContent = `正解は...${quizList[num].c[0]}です。`;
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;
    question.textContent = `問題:　${quizList[num].q}`;

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
