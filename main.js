function updatePrice(v) {
  
  let s = document.getElementsByName("prodType");
  let select = s[0];

  // Скрываем или показываем радиокнопки.
  let radioDiv = document.getElementById("prodOptions");
  radioDiv.style.display = (select.value == "1" || select.value == "3" ? "none" : "block");



  // Скрываем или показываем чекбоксы.
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "block" : "none");
  let price = 0;

  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

  // Смотрим какая товарная опция выбрана.
  if(select.value == "2" ){
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });
}
if(select.value == "3" ){
  let checkboxes= document.getElementsByName("checkboxes");
  checkboxes.forEach(function (checkboxes) {
    if (checkboxes.checked) {
      let checkboxPrice = prices.prodProperties[checkboxes.value];
      if (checkboxPrice !== undefined) {
        price += checkboxPrice;
      }
    }
  });
}

 let onlydigitnotzero=/^(?!(0))\d+$/;
 let prodPrice = document.getElementById("result");
 if(v.match(onlydigitnotzero)===null)
 prodPrice.innerHTML = "Число не введено или начинается с нуля";
else{

  prodPrice.innerHTML = v * price + " рублей";
}
}


function getPrices() {
  return {
    prodTypes: [100, 200, 300],
    prodOptions: {
      option2: 5,
      option3: 10,
    },
    prodProperties: {
      check1: 133,
      check2: 277,
    }
  };
}




window.addEventListener("DOMContentLoaded", function (event) {
  let radioDiv = document.getElementById("prodOptions");
  radioDiv.style.display = "none";

  let checkboxDiv = document.getElementById("checkboxes");
  checkboxDiv.style.display = "none";
  console.log("DOM fully loaded and parsed");


  let v = document.getElementById("field");
  v.addEventListener("input", function (event) {
    console.log(v.value);
    updatePrice(v.value);
  });

  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  // Назначаем обработчик на изменение select.
  select.addEventListener("change", function (event) {
    let target = event.target;
    console.log(target.value);
    updatePrice(v.value);
  });

  // Назначаем обработчик радиокнопок.  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      console.log(r.value);
      updatePrice(v.value);
    });
  });



  // Назначаем обработчик радиокнопок.  
  let checkboxes = document.getElementsByName("checkboxes");
  
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      console.log(checkboxes);
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice(v.value);
    });
  });

});


