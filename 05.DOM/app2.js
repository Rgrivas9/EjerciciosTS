/*
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
var div = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var p = document.createElement("p");
var h2 = document.querySelector("h2.fn-insert-here");
var ul = document.createElement("ul");
var pRemove = document.querySelectorAll(".fn-remove-me");
var p2 = document.createElement("p");
var firstdiv = document.querySelector("div");
var divInsert = document.querySelectorAll("div.fn-insert-here");
var apps = [
    "Facebook",
    "Netflix",
    "Instagram",
    "Snapchat",
    "Twitter",
];
var n = 0;
while (n < 6) {
    n++;
    div3.appendChild(document.createElement("p"));
}
for (var _i = 0, apps_1 = apps; _i < apps_1.length; _i++) {
    var app = apps_1[_i];
    var li = document.createElement("li");
    li.innerHTML = app;
    ul.appendChild(li);
}
div2.appendChild(document.createElement("p"));
p.innerHTML = "soy dinámico";
h2.innerHTML = "Wubba Lubba dub dub";
p2.innerHTML = "voy en medio";
pRemove.forEach(function (obj) { return document.body.removeChild(obj); });
divInsert.forEach(function (div) {
    var pdentro = document.createElement("p");
    pdentro.innerHTML = "voy dentro";
    div.appendChild(pdentro);
});
document.body.appendChild(div);
document.body.appendChild(div2);
document.body.appendChild(div3);
document.body.appendChild(p);
document.body.appendChild(ul);
firstdiv === null || firstdiv === void 0 ? void 0 : firstdiv.insertAdjacentElement("afterend", p2);
