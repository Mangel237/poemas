window.onload = function() {
  var lyrics = document.querySelector(".lyrics-large");
  var popup = document.querySelector(".lyrics-box");

  var fontSize = 30; 
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
      fontSize -= 1;
      lyrics.style.fontSize = fontSize + "px";
  }

  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

var currentIndex = 0;

function closeAlert() {
  var lyrics = document.querySelector(".lyrics-large");
  var songLines = [
    ".",
    "Cuando recien te conoci me asuste porque te ame",
    "Te ame demasiado pronto senti amor por todo el cuerpo hasta los huesos",
    "Era algo malo o porque mi amor era tan facil de dartelo", 
    "Solo me bastaron unas semanas para quererte decir te amo", 
    "Pero es que no podia evitarlo",
    "Hablar contigo a diario me hacia sentir vivo",
    "Escucharte hablar de lo que te gustaba me hacia emocionarme",
    "Tal parecia que te entendia", 
    "A una parte de mi le gustaba",
    "Le gustaba sentirlo todo",
    "Porque pensaba que podia hacertelo sentir tambien",
    "Creia que era ronmantico y poetico,me gustaba amarte",
    "Que estuvieras consciente de que yo por ti lo daba todo", 
    "Y esperar que aunque fuera pronto",
    "Me amaras tambien",
  ];

  currentIndex = (currentIndex + 1) % songLines.length;
  lyrics.textContent = songLines[currentIndex];

  // Reproducir música
  var audio = document.getElementById('background-music');
  audio.play();
}

