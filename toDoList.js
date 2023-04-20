
var input = document.getElementsByTagName("input")
var button = document.getElementsByTagName("button")
var table = document.querySelector("table")


button[0].addEventListener("click", function(e){
        if(input[0].value=="")
        {
            alert("empty");
            e.preventDefault();
        }
    else{
        ///CREATE NEW ROW
        var newRow = document.createElement("tr");
        ///CREATE TD1
        var newData1 = document.createElement("td");
        ///CREATE TD1 CHECK BOX (RADIO)
        var check = document.createElement("input");
        ///SET ITS ATTRIBUTES TO TYPE RADIO
        check.setAttribute("type","checkbox")
        ///APPEND CONTENT TO ITS TD
        newData1.appendChild(check)
        ///APPEND THIS DATA WITH ITS CONTENT TO THE ROW
        newRow.appendChild(newData1)
        ///CREATE TD2
        var newData2 = document.createElement("td");
        ///CREATE TD2 TEXT
        var dataText = document.createTextNode(input[0].value);
        ///APPEND TEXT TO TD
        newData2.appendChild(dataText)
        ///CHECK IF THE CHECK IS CHECKED
            check.addEventListener("click",function(e){
                if(check.checked==true)
                {
                    e.target.parentElement.nextSibling.style.textDecoration="line-through"
                }
                else{
                    e.target.parentElement.nextElementSibling.style.textDecoration="none"
    //e.target.parentElement.nextSibling.classList.toggle("line")//ANOTHER WAY OF DOING OUT SIDE THE CONDITION
                }
                e.target.parentElement.nextElementSibling.nextElementSibling.firstChild.classList.toggle("active")
            })
        
        ///APPEND THIS DATA WITH ITS CONTENT TO THE ROW
        newRow.appendChild(newData2)
        ///CREATE TD3
        var newData3 = document.createElement("td");
        ///CREATE TD3 ICON 
        var dataIcon = document.createElement("img");
        ///DELETE WHOLE ROW ON CLICK
         dataIcon.onclick=function(e){
             if(e.target.classList.contains("active"))
             {
                if(confirm("ARE YOU SURE ?"))
                {
                    e.target.parentElement.parentElement.remove() 
                }
             }
         }
        ///SET ATTRIBUTES TO THE IMG
        dataIcon.setAttribute("src","delete.png")
        ///SET ATTRIBUTES OF IMG
        dataIcon.style.width="20px"
        ///APPEND THIS DATA TO TD3
        newData3.appendChild(dataIcon)
        ///APPEND THIS DATA WITH ITS CONTENT TO THE ROW
        newRow.appendChild(newData3)
        ///APPEND ROW TO TABLE
        table.appendChild(newRow);
    }
    })