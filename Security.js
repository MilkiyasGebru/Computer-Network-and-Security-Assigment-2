
var x=document.getElementById("radioD")
var y=document.getElementById("radioE")
var doc = ""
var message = document.getElementById("message");
var algorithms = document.getElementById("algorithms");
var text = document.getElementById("text");
var key = document.getElementById("key")
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
x.onclick = myfunction;
y.onclick = myfunction2;
p4.onclick =myfunction3;
document.getElementById("copy").onclick = function () {
    // console.log
    doc = message.innerHTML
    console.log(doc,"doc")
}
document.getElementById("paste").onclick=function () {
    text.value = doc
}
function myfunction(){

 p1.innerHTML = "Enter the message you want to decrypt";
    p2.innerHTML = "Decryption Key : ";
    p3.innerHTML = "Select the decryption algorithm";
    p4.innerHTML = "Decrypt";
    p5.innerHTML = "Decrpyted Message";

}

function myfunction2() {

    p1.innerHTML = "Enter the message you want to encrpt";
    p2.innerHTML = "Encryption Key : ";
    p3.innerHTML = "Select the encryption algorithm";
    p4.innerHTML = "Encrypt";
    p5.innerHTML = "Encrpyted Message";
}

function myfunction3(event){
    console.log("HI")
    if (p4.innerHTML == "Encrypt"){

        if (algorithms.value == "AES"){
            message.innerHTML=CryptoJS.AES.encrypt(text.value,key.value)
        }
        else if (algorithms.value == "3DES"){
            // console.log("HI, Milkiyas")
            message.innerHTML=CryptoJS.TripleDES.encrypt(text.value,key.value)
        }
        else{
            message.innerHTML = otp(text.value, key.value, "encrypt", true);
        }

    }
    else{
        if (algorithms.value == "AES"){
            var decreValue = CryptoJS.AES.decrypt(text.value,key.value).toString(CryptoJS.enc.Utf8)
            console.log(decreValue)
            if (decreValue !== ""){
                message.innerHTML = decreValue
            }
            else{
                message.innerHTML = "Wrong key Used"
            }

        }
        else if (algorithms.value == "3DES"){
            var decreValue=CryptoJS.TripleDES.decrypt(text.value,key.value).toString(CryptoJS.enc.Utf8)
            if (decreValue !== ""){
                message.innerHTML = decreValue
            }
            else{
                message.innerHTML = "Wrong key Used"
            }
        }
        else{
            message.innerHTML = otp(text.value, key.value, "decrypt", true);
        }
    }

    event.preventDefault()
}


