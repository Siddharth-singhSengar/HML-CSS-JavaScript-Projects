const qrtext = document.getElementById("qr-text");
const  sizes = document.getElementById("sizes");

const generatebtn = document.getElementById("generatebtn");
const download = document.getElementById("downloadbtn");
const qrcontainer = document.querySelector(".qr-body");


let size = sizes.value
generatebtn.addEventListener("click", (e)=>{
    e.preventDefault();
    isEmpty();
    

});

sizes.addEventListener("change" , (e)=>{
    size = e.target.value;
    isEmpty();
});

download.addEventListener("click" , ()=>{
    let img = document.querySelector(".qr-body img")

    if (img !==null){
        let imgAttr = img.getAttribute("src");   //getting the value of the src attribute from an image element (<img>) 
        download.setAttribute("href",imgAttr);
    }
    else{
        download.setAttribute("href",`${document.querySelector("canvas").toDataURL()}`) //return empty rectangle box
    }
})

const isEmpty = ()=>{
    qrtext.value.length>0 ? generateQRCode() : alert ("Enter valid input or URL");

}


function generateQRCode(){
    qrcontainer.innerHTML = ""
    new QRCode(qrcontainer, {
        text:qrtext.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colordark : "#000"

    })
}