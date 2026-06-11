// http://api.alquran.cloud/v1/ayah/262
const input=document.getElementById("SearchInput");
const submitBtn=document.getElementById("submit");
const output= document.getElementById("output");
const toutput=document.getElementById("toutput")
function getAyah(ayahNumber) {

const request = new XMLHttpRequest();
const request2= new XMLHttpRequest();
request.open("GET", `http://api.alquran.cloud/v1/ayah/${ayahNumber}`);
request2.open("GET", `http://api.alquran.cloud/v1/ayah/${ayahNumber}/en.asad`);
request.send();
request2.send();
request.addEventListener("load" , function(){
   const reponse=JSON.parse(this.responseText);
   const ayah=reponse.data.text;
output.innerText=ayah;
   
});
request2.addEventListener("load" , function () {
    console.log(this.responseText);
       const reponse=JSON.parse(this.responseText);
   const ayah=reponse.data.text;
toutput.innerText=ayah;
})
}
submitBtn.addEventListener("click" , function(e){
   e.preventDefault();
   const ayahNumber= input.value;
  getAyah(ayahNumber);
   
});

