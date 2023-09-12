const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INPUT = document.getElementById("peso");
const BUTTON = document.getElementById("calcular");

BUTTON.addEventListener("click", () => {
  let peso = INPUT.value;

  if (peso > 0 && peso <= 30) {
    ERROR.style.display = "none";
    let res = holliday(peso) / 24;
    console.log("flujo diario:" + res);
    FLU.style.display = "block";
    MAN.style.display = "block";
    FLU.innerHTML = "Flujo: " + Math.round(res) + " CC/Hr";
    MAN.innerHTML = "Mantenimiento: " + Math.round(res * 1.5) + " CC/Hr";
  } else if (peso > 30) {
    let res = superficieCorporal(peso);
    FLU.style.display = "block";
    MAN.style.display = "block";
    FLU.innerHTML = "SC*1500: " + Math.round(res * 1500) + "cc";
    MAN.innerHTML = "SC*2000: " + Math.round(res * 2000) + "cc";
    console.log(res);
  } else {
    console.log("error");
    ERROR.style.display = "block";
  }
});

function holliday(peso) {
  let volumen;
  //algoritmo
  if (peso <= 10) {
    volumen = peso * 100;
  } else if (peso > 10 && peso <= 20) {
    volumen = 1000 + (peso - 10) * 50;
  } else {
    volumen = 1500 + (peso - 20) * 20;
  }
  return volumen;
}

function superficieCorporal(peso) {
  let supCorporal = (peso * 4 + 7) / (Number(peso) + 90);
  console.log(supCorporal);
  return supCorporal;
}
