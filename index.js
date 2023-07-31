let screen= document.getElementById('screen');
button= document.querySelectorAll('button');
let screenValue = '';
for(item of button){
    item.addEventListener('click',(e)=>{
    buttonText= e.target.innerText;
      console.log('Button text is ',buttonText);  
      if(buttonText=='*')
      {  
         buttonText='*';
         screenValue  += buttonText;
         screen.value = screenValue;
      }
         else if (buttonText =='AC') {
          screenValue  = "";          
           screen.value=screenValue;
          }
          else if (buttonText=='='){
            screen.value = eval(screenValue);

           }else{
            screenValue  += buttonText;
            screen.value = screenValue;
      
           }
          }
    
    
    )


}