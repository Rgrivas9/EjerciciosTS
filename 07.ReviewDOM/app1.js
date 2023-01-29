var countries1 = [
    "Japón",
    "Nicaragua",
    "Suiza",
    "Australia",
    "Venezuela",
];
var cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
var countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
var pToRemove = document.querySelector(".fn-remove-me");
var divPrintHere = document.querySelector("[data-function=printHere");
var ul1 = document.createElement("ul");
var ul2 = document.createElement("ul");
var div = document.createElement("div");
var btn = document.createElement("button");
btn.innerHTML = "remove last";
countries1.forEach(function (country) {
    var li = document.createElement("li");
    li.innerHTML = country;
    ul1.appendChild(li);
});
cars.forEach(function (car) {
    var li = document.createElement("li");
    li.innerHTML = car;
    ul2.appendChild(li);
});
countries.forEach(function (country) {
    var div1 = document.createElement("div");
    var h4 = document.createElement("h4");
    var img = document.createElement("img");
    var btn1 = document.createElement("button");
    img.setAttribute("src", country.imgUrl);
    img.setAttribute("alt", "image of a country");
    div.setAttribute("class", "remove");
    h4.innerHTML = country.title;
    btn1.innerHTML = "remove this";
    div1.appendChild(h4);
    div1.appendChild(img);
    div1.appendChild(btn1);
    div.appendChild(div1);
    btn1.addEventListener("click", function () { return div1.remove(); });
});
pToRemove === null || pToRemove === void 0 ? void 0 : pToRemove.remove();
document.body.appendChild(ul1);
divPrintHere === null || divPrintHere === void 0 ? void 0 : divPrintHere.appendChild(ul2);
document.body.appendChild(div);
div.insertAdjacentElement("afterend", btn);
btn.addEventListener("click", function () {
    var nodelist = document.querySelectorAll(".remove");
    if (nodelist.length != 0) {
        var last = div.lastChild;
        last === null || last === void 0 ? void 0 : last.remove();
    }
});
