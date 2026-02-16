// Søke motor som jeg lagde nå

    const data = {
      feber: {
        title: "Feber",
        description:
          "Feber oppstår når kroppstemperaturen din er mer enn 38 grader celsius.",
        whatToDo:
          "Lurt å spise mye og drikke noe varmt, ta gjerne paracet ved behov.",
        doctor:
          "Ta kontakt med legen hvis temperaturen overstiger 39 grader celsius."
      },
      migrene: {
        title: "Migrene",
        description:
          "Migrene er en nevrologisk hodepine som ofte gir pulserende smerter, kvalme og lysfølsomhet.",
        whatToDo:
          "Hvile i mørkt rom og bruk av anbefalte smertestillende kan lindre symptomene.",
        doctor:
          "Oppsøk lege ved hyppige anfall eller dersom symptomene endrer karakter."
      },
      
      
      hodepine: {
        title: "Hodepine",
        description:
          "Hodepine er en vanlig tilstand som kan skyldes stress, spenninger eller dehydrering.",
        whatToDo:
          "Drikk rikelig med vann, ta pauser og bruk smertestillende ved behov.",
        doctor:
          "Kontakt lege hvis hodepinen er intens, vedvarende eller ledsaget av andre symptomer."
      },

      asthma: {
        title: "Astma",
        description:
          "Astma er en kronisk lungesykdom som forårsaker betennelse og innsnevring av luftveiene.",
        whatToDo:
          "Bruk foreskrevne inhalatorer, unngå triggere og følg behandlingsplanen din.",
        doctor:
          "Oppsøk lege ved hyppige astmaanfall eller hvis symptomene forverres."
      },

      diabetes: {
        title: "Diabetes",
        description:
          "Diabetes er en kronisk sykdom som påvirker kroppens evne til å regulere blodsukkeret.",
        whatToDo:
          "Følg et sunt kosthold, vær fysisk aktiv og ta medisiner som foreskrevet.",
        doctor:
          "Kontakt lege for regelmessige kontroller og hvis du opplever symptomer som økt tørste eller hyppig vannlating."
      },
      influensa: {
        title: "Influensa",
        description:
          "Influensa er en smittsom luftveisinfeksjon som forårsaker feber, hoste og muskelsmerter.",
        whatToDo:
          "Hvile, drikk rikelig med væske og bruk smertestillende ved behov.",
        doctor:
          "Oppsøk lege hvis du har høy feber, pustevansker eller hvis symptomene forverres."
      },
    };

    const input = document.getElementById("searchInput");
    const button = document.getElementById("searchButton");

    const result = document.getElementById("result");
    const message = document.getElementById("message");

    const titleEl = document.getElementById("title");
    const descEl = document.getElementById("description");
    const whatToDoEl = document.getElementById("whatToDo");
    const doctorEl = document.getElementById("doctor");

    button.addEventListener("click", search);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") search();
    });

    function search() {
    const query = input.value.trim().toLowerCase();

      message.textContent = "";
       
      result.classList.add("hidden");


      if (!query) {
        message.textContent = "Skriv inn en skade eller sykdom for å søke.";
        return;
      }

      if (!data[query]) {
        message.textContent = "Ingen informasjon funnet for dette søket.";
        return;
      }

      const d = data[query];

      titleEl.textContent = d.title;
      descEl.textContent = d.description;
      whatToDoEl.textContent = d.whatToDo;
      doctorEl.textContent = d.doctor;

      result.classList.remove("hidden");
    }