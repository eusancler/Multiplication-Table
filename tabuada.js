function gerar(){
    var num=document.getElementById('txtn')
    var tab=document.getElementById('seltab')
    if(num.value==0){
        alert('Text a number.')
    } else{
        var n=Number(num.value)
        var c=1
        tab.textContent= ''
        while(c<=10){
            var iten= document.createElement('option')
            iten.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(iten)
            c++
        }

    }
}

/*
tab.textContent= ''
- serve para apagar o que foi escrito ao clicar novamente no botão.*/
