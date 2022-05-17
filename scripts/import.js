const input = document.querySelector('input[type="file"]')
      input.addEventListener('change', function(e){

        if(showModal("Would you like to import this data? (This will delete the current character)","import") == true){
          console.log(input.file); //Testing stuff, remove later
          const reader = new FileReader()
          reader.onload = function(){

              const regex = /,/mg;
                //TODO Rename this variable
              const a = reader.result.split(regex)
              console.log(a)
              const weaponsBtn = document.querySelector('#AddBtn');
              const acItemsBtn = document.querySelector('#acItemsAddBtn');
              const gearBtn = document.querySelector('#gearAddBtn');
              const featsBtn = document.querySelector('#featsAddBtn');
              const specBtn = document.querySelector('#specialAbilAddBtn');

              // Create the same number of weapon entries that the user had when
              // they exported. So that data wont be placed in wrong positions
              
              for (let j = 0; j < Number(a[a.length - 5]) - 1; ++j){

                weaponsBtn.click();

              }
              for (let i = 0; i < Number(a[a.length - 4]) - 1; ++i){

                acItemsBtn.click();

              }
              for (let i = 0; i < Number(a[a.length - 3]) - 1; ++i){

                gearBtn.click();

              }
              for (let i = 0; i < Number(a[a.length - 2]) - 1; ++i){

                featsBtn.click();

              }
              for (let i = 0; i < Number(a[a.length - 1]) - 1; ++i){

                specBtn.click();

              }

              //Scrub the imported data for any comma HTML codes and convert 
              // those codes to commas now that the data has been segmented
              //properly

              for (let i =0; i < a.length;i++){

                //If a string in the array contains the following HTML
                // code for commas
                if (a[i].includes('&#44')){

                  //Turn that code back into a comma. This will
                  // not disrupt the csv and people can have
                  // characters with commas in their names
                  a[i] = a[i].replace(/&#44/g,',')

                }

              }

              //Find all of the input fields and make an array named inputFields out of them
              const inputFields = document.querySelectorAll('input[type=text],input[type=checkbox],textarea')
              console.log(inputFields) //TESTING TESTING

              // Populate text fields with values
              for (let i = 0; i < inputFields.length; ++i){
                if (inputFields[i].type != "checkbox"){
                  
                    inputFields[i].value = a[i];

        
                }else{
                  
                  // If we find a checkbox populate checkbox fields
                  // not input fields

                  let bool = a[i] == "true" ? true : false;
                  inputFields[i].checked = bool;
                  // console.log(!!a[i]);
        
                }
  
              }
  
          }
          reader.readAsText(input.files[0])
        }

      },false)