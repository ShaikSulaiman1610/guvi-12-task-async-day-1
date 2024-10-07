function coundown (number, callback){
    setTimeout(function (){
        if (number === 0){
            callback();
            
        }else {
            document.getElementById('countdown').innerText = number;
            coundown(number-1, callback);
        }
    },1000);
}

coundown (10, function(){
document.getElementById('countdown').innerText = 'Happy Independence Day!';
});