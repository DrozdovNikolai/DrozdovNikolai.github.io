//Произошла чудовищная ошибка и я случайно заменил файл задания 5, заданием 6, если посмотреть по коммитам, то будет все видно (задание было сдано вовремя)
window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  function click1() {
      let f1 = document.getElementById("field1").value;
      let f2 = document.getElementById("field2").value;
      let r = document.getElementById("result");
      console.log(f1);
      let onlydigitnotzero=/^(?!(0))\d+$/;
      if(f1.match(onlydigitnotzero)===null || f2.match(onlydigitnotzero)===null)
      {
        alert("Введено не число или начинается с нуля");
        r.innerHTML="Ошибка NaN";

      }
      else
      {

        r.innerHTML = parseInt(f1) * parseInt(f2);
      }
    }
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
  });
