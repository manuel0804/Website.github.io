function aktualisiereUhrzeit() {
    var jetzt = new Date();
    jetzt.setHours(jetzt.getHours()); 
    var stunden = jetzt.getHours();
    var minuten = jetzt.getMinutes();
    stunden = fuehrendeNull(stunden);
    minuten = fuehrendeNull(minuten);
    document.getElementById('uhrzeit').innerHTML = stunden + ':' + minuten;
    setTimeout(aktualisiereUhrzeit, 1000);
  }
  function fuehrendeNull(zahl) {
    if (zahl < 10) {
      zahl = '0' + zahl;
    }
    return zahl;
  }