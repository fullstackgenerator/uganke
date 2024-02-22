const riddles = [
    { text: "Kuhano, pečeno in na mizo prinešeno, vendar tega ne jé ne pes, ne maček, ne človek.", answer: "špila" || "Špila", hint: "Predstavlja del jedi." },
    { text: "Kaj ima hrbet in nima telesa?", answer: "knjiga", hint: "Brez nje ni napredka." },
    { text: "Ima jezik pa ne govori in nogo, ki njegova ni.", answer: "čevelj", hint: "V omari živi." },
    { text: "V grmu sedi, ves dan žgoli, ženki prepeva, ki v gnezdu vali.", answer: "kos", hint: "Oblečen je v črno." },
    { text: "Muzikant oddet v črno suknjo, s krili gode pred svojo luknjo.", answer: "čriček", hint: "Na večer zaigra, da sliši se ga, včasih ima imena dva." },
    { text: "Nosim tovor, a nisem osel, imam rožičke, a nisem kozel.", answer: "polž", hint: "Počasi stopiclja, nikamor ne divja." },
    { text: "Železo jé, a nima zob.", answer: "rja", hint: "Kovino v prah spremeni." },
    { text: "Nima rok, ne nog, ne telesa pa z drevesa sad otresa!", answer: "veter", hint: "Brije in buči." },
    { text: "Vsak dan nosimo jo v usta, a nihče je ne pohrusta.", answer: "žlica", hint: "Ima še sestro in brata." },
    { text: "Kadar je lepo vreme, v kotu čepi, kadar pa ni, pa okrog leti.", answer: "dežnik", hint: "Vedno pride prav." },
    { text: "Enkrat, dvakrat se obrne, ko gre od doma in ko se vrne.", answer: "ključ", hint: "Groza je, če po svoje gre." },
    { text: "Leti in skače pa ni ne človek, ne žival.", answer: "žoga", hint: "Vsakdo se za njo podi." },
    { text: "Imam mesta brez hiš, gozdove brez dreves in reke brez vode. Kaj sem?", answer: "zemljevid", hint: "V žepu je dovolj prostora zame." },
    { text: "Letim brez kril in jočem brez oči.", answer: "oblak", hint: "O meni pogosto govorijo na TV." },
    { text: "Imam vrat, a nimam glave.", answer: "steklenica", hint: "Vedno sem v veseli družbi." },
    { text: "Kaj ni naprodaj za noben denar na svetu?", answer: "izgubljeni čas", hint: "Nekaj kar je za vedno zapravljeno." },

 { text: "Nosi svojega gospoda, gospod pa njega.", answer: "čevelj", hint: "Včasih žuli." },

 { text: "Bolj se vidi ponoči kot podnevi.", answer: "luč", hint: "Z menoj je iskanje stvari lažje. " },

 { text: "V hiši je pet bratov in vsak ima po eno sestro. Koliko jih je?", answer: "šest", hint: "Manj kot deset." },

 { text: "Imam oči, pa vendar sem slep. Pri vsakem očesu mi zraste rep.", answer: "krompir", hint: "Lahko je kuhan, pečen ali pražen." },

 { text: "Kaj moraš držati, čeprav si drugemu dal?", answer: "besedo", hint: "Ne smeš je prelomiti." },

 { text: "Ni kradel, nič ni naredil pa je obešen bil.", answer: "zvon", hint: "Že od daleč se sliši njegov glas." },

 { text: "Kamor pride, povsod je doma.", answer: "polž", hint: "Počasi stopiclja." },

 { text: "En teden je sit, dva je zvit, potem se gre skrit.", answer: "mesec", hint: "V družbi zvezd ga najdemo." },

 { text: "Hodi skozi vodo, a se ne zmoči.", answer: "sončni žarek", hint: "Zlatorumeno se blešči." },

 { text: "Govori vse jezike, pa se jih ni učil.", answer: "odmev", hint: "Posluša te in odgovori." },

 { text: "Orje kakor orač, črn je kakor kovač, pa ni ne orač, niti kovač.", answer: "krt", hint: "V zemlji živi." },

 { text: "Črno, zlato, rjavo, rdeče, v sneženo barvo se preobleče.", answer: "lasje", hint: "Z leti pobledijo in se spremenijo." },

 { text: "Vedno pod streho, a vedno moker.", answer: "jezik", hint: "Vsak z njim opleta." },

 { text: "Spodaj je ozek, zgoraj širok, skozi pa teče majhen potok.", answer: "lijak", hint: "V vinski kleti pride prav." },

 { text: "Če nimaš, si ga želiš, če ga imaš, ga redko obdržiš.", answer: "denar", hint: "…sveta vladar." },

 { text: "Pozimi cveti, poleti hladi, na soncu se joka, v senci strdi.", answer: "led", hint: "Včasih te na zadnjo plat spodnese." },

 { text: "Previdnost je mati modrosti, kdo pa je hči?", answer: "modrost", hint: "Prihaja z leti." },
    // dodaj uganke po potrebi
  ];
  
  let currentRiddleIndex = -1;
  
  function getRandomRiddle() {
    currentRiddleIndex = Math.floor(Math.random() * riddles.length);
    return riddles[currentRiddleIndex];
  }
  
  function displayRiddle() {
    const riddleContainer = document.getElementById("riddle-container");
    const hintContainer = document.getElementById("hint-container");
    const riddleText = document.getElementById("besediloUganka");
    const hintText = document.getElementById("hint-text");
  
    const riddle = getRandomRiddle();
    riddleText.textContent = riddle.text;
    hintContainer.style.display = "none";
    hintText.textContent = "";
  
    document.getElementById("answerInput").value = ""; // pobriše odgovor
  }
  
  let isCorrectAnswer = false;
  
  function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
    const hintContainer = document.getElementById("hint-container");
    const hintText = document.getElementById("hint-text");
    const resultContainer = document.getElementById("result-container");
  
    if (userAnswer === correctAnswer) {
        resultContainer.innerHTML = "<p class='correct'>Pravilno, čestitke!</p>";
        setTimeout(() => {
            resultContainer.style.opacity = 0; // nastavitev opacity za fade out učinek, za pravilni odgovor
            hintText.style.opacity = 0; // enako, le za namig
            setTimeout(() => {
                resultContainer.innerHTML = ""; // pobriše učinek za pravilni odgovor 
                resultContainer.style.opacity = 1; // ponastavi opacity
                hintText.innerHTML = ""; //
                hintText.style.opacity = 1;
                displayRiddle(); // avtomatsko prikaže novo uganko
            }, 1000); // nastavitev zakasnitve
        }, 2000);
    } else {
        hintContainer.style.display = "block";
        hintText.textContent = `Namig: ${riddles[currentRiddleIndex].hint}`;
    }
  }
  
  function initializeEvents() {
    document.getElementById("answerInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
  }
  
  function displayNewRiddle() {
    isCorrectAnswer = false;
    displayRiddle();
  }
  
    displayRiddle();
    initializeEvents();

    const the_animation = document.querySelectorAll('.druga')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation')
            }
                else {
                    entry.target.classList.remove('scroll-animation')
                }
            
        })
    },
       { threshold: 0.5
       });
    //
      for (let i = 0; i < the_animation.length; i++) {
       const elements = the_animation[i];
    
        observer.observe(elements);
      } 
    