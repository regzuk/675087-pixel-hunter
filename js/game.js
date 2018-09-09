import {show} from './util.js';
import QuestionView from './question-view.js';

const DEFAULT_LIVES_COUNT = 3;
const DEFAULT_QUESTIONS_COUNT = 10;

class Image {
  constructor(imgSrc, imgType) {
    this.type = imgType;
    this.imgSrc = imgSrc;
  }
}

class Question {
  constructor(type, img) {
    this.type = type;
    this.img = img;
  }
}

class Answer {
  constructor(isCorrect, time) {
    this.isCorrect = isCorrect;
    this.time = time;
  }
}

const getQuestions = () => {
  const arr = [];
  for (let i = 0; i < DEFAULT_QUESTIONS_COUNT; i++) {
    let type = `normal`;
    let img = [];
    switch (i % 3) {
      case 0:
        img = [{src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`},
          {src: `https://i.imgur.com/DiHM5Zb.jpg`, type: `photo`}];
        break;
      case 1:
        type = `wide`;
        img = [{src: `https://k32.kn3.net/5C7060EC5.jpg`, type: `painting`}];
        break;
      case 2:
        type = `triple`;
        img = [{src: `https://k42.kn3.net/CF42609C8.jpg`, type: `painting`},
          {src: `https://k42.kn3.net/D2F0370D6.jpg`, type: `painting`},
          {src: `http://i.imgur.com/DKR1HtB.jpg`, type: `photo`}];
        break;
    }
    arr.push(new Question(type, img.map((x) => new Image(x.src, x.type))));
  }
  return arr;
};

class Game {
  constructor(user) {
    this.user = user;
    this.lives = DEFAULT_LIVES_COUNT;
    this.currentQuestion = -1;
    this.questions = getQuestions();
    this.answers = [];
    this.userStat = [];

    const game = new QuestionView(this.nextQuestion);
    game.checkAnswer = (answer) => {
      this.answers.push(answer);
      // show(new QuestionView(this.nextQuestion));
      alert('aaa')
    };
    show(game);
  }

  get nextQuestion() {
    this.currentQuestion++;
    return (this.currentQuestion < this.questions.length) ? this.questions[this.currentQuestion] : null;
  }

  showQuestion() {

  }

}

export default Game;
