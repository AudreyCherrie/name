   //var dob1 = "05 05 1995"
   function gen_Name(){
      // var dob1 = "05 05 1995"
   var dob1 = document.getElementById("dob").value;
   var splitdate = dob1.split(" ");
   //Split the input to get 2 indices
   var x = splitdate[0];
   var y = splitdate[1];
   var z = splitdate[2];
   //asign the first two indices to a variable as values
   var m = parseInt(x);
   var d = parseInt(y);
   //split y to get the content as string
   var y = z.split("");
   //Concat the fist two indices and last two indices to get century and year as string
   var c = y[0].concat(y[1]);
   var y = y[2].concat(y[3]);
   //Convert the c and y to get century and year as numbers to be used
   var cc = parseInt(c);
   var yy = parseInt(y);
   //Asign the equation to a variable
   var bd =  Math.round(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(m+1)/10)) + d ) % 7);
   //Fetch gender value from the user interface
       var gender = document.querySelector('input[name="gender"]:checked').value;
       //Generate name using The input data.
       if (!dob){
           alert("Invalid Details.Try Again");
       }else if(dob <= 0 || dob > 31 ) {
           alert ("Invalid Date Of Birth");
       }else if (m <= 0 || m >12) {
           alert ("Invalid Date Of Birth");
       }
       else if(bd === 0 && gender === 'female' ){
           alert("Akosua");
       }
       else if(bd === 0 && gender === 'male'){
           alert("Kwasi");
       }
       else if(bd === 1 && gender === 'female' ){
           alert("Adwoa");
       }
       else if(bd === 1 && gender === 'male'){
           alert("Kwadwo");
       }
       else if(bd === 2 && gender === 'female' ){
           alert("Abenaa");
       }
       else if(bd === 2 && gender === 'male'){
           alert("Kwabena");
       }
       else if(bd === 3 && gender === 'female' ){
           alert("Akua");
       }
       else if(bd === 3 && gender === 'male'){
           alert("Kwaku");
       }
       else if(bd === 4 && gender === 'female' ){
           alert("Yaa");
       }
       else if(bd === 4 && gender === 'male'){
           alert("Yaw");
       }
       else if(bd === 5 && gender === 'female' ){
           alert("Afua");
       }
       else if(dob1 === 5 && gender === 'male'){
           alert("Kofi");
       }
       else if(dob1 === 6 && gender === 'female' ){
           alert("Ama");
       }
       else if(dob1 === 6 && gender === 'male'){
           alert("Kwame");
       }
   }