 var Weight= 20
 var height= 1.75
 var bmi=Weight/(height*height)

 if(bmi<18.5)
 {
    console.log("Underweight")
 }
 else if((bmi>=18.5) && (bmi<=24.9))
 {
    console.log("Normal Weight")
 }
 else if ((bmi>=25) && (bmi<=29.9))
 {
    console.log("Overweight")
 }
 else if(bmi>30)
 {
    console.log("Obese")
 }