function switchPower(){
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');
    

        if(checkbox2.checked){
            checkbox1.checked = true;
            checkbox2.checked = false;
        }
        else
        {
            checkbox1.checked = false;
            checkbox2.checked = true;
        }

}