/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */


const btn: HTMLButtonElement=document.createElement('button')
const input1=document.querySelector<HTMLInputElement>(".click")
const input2=document.querySelector<HTMLInputElement>(".focus")
const input3=document.querySelector<HTMLInputElement>(".value")
btn.setAttribute('id','btnToClick')
btn.innerHTML='click'
input1?.insertAdjacentElement("afterend",btn)

btn.addEventListener('click',():void=>{
    console.log('informacion del evento click')
})
input2?.addEventListener('focus',():void=>{
    console.log(input2.value)
})
input3?.addEventListener('input',():void=>{
    console.log(input3.value)
})
