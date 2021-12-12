let input = document.querySelector('.input')
let items = Array.from(document.querySelectorAll('.item'))
items.forEach(function(btn){
    btn.addEventListener('click', function(){
        let btnAns;
        if(input.innerHTML=='0')
        input.innerHTML='';
        if(btn.innerHTML=='AC')
        input.innerHTML='0';
        else if(btn.innerHTML=='DEL'){
            let arrdel = Array.from(input.innerHTML)
            arrdel.splice(arrdel.length-1,1);
            if(arrdel.length!=0)
            input.innerHTML= arrdel.join('');
            else 
            input.innerHTML= '0';
        }
        else if(btn.innerHTML=='='){
            input.innerHTML=eval(input.innerHTML);
        }
        else input.innerHTML+=btn.innerHTML;
    })
})