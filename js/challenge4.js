document.querySelector('#challenge4_form').addEventListener("submit", function(event){
    console.log("I'm checked");
    nameField = document.querySelector ("input[name='name']").value;
    addrField = document.querySelector ("input[name='addr']").value;
    nameError = document.querySelector("#nameError");
    addrError = document.querySelector("#addrError");
    if (nameField.length ==0){
        console.log("ok");
        nameError.style.display ="block";
        event.preventDefault();
    } else{
        nameError.style.display ="none";
        }
    if (addrField.length ==0) {
        addrError.style.display = "block";
        event.preventDefault();
    } else {
        addrError.style.display ="none";
    }
    if (nameField.length ==0 || addrField.length ==0){
        event.preventDefault();
        return false;
    }
}
)