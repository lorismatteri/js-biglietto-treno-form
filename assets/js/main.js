var btnGenera = document.getElementById('btn_genera');
var btnAnnulla = document.getElementById('btn_annulla');

btnGenera.addEventListener("click", function () {
  var offer = "Standard Ticket"

  //Genera ticket
  console.log("genera il ticket");

  // selezionare valore input
  var fullNameInput = document.getElementById("full_name");

  var kmInput = document.getElementById('km');

  var ageInput = document.getElementById('age');


  // Seleziona i valori
  var fullName = fullNameInput.value;
  var km = kmInput.value;
  var age = ageInput.value;
  console.log(fullName, km, age);

  // calcolo biglietto treno
  var sconto;
  var costPerKm = 0.21;
  var ticketPrice = costPerKm * km;
  console.log(ticketPrice);

  if (age == "minorenne") {
    sconto = ticketPrice * 20 / 100;
    ticketPrice = ticketPrice - sconto;
    offer = "Sconto Minorenni";
  } else if (age == "over_65") {
    sconto = ticketPrice * 40 / 100;
    ticketPrice = ticketPrice - sconto
    offer = "Sconto Silver";
  }

  // Seleziona dqti in biglietto
  var elName = document.getElementById('nome_passeggero');
  var elOfferta = document.getElementById('offerta');
  var elCarrozza = document.getElementById('carrozza');
  var elCodice = document.getElementById('codice_cp');
  var elTicket = document.getElementById('ticket_price');

  // Genera num carrozza
  var numberCarrozza = Math.floor(Math.random() * 9) + 1;
  var codiceCp = Math.floor(Math.random() * (100000 - 90000) ) + 90000;

  // Inserire dati nel biglietto
  elName.innerHTML = fullName;
  elOfferta.innerHTML = offer;
  elTicket.innerHTML = "€" + ticketPrice;
  elCarrozza.innerHTML = numberCarrozza;
  elCodice.innerHTML = codiceCp

  document.getElementById('biglietto').style.display = 'block';
});

btnAnnulla.addEventListener("click", function () {
  //Annulla
  console.log("annulla operazione");

  document.getElementById('biglietto').style.display = 'none';

  var fullNameInput = document.getElementById("full_name");

  var kmInput = document.getElementById('km');

  var ageInput = document.getElementById('age');

  fullNameInput.value = "";
  kmInput.value = "";
  ageInput.value = "";
});
