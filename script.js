var questions = [
    {
      question: "Care este capitala României?",
      answers: [
        "Cluj-Napoca",
        "București",
        "Timișoara"
      ],
      correctAnswer: 1
    },
    {
      question: "Câți ani are Pământul?",
      answers: [
        "4000 de ani",
        "10.000 de ani",
        "4.5 miliarde de ani"
      ],
      correctAnswer: 2
    },
    {
      question: "Ce limbaj de programare este utilizat pentru crearea aplicațiilor mobile?",
      answers: [
        "JavaScript",
        "C++",
        "Java"
      ],
      correctAnswer: 2
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  function showQuestion() {
    var question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("label1").innerHTML = question.answers[0];
    document.getElementById("label2").innerHTML = question.answers[1];
    document.getElementById("label3").innerHTML = question.answers[2];
  }
  
  function checkAnswer() {
    var question = questions[currentQuestion];
    var radios = document.getElementsByName("answer");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        var selectedAnswer = radios[i].value;
        if (selectedAnswer == question.correctAnswer) {
          score++;
        }
        break;
      }
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      var scoreElement = document.getElementById("score");
      scoreElement.innerHTML = "Scor final: " + score + "/" + questions.length;
      document.getElementById("quiz").style.display = "none";
      document.getElementById("result").style.display = "block";
    }
  }
  