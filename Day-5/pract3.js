//var unit = 350
function bill()
{

   var unit=parseInt(document.getElementById("b").value);
   if(unit <= 100){
      console.log("No Charge")
   }
   else if(unit >100 && unit<=200){
       var charge=(unit-100)*5
      console.log("charge is "+charge+" Rs ")
   }
   else if(unit>200){
      unit=unit-200
      let Totalamt=(100*5)+(unit*10)
      console.log("charge is "+Totalamt+" Rs")
   }

}
 