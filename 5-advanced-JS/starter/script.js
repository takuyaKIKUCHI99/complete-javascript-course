// 7 IIFE
(function() {
  // 1 Build a function constructor
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  // 2 Create questions
  const question1 = new Question(
    "What is my name?",
    ["Takuya", "Mac", "Tom"],
    0
  );
  const question2 = new Question("How old am I?", [27, 28, 29, 30], 2);
  const question3 = new Question(
    "What is your hobby",
    ["futsal", "soccer", "wine", "movie", "All"],
    4
  );

  // 3 Store questions in array
  const questions = [question1, question2, question3];
  // 10 Keep score
  let score = 0;

  Question.prototype.displayQuestions = function() {
    console.log("-------Quiz Game-------");
    displayScore(score);
    console.log(this.question);
    this.answers.forEach((answer, i) => {
      console.log(`${i + 1}: ${answer}`);
    });
  };

  Question.prototype.checkCorrect = function(response) {
    // 9 Exit from continuous play
    if (response === "exit") return;
    if (response - 1 === this.correctAnswer) {
      console.log(">>> Correct!!");
      score++;
    } else {
      console.log(">>> Wrong. Try again");
    }
    startQuiz(); // Continue
  };

  // 8 Continuous play
  startQuiz(); // Initial start
  function startQuiz() {
    // 4 Display a randomly picked question and the answers
    const randomPick = questions[Math.floor(Math.random() * questions.length)];
    randomPick.displayQuestions();

    // 5 Get user response with prompt
    const response = window.prompt(
      "Please input number for the correct answer"
    );

    // 6 Check if correct or not
    randomPick.checkCorrect(response);
  }

  // 11 Display score
  function displayScore(score) {
    console.log(`<<< Your score is ${score} >>>`);
  }
})();
