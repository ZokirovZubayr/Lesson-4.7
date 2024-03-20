const array = [ "Mars", "Yupiter", "Saturin", "Venera" ];
let long = array.lenght;
console.log("Arrayning uzunligi l = " + long);
alert("Arrayning uzunligi l = " + long);

let result = confirm("Siz jarayon davom etishini hohlaysizmi?");

if (result) {
    array.pop();
    let l = array.length;
    alert("Kesilgan arrayni uzunligi l = " + 1)
}else{
    let l = array.length;
    console.log("Siz jarayonni to'xtatganingiz uchun l = " + 1);
}