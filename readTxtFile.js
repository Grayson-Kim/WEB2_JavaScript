function read(readfile)  
{  
     var txtFile = new XMLHttpRequest();  
     txtFile.open("GET", readfile, true);  
     txtFile.onreadystatechange = function()   
     {  
          if (txtFile.readyState === 4)   
          {  
               // Makes sure the document is ready to parse.  
               if (txtFile.status === 200)   
               {  
                    // Makes sure it's found the file.  
                    document.getElementById("div").innerHTML = txtFile.responseText;  
               }  
          }  
     }  
     txtFile.send(null)  
}  