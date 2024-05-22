    var input = document.getElementById("user_input");
    var click_history = document.getElementById("click_history");

    function add_item(){
        if(input.value === ""){
    alert("Enter Your Items?");
        }else{

            var li = `<li> <span>${input.value}</span> 
            <button onclick="editThis(this)" class = "edit_btn">Edit</button>
            <button onclick="deleteThis(this)" class = "delete_btn">Delete</button></li>`
            
            click_history.innerHTML += li;
            
            var inputText = "";
            input.value = inputText;
        }

    } 


    function deleteThis(currentElement){
        currentElement.parentElement.remove()
    }

    function editThis(currentElement){
        var newTxt = prompt('Edit Your Text', currentElement.parentElement.firstElementChild.innerText)
        currentElement.parentElement.firstElementChild.innerText = newTxt;

    }

    function deleteall(){
        click_history.innerHTML = "";
    }