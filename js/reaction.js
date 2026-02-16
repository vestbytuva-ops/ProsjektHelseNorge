const clickArea = document.querySelector(".click-area");
const displayText = document.querySelector(".display-text");
const averageButton = document.getElementById("averageButton");

const scoreHistory = [];
const minimum_verdi = 3000;
const maximum_verdi = 10000;

let msSinceEpochOnTimeout = 0;
let waitingForClick = false;

const ctx = document.getElementById("reactionChart");

const reactionChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderWidth: 2,
      tension: 0.25,
      pointRadius: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 10
      }
    }
  }
});


function updateChart() {
  reactionChart.data.labels = scoreHistory.map((_, i) => `R${i + 1}`);
  reactionChart.data.datasets[0].data = scoreHistory;
  reactionChart.update();
}

function calculateAverage() {
  if (scoreHistory.length === 0) {
    displayText.textContent = "Ingen resultater enda";
    return;
  }

  const sum = scoreHistory.reduce((a, b) => a + b, 0);
  const avg = Math.round(sum / scoreHistory.length);

  displayText.textContent = `Gjennomsnitt: ${avg} ms`;
}

function play() {
  const msTillChange =
    Math.floor(Math.random() * (maximum_verdi - minimum_verdi)) + minimum_verdi;

  clickArea.style.background = "#950000";
  displayText.textContent = "Vent litt...";

  setTimeout(() => {
    msSinceEpochOnTimeout = Date.now();
    clickArea.style.background = "#009578";
    displayText.textContent = "TRYKK!";
    waitingForClick = true;
  }, msTillChange);
}

clickArea.addEventListener("click", () => {
  if (waitingForClick) {
    const score = Date.now() - msSinceEpochOnTimeout;

    waitingForClick = false;
    clickArea.style.background = "#950000";
    displayText.textContent = `${score} ms`;

    scoreHistory.unshift(score);
    updateChart();
  } else {
    play();
  }
});

averageButton.addEventListener("click", calculateAverage);
