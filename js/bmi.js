 function calculateBMI(){
            let weight=document.getElementById("weight").value
            let height=document.getElementById("height").value
             
            let bmi = (weight / ((height/100) * (height/100)))

            document.getElementById("heading").innerText="Din BMI er "
            document.getElementById("bmi-output").innerText = bmi.toFixed(2)

             updateCircle(bmi);

            if (bmi < 18.5){
                document.getElementById("message").innerText="Du er undervektig"
            }
            else if (bmi >= 18.5 && bmi < 24.9){
                document.getElementById("message").innerText="Du har normal vekt"
            }
            else if (bmi >= 25 && bmi < 29.9){
                document.getElementById("message").innerText="Du er overvektig"
            }
            else{
                document.getElementById("message").innerText="Du er fedme"
            }

        }

        function updateCircle(value) {
  const circle = document.getElementById("scoreCircle");
  const text = document.getElementById("scoreText");

  // Skjul alle feedback-tekster først   

  if (value < 18.5) {
    circle.style.backgroundColor = "#f47f20"; 
  } else if (value < 25) {
    circle.style.backgroundColor = "#4dae50"; 
  } else if (value < 30) {
    circle.style.backgroundColor = "#ffb300";
  } else {
    circle.style.backgroundColor = "#c72a29"; 
  }

  // Animasjon på sirkelen
  let current = 0;
  const step = value / 40;

  const interval = setInterval(() => {
    current += step;
    if (current >= value) {
      current = value;
      clearInterval(interval);
    }
    text.textContent = current.toFixed(1);
  }, 20);
}

function reload(){
     window.location.reload();
}
