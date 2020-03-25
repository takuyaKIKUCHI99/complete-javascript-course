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

  // 4 Display a randomly picked question and the answers
  const randomPick = questions[Math.floor(Math.random() * questions.length)];

  Question.prototype.displayQuestions = function() {
    console.log(this.question);
    this.answers.forEach((answer, i) => {
      console.log(`${i + 1}: ${answer}`);
    });
  };
  randomPick.displayQuestions();

  // 5 Get user response with prompt
  const response = window.prompt("Please input number for the correct answer");

  // 6 Check if correct or not
  Question.prototype.checkCorrect = function(response) {
    if (response - 1 === this.correctAnswer) {
      console.log("Correct!!");
    } else {
      console.log("Wrong. Try again");
    }
  };
  randomPick.checkCorrect(response);
})();
