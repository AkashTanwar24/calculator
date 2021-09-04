var button=document.getElementsByClassName("button");
var display=document.getElementById("display");

var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<button.length;i++){
    button[i].addEventListener("click", function(){
        
            var value=this.getAttribute("data-value");
            if (value=="ac") {
                
                
                display.innerText=" ";
                
            }else if (value=="+/-") {
                
               
                display.innerText=value*-1;
                
            }else if (value=="%") {
                operator="%";
                operand1=parseFloat(display.textContent);
                display.innerText=" ";
                
            }else if (value=="/") {
                operator="/";
                operand1=parseFloat(display.textContent);
                display.innerText=" ";
                
            }else if (value=="*") {
                operator="*";
                operand1=parseFloat(display.textContent);
                display.innerText=" ";
                
            }else if (value=="-") {
                operator="-";
                operand1=parseFloat(display.textContent);
                display.innerText=" ";
                
            }else if (value=="+") {
                operator="+";
                operand1=parseFloat(display.textContent);
                display.innerText=" ";
                
            }else if (value=="=") {
                operand2=parseFloat(display.textContent);
                var result=eval(operand1+" "+operator+" "+operand2);
                display.innerText=result;

                
            }else{
                display.innerText+=value;
            }

});






    
}




