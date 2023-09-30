

var c=Math.random()*100000;
var d=Math.round(c);
console.log(d);


var y=document.getElementById("display");
var form=document.getElementById("form");



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    close()
})



function otpgenrate(){
alert("❌❌❌❌❌\nYour OTP Is"+"\n"+d+"\n"+"Please Don't Share Your OTP\n❌❌❌❌❌");
}


function close(){
    var uservalue=document.getElementById("check").value;
if(uservalue==d){
   y.innerText="OTP is Verified Successfully";
}else if(uservalue===""){
    y.innerText="OTP Can't Be Blank";
}else{
    y.innerText="Entered OTP Is Inncorect";
}
}