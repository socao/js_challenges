document.getElementById("subscribe").addEventListener("click", function(){
    console.log("it works")
    let element = document.getElementById("subscribe")
    console.log(element.checked);
    if(this.checked){
        document.querySelector('#emailDiv').style.display="block"
    }
    else{
        document.querySelector('#emailDiv').style.display="none"
    }
}
)