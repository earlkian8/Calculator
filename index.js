function append_char(char){
    document.getElementById('display').value += char;
}

function del_last(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate(){
    let display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

function clear_display(){
    document.getElementById('display').value = '';
}
