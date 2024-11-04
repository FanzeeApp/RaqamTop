const randNum = Math.floor(Math.random() * 10) + 1;
const btn = document.getElementById("btn");
const javob = document.getElementById("javob");
let output = document.getElementById("input")
btn.addEventListener("click",() => {
  input = Number(output.value)

  if (input < 1 || input > 10) {
    javob.textContent = "1 dan 10 gacha son kiriting!";
    return;
  }

  if (input < randNum) {
    javob.textContent = "Topomadiz, man o'ylagan son siz aytgan sondan katta";
  } else if (input > randNum) {
    javob.textContent = "Topomadiz!, man o'ylagan son siz aytgan sondan kichik";
  } else if (input === randNum){
    javob.textContent = "To'g'ri topdiz";
  }else {
    javob.textContent = "Iltimos raqam kiriting!"
  }
});
