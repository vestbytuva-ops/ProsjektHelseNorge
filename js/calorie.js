function calculateCalories(){
    const weight = Number(document.getElementById('weight').value);
      const height = Number(document.getElementById('height').value);
        const age = Number(document.getElementById('age').value);
        const male = document.getElementById('male').checked;
        const female = document.getElementById('female').checked;
        const training = document.getElementById('training').value;

        let result;
        
        if (male) {
        result = 10 * weight + 6.25 * height - 5 * age + 5;
    } 
    
    else if (female) {
        result = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    if (!weight || !height || !age || (!male && !female) || !training) {
    document.getElementById('kcal-result').innerHTML =
        "Fyll inn alle feltene og velg kjønn og treningsnivå.";
    return;
}

switch (training) { 
    case "nothing":
        result *= 1.1;
        break;
    case "light":
        result *= 1.3;
        break;
    case "moderate":
        result *= 1.5;
        break;
    case "heavy":
        result *= 1.7;
        break;
    default:
        document.getElementById('kcal-result').innerHTML =
        "Vennligst velg et treningsnivå.";
    return;
}

document.getElementById('kcal-result').textContent =
    "Din daglige kaloribehov er cirka " + Math.round(result) + " kcal";
}

function reload(){
    window.location.reload();
}
