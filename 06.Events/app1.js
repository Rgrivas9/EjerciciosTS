/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */
var btn = document.createElement('button');
var input1 = document.querySelector(".click");
var input2 = document.querySelector(".focus");
var input3 = document.querySelector(".value");
btn.setAttribute('id', 'btnToClick');
btn.innerHTML = 'click';
input1 === null || input1 === void 0 ? void 0 : input1.insertAdjacentElement("afterend", btn);
btn.addEventListener('click', function () {
    console.log('informacion del evento click');
});
input2 === null || input2 === void 0 ? void 0 : input2.addEventListener('focus', function () {
    console.log(input2.value);
});
input3 === null || input3 === void 0 ? void 0 : input3.addEventListener('input', function () {
    console.log(input3.value);
});
