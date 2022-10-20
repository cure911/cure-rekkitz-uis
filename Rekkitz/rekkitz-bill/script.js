var esya = document.getElementById("esya").innerHTML;
var aciklama = document.getElementById("aciklama").innerHTML;
var fiyatin = document.getElementById("fiyatin").innerHTML;
var idinside = document.getElementById("idinside").innerHTML;
var billsend = document.getElementById("billsend");
var signaturegif = document.getElementById("signaturegif");

billsend.onclick = function(){
    if (signaturegif.style.display !== "block"){
        signaturegif.style.display = "block";
    };
    console.log(
        `ID: ${idinside}  Eşya: ${esya}  Açıklama: ${aciklama}  Toplam Fiyat: ${fiyatin}`
    );
}