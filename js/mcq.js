const questions = [
  {
    title: 'Fysisk aktivitet',
    text: 'Hvor ofte trener du per uke?',
    options: [
      { text: 'Aldri',      color: '#c72a29', points: 1 },
      { text: '1-2 ganger', color: '#f47f20', points: 2 },
      { text: '3-4 ganger', color: '#ffb300', points: 3 },
      { text: '5+ ganger',  color: '#4dae50', points: 4 }
    ]
  },
  {
    title: 'Søvnkvalitet',
    text: 'Hvor mange timer sover du i gjennomsnitt per natt?',
    options: [
      { text: 'Under 5 timer', color: '#c72a29', points: 1 },
      { text: '5-6 timer',     color: '#f47f20', points: 2 },
      { text: '6-7 timer',     color: '#ffb300', points: 3 },
      { text: '7-9 timer',     color: '#4dae50', points: 4 }
    ]
  },
  {
    title: 'Kosthold',
    text: 'Hvor ofte spiser du grønnsaker og frukt?',
    options: [
      { text: 'Sjelden/aldri',      color: '#c72a29', points: 1 },
      { text: '1-2 ganger per dag', color: '#f47f20', points: 2 },
      { text: '3-4 ganger per dag', color: '#ffb300', points: 3 },
      { text: '5+ porsjoner daglig',color: '#4dae50', points: 4 }
    ]
  },
  {
    title: 'Stressnivå',
    text: 'Hvordan vil du beskrive ditt daglige stressnivå?',
    options: [
      { text: 'Veldig høyt, konstant stresset',  color: '#c72a29', points: 1 },
      { text: 'Høyt, ofte stresset',             color: '#f47f20', points: 2 },
      { text: 'Moderat, noen ganger stresset',   color: '#ffb300', points: 3 },
      { text: 'Lavt, sjelden stresset',          color: '#4dae50', points: 4 }
    ]
  },
  {
    title: 'Vanninntak',
    text: 'Hvor mye vann drikker du daglig?',
    options: [
      { text: 'Under 1 liter',  color: '#c72a29', points: 1 },
      { text: '1-1.5 liter',    color: '#f47f20', points: 2 },
      { text: '1.5-2 liter',    color: '#ffb300', points: 3 },
      { text: 'Over 2 liter',   color: '#4dae50', points: 4 }
    ]
  }
];

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

let currentQuestion = 0;
let totalScore = 0;
const maxPossibleScore = questions.length * 4;
const minPossibleScore = questions.length * 1;

function renderQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="progress">Spørsmål ${currentQuestion + 1} av ${questions.length}</div>
    <h2>${q.title}</h2>
    <p>${q.text}</p>
    ${q.options.map(o => `
      <button style="--btnColor:${o.color}" onclick="answer(${o.points})">${o.text}</button>
    `).join('')}
    <sup>Velg det alternativet som passer best</sup>
  `;
}

function answer(points) {
  totalScore += points;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function getFeedbackLevel(percentage) {
  if (percentage >= 80) return 80;
  if (percentage >= 60) return 60;
  if (percentage >= 40) return 40;
  if (percentage >= 20) return 20;
  return 0;
}

function showResult() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result').classList.add('active');

  const percentage = Math.round(((totalScore - minPossibleScore) / (maxPossibleScore - minPossibleScore)) * 100);
  const f = feedback[getFeedbackLevel(percentage)];

  document.getElementById('score-circle').style.backgroundColor = f.color;
  document.getElementById('result-message').textContent = f.message;

  document.querySelector('.feedback-text').style.display = 'block';
  document.getElementById('feedback-title').textContent = f.title;
  document.getElementById('feedback-body').textContent = f.text;

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
  currentQuestion = 0;
  totalScore = 0;

  document.getElementById('result').classList.remove('active');
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('score-text').textContent = '0%';
  document.getElementById('score-circle').style.backgroundColor = '';
  document.querySelector('.feedback-text').style.display = 'none';

  renderQuestion();

  setTimeout(() => {
    const height = document.getElementById('wrapper').scrollHeight;
    window.parent.document.getElementById('mcq-frame').style.height = height + 40 + 'px';
  }, 50);
}

renderQuestion();