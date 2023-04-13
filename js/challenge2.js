document.getElementById("sameAddress").addEventListener("click", function(){
    console.log("I'm checked")
    let bill = document.querySelector('#bill')
    let address = document.querySelector('#home')
    if(this.checked){
        console.log("checked")
        address.value=bill.value
        address.disabled=true
    }
    else{
        console.log("unchecked")
        address.value=""
        address.disabled=false;
    }
}
)