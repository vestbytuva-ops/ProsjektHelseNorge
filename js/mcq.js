const totalQuestions = 5;
    const maxPointsPerQuestion = 4;
    const minPointsPerQuestion = 1;
    
    let currentQuestion = 1;
    let totalScore = 0;
    let maxPossibleScore = totalQuestions * maxPointsPerQuestion;
    let minPossibleScore = totalQuestions * minPointsPerQuestion;

    function answer(questionNum, points) {
      totalScore += points;
      
      
      document.querySelector(`.question-container[data-question="${questionNum}"]`).classList.remove('active');
      
      if (currentQuestion < totalQuestions) {

        currentQuestion++;
        document.querySelector(`.question-container[data-question="${currentQuestion}"]`).classList.add('active');
      } else {

        showResult();
      }
    }

    function showResult() {
      document.getElementById('quiz-container').style.display = 'none';
      document.getElementById('result').classList.add('active');
      window.parent.document.getElementById('mcq-frame').style.height = '850px';

      
      const percentage = Math.round(((totalScore - minPossibleScore) / (maxPossibleScore - minPossibleScore)) * 100);
      
      animateScore(percentage);
      
      const scoreCircle = document.getElementById('score-circle');
      const resultMessage = document.getElementById('result-message');
      
      // Dette under hjelper med å skjule den selvom jeg har den gjennom CSS
      document.querySelectorAll('.feedback-text').forEach(f => f.style.display = 'none');
      
      if (percentage >= 80) {
        scoreCircle.style.backgroundColor = '#4dae50';
        resultMessage.textContent = 'Utmerket! Du har svært gode helsevaner.';
        document.getElementById('feedback-80').style.display = 'block';
        
      } else if (percentage >= 60) {
        scoreCircle.style.backgroundColor = '#a1c15a';
        resultMessage.textContent = 'Bra jobbet! Du er på rett vei.';
        document.getElementById('feedback-60').style.display = 'block';
        
      } else if (percentage >= 40) {
        scoreCircle.style.backgroundColor = '#ffb300';
        resultMessage.textContent = 'Det er rom for forbedring. Små endringer kan gjøre stor forskjell.';
        document.getElementById('feedback-40').style.display = 'block';
        
      } else if (percentage >= 20) {
        scoreCircle.style.backgroundColor = '#f47f20';
        resultMessage.textContent = 'Det kan være lurt å fokusere mer på helsevaner.';
        document.getElementById('feedback-20').style.display = 'block';
        
      } else {
        scoreCircle.style.backgroundColor = '#c72a29';
        resultMessage.textContent = 'Det er viktig å prioritere helsen din. Små steg fremover teller!';
        document.getElementById('feedback-0').style.display = 'block';
      }
    }

    function animateScore(targetPercentage) {
      const scoreText = document.getElementById('score-text');
      let current = 0;
      const increment = targetPercentage / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetPercentage) {
          current = targetPercentage;
          clearInterval(timer);
        }
        scoreText.textContent = Math.round(current) + '%';
      }, 20);
    }


      function restart() {
      currentQuestion = 1;
      totalScore = 0;
      
      document.getElementById('result').classList.remove('active');
      document.getElementById('quiz-container').style.display = 'block';

      document.getElementById('score-text').textContent = '0%';
      document.getElementById('score-circle').style.backgroundColor = '';

      // Skjul alle feedback-tekster
      document.querySelectorAll('.feedback-text').forEach(f => f.style.display = 'none');
      
      document.querySelectorAll('.question-container').forEach(q => q.classList.remove('active'));
      document.querySelector('.question-container[data-question="1"]').classList.add('active');
       window.parent.document.getElementById('mcq-frame').style.height = '400px';
    }


