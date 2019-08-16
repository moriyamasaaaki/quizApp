'use strict';

{
  const question = document.getElementById('question');
  const btn = document.getElementById('btn');
  const choices = document.getElementById('choices');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  var container = document.getElementById('container');
  const start = document.getElementById('start-ctn');
  const resultMes = document.getElementById('result-mes')





  let num = 0;
  let isAnswered;
  let score = 0;


  container.style = 'display: none';
  start.addEventListener('click', () => {
    container.style = 'display: block';
    start.style = 'display: none';
  });

  function shuffle(ques) {
    for (let i = ques.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ques[j], ques[i]] = [ques[i], ques[j]];
    }
    return ques;
  }
  // shuffleを実行した戻り値をquizListにセットする
  const quizList = shuffle([
    {q: '玉蜀黍', c: ['トウモロコシ', 'タマネギ', 'レタス']},
    {q: '陸蓮根', c: ['オクラ', 'レンコン', 'ゴボウ']},
    {q: '竜髭菜', c: ['アスパラガス', 'もやし', 'ホウレンソウ']},
    {q: '檸檬', c: ['レモン', 'ミカン', 'モモ']},
    {q: '章魚', c: ['タコ', 'イカ', 'カレイ']},
    {q: '鰐梨', c: ['アボカド', 'ラフランス', 'ナシ']},
    {q: '西瓜', c: ['スイカ', 'メロン', 'ヘチマ']},
    {q: '豌豆豆', c: ['エンドウ豆', 'いんげん豆', 'ソラ豆']},
    {q: '辣韮', c: ['ラッキョウ', 'ニラ', 'パセリ']},
    {q: '大蒜', c: ['ニンニク', 'ショウガ', 'カブ']},
    {q: '鳳梨', c: ['パイナップル', 'マンゴー', 'パッションフルーツ']},
    {q: '扁桃', c: ['アーモンド', 'ピーナッツ', 'プルーン']},
    {q: '蝸牛', c: ['カタツムリ', 'ダンゴムシ', 'テントウムシ']},
    {q: '馬大頭', c: ['オニヤンマ', 'カバ', 'マムシ']},
    {q: '海鼠', c: ['ナマコ', 'トド', 'ウツボ']},
    {q: '鬱金香', c: ['チューリップ', 'ヒマワリ', 'タンポポ']},
    {q: '橄欖', c: ['オリーブ', 'エノキ', 'シュンギク']},
    {q: '牛蒡', c: ['ゴボウ', 'ジャガイモ', 'とろろ']},
    {q: '海胆', c: ['ウニ', 'ハマグリ', 'シャコ']},
    {q: '蝙蝠', c: ['コウモリ', 'カラス', 'トンビ']},
    {q: '海馬', c: ['トド', 'シャチ', 'セイウチ']},
    {q: '樹懶', c: ['ナマケモノ', 'カブトムシ', 'ラッコ']},
    {q: '鰐', c: ['ワニ', 'カバ', 'サメ']},
    {q: '鼬・鼬鼠', c: ['イタチ', 'レッサーパンダ', 'ハリネズミ']},
    {q: '鰈', c: ['カレイ', 'ヒラメ', 'ワカメ']},
    {q: '柳葉魚', c: ['ししゃも', 'さんま', 'マンボウ']},
    {q: '泥鰌・鰌', c: ['どじょう', 'ナマズ', 'ニシン']},
    {q: '海鷂魚', c: ['エイ', 'ウツボ', 'タツノオトシゴ']},
    {q: '梟', c: ['フクロウ', 'キツツキ', 'はやぶさ']},
    {q: '鸚鵡', c: ['おうむ', 'インコ', 'キジ']},
    {q: '火酒', c: ['ウイスキー', 'ビール', 'ワイン']},
    {q: '牛酪', c: ['バター', 'チーズ', 'ヨーグルト']},
    {q: '乾蒸餅', c: ['ビスケット', 'せんべい', 'モチ']},
    {q: '蒲公英', c: ['タンポポ', 'チューリップ', 'ヒマワリ']},
    {q: '風信子', c: ['ヒヤシンス', 'アジサイ', 'ホウセンカ']},
    {q: '蓬', c: ['ヨモギ', 'ヤシ', 'ノビル']},
    {q: '翻車魚', c: ['マンボウ', 'クルマエビ', 'ナマコ']},
    {q: '蜆', c: ['シジミ', 'アサリ', 'サザエ']},
    {q: '茘枝', c: ['ライチ', 'サクランボ', 'キウイ']},
    {q: '蕃茄', c: ['トマト', 'なす', 'ピーマン']},
    {q: '仙人掌・覇王樹', c: ['サボテン', 'まつ', 'ヒノキ']},
    {q: '牽牛花', c: ['アジサイ', 'カキツバタ', 'イチョウ']},
    {q: '蠍', c: ['サソリ', 'アリ', 'ハエ']},
    {q: '栗鼠', c: ['リス', 'ハムスター', 'ネズミ']},
    {q: '長尾驢', c: ['カンガルー', 'オットセイ', 'ライオン']},
    {q: '家鴨', c: ['あひる', 'しゃも', 'インコ']},
    {q: '鮒', c: ['ふな', 'メダカ', 'はたはた']},
    {q: '鱸', c: ['スズキ', 'シーラカンス', 'ウツボ']},
    {q: '馴鹿', c: ['トナカイ', 'アカシカ', 'ロバ']},
    {q: '木耳', c: ['キクラゲ', 'シメジ', 'まいたけ']},
    {q: '青梗菜', c: ['チンゲンサイ', 'ピーマン', 'ホウレンソウ']},
    {q: '蕪', c: ['カブ', 'セロリ', 'もやし']},
    {q: '甘藷', c: ['サツマイモ', 'リンゴ', 'どんぐり']},
    // {q: '', c: ['', '', '']},
    // {q: '', c: ['', '', '']},
    // {q: '', c: ['', '', '']},
    // {q: '', c: ['', '', '']},
    // {q: '', c: ['', '', '']},






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


    if (num === quizList.length - 44) {
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

    if (num === quizList.length - 44) {
      container.style = 'display: none';
      scoreLabel.textContent = `スコア: ${score} / ${quizList.length - 43}`;
      result.classList.add('show');
    } else {
      num++;
      setQuiz();
    }

    if (score === 10) {
      resultMes.textContent = 'パーフェクトです！！';
    } else if (score > 7) {
      resultMes.textContent = '優秀です！';
    } else if (score > 1) {
      resultMes.textContent = 'もっと頑張りましょう。';
    } else if (score === 0) {
      resultMes.textContent = '０点です...。';
    }
  });
}
