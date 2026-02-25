const totalQuestions = 5;
const maxPointsPerQuestion = 4;
const minPointsPerQuestion = 1;

let currentQuestion = 1;
let totalScore = 0;
let maxPossibleScore = totalQuestions * maxPointsPerQuestion;
let minPossibleScore = totalQuestions * minPointsPerQuestion;

const feedback = {
  80: {
    color: '#4dae50',
    message: 'Utmerket! Du har svært gode helsevaner.',
    title: 'Her er fire tips for å fortsette slik:',
    text: 'Det er fantastisk at du har så gode helsevaner! Her er noen tips for å beholde det:',
    tips: [
      'Fortsett med din nåværende treningsskikkelighet.',
      'Hold deg til et balansert kosthold med mye frukt og grønnsaker.',
      'Sørg for å få nok søvn hver natt.'
    ]
  },
  60: {
    color: '#a1c15a',
    message: 'Bra jobbet! Du er på rett vei.',
    title: 'Godt jobbet!',
    text: 'Du har noen gode helsevaner, men det er plass til forbedring. Her er noen tips:',
    tips: [
      'Øk din fysiske aktivitet litt.',
      'Prøv å spise mer frukt og grønnsaker.',
      'Sørg for å få nok søvn hver natt.'
    ]
  },
  40: {
    color: '#ffb300',
    message: 'Det er rom for forbedring. Små endringer kan gjøre stor forskjell.',
    title: 'Det er ikke så dårlig!',
    text: 'Du har noen gode helsevaner, men det er plass til forbedring. Her er noen tips:',
    tips: [
      'Øk din fysiske aktivitet litt.',
      'Prøv å spise mer frukt og grønnsaker.',
      'Sørg for å få nok søvn hver natt.',
      'Drikk mer vann hver dag.'
    ]
  },
  20: {
    color: '#f47f20',
    message: 'Det kan være lurt å fokusere mer på helsevaner.',
    title: 'Det er ikke så dårlig!',
    text: 'Du har noen gode helsevaner, men det er plass til forbedring. Her er noen tips:',
    tips: [
      'Øk din fysiske aktivitet litt.',
      'Prøv å spise mer frukt og grønnsaker.',
      'Sørg for å få nok søvn hver natt.',
      'Drikk mer vann hver dag.'
    ]
  },
  0: {
    color: '#c72a29',
    message: 'Det er viktig å prioritere helsen din. Små steg fremover teller!',
    title: 'Det er ikke så bra!',
    text: 'Du har ikke så gode helsevaner. Her er noen tips for å forbedre:',
    tips: [
      'Øk din fysiske aktivitet litt.',
      'Prøv å spise mer frukt og grønnsaker.',
      'Sørg for å få nok søvn hver natt.',
      'Drikk mer vann hver dag.',
      'Unngå bruk av sterk koffein.'
    ]
  }
};

function getFeedbackLevel(percentage) {
  if (percentage >= 80) return 80;
  if (percentage >= 60) return 60;
  if (percentage >= 40) return 40;
  if (percentage >= 20) return 20;
  return 0;
}

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

  const percentage = Math.round(((totalScore - minPossibleScore) / (maxPossibleScore - minPossibleScore)) * 100);
  const level = getFeedbackLevel(percentage);
  const f = feedback[level];

  document.getElementById('score-circle').style.backgroundColor = f.color;
  document.getElementById('result-message').textContent = f.message;

  document.getElementById('feedback-title').textContent = f.title;
  document.getElementById('feedback-text').textContent = f.text;

  const tipsList = document.getElementById('feedback-tips');
  tipsList.innerHTML = '';
  f.tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  animateScore(percentage);

  setTimeout(() => {
    const height = document.getElementById('wrapper').scrollHeight;
    window.parent.document.getElementById('mcq-frame').style.height = height + 40 + 'px';
  }, 50);
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

  document.querySelectorAll('.question-container').forEach(q => q.classList.remove('active'));
  document.querySelector('.question-container[data-question="1"]').classList.add('active');

  setTimeout(() => {
    const height = document.getElementById('wrapper').scrollHeight;
    window.parent.document.getElementById('mcq-frame').style.height = height + 40 + 'px';
  }, 50);
}