console.log("it works");
// TC =  (98.6 - 32) x 5/9 
// Td = T - ((100 - RH)/5.) 

let inputF = document.getElementById("inputF");
let inputRH = document.getElementById("inputRH");
let calBtn = document.getElementById("calBtn");
let TempC = 0;
let TempDewPoint = 0;
let outputTempDC = document.getElementById("outputTempDC");
let outputTempDP = document.getElementById("outputTempDP");

calBtn.addEventListener("click", function(){
    let Num = Number(inputF.value);
    let NumRH = Number(inputRH.value);
    outputTempDC.textContent = " ";
    outputTempDP.textContent = " ";

    if(Num){
        TempC = (Num - 32) * (5/9);
        console.log("CEL",TempC.toFixed(2));
        
        TempDewPoint = TempC - ((100 - NumRH)/5.);
        console.log("DEW",TempDewPoint.toFixed(2));
        outputTempDC.textContent = `${TempC.toFixed(2)} °C`;
        outputTempDP.textContent = `${TempDewPoint.toFixed(2)} °C`;
    }
    else{
        console.log("some error!");
    }
});

