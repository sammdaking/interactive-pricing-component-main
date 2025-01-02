const rangeInput = document.querySelector("#range");
const dolarText = document.querySelector("#dolar");
const checkbox = document.querySelector("#check");
const sayılar = [8, 12, 16, 24, 36];
const montSayılar = [6, 8, 12, 18, 27];

rangeInput.addEventListener("input", (e) => {
  rangeInput.value == 1 ? (dolarText.textContent = `$ ${sayılar[0]}.00`) : "";
  rangeInput.value == 2 ? (dolarText.textContent = `$ ${sayılar[1]}.00`) : "";
  rangeInput.value == 3 ? (dolarText.textContent = `$ ${sayılar[2]}.00`) : "";
  rangeInput.value == 4 ? (dolarText.textContent = `$ ${sayılar[3]}.00`) : "";
  rangeInput.value == 5 ? (dolarText.textContent = `$ ${sayılar[4]}.00`) : "";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      rangeInput.textContent = `$ ${montSayılar[e.target.value]}.00`;
      rangeInput.value == 1
        ? (dolarText.textContent = `$ ${montSayılar[0]}.00`)
        : "";
      rangeInput.value == 2
        ? (dolarText.textContent = `$ ${montSayılar[1]}.00`)
        : "";
      rangeInput.value == 3
        ? (dolarText.textContent = `$ ${montSayılar[2]}.00`)
        : "";
      rangeInput.value == 4
        ? (dolarText.textContent = `$ ${montSayılar[3]}.00`)
        : "";
      rangeInput.value == 5
        ? (dolarText.textContent = `$ ${montSayılar[4]}.00`)
        : "";

      rangeInput.addEventListener("input", () => {
        rangeInput.value == 1
          ? (dolarText.textContent = `$ ${montSayılar[0]}.00`)
          : "";
        rangeInput.value == 2
          ? (dolarText.textContent = `$ ${montSayılar[1]}.00`)
          : "";
        rangeInput.value == 3
          ? (dolarText.textContent = `$ ${montSayılar[2]}.00`)
          : "";
        rangeInput.value == 4
          ? (dolarText.textContent = `$ ${montSayılar[3]}.00`)
          : "";
        rangeInput.value == 5
          ? (dolarText.textContent = `$ ${montSayılar[4]}.00`)
          : "";
      });
    } else {
      rangeInput.textContent = `$ ${sayılar[e.target.value]}.00`;
      rangeInput.addEventListener("input", () => {
        rangeInput.value == 1
          ? (dolarText.textContent = `$ ${sayılar[0]}.00`)
          : "";
        rangeInput.value == 2
          ? (dolarText.textContent = `$ ${sayılar[1]}.00`)
          : "";
        rangeInput.value == 3
          ? (dolarText.textContent = `$ ${sayılar[2]}.00`)
          : "";
        rangeInput.value == 4
          ? (dolarText.textContent = `$ ${sayılar[3]}.00`)
          : "";
        rangeInput.value == 5
          ? (dolarText.textContent = `$ ${sayılar[4]}.00`)
          : "";
      });
    }
  });
});
