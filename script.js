function maior(){
    const n1 = parseFloat(document.getElementById("n1").value)
    const n2 = parseFloat(document.getElementById('n2').value)
    const n3 = parseFloat(document.getElementById('n3').value)
    
    if (n1 > n2 & n1 > n3) {
        alert(`Entre os números digitados, o maior é ${n1}`)
    } else if (n2 > n1 & n2 > n3) {
        alert(`Entre os números digitados, o maior é ${n2}`)
    } else {
        alert(`Entre os números digitados, o maior é ${n3}`)
    } 
}

function maioridade(){
    const idade = parseInt(document.getElementById("idade").value)

    if (idade < 18) {
        alert(`Você tem ${idade} anos, portanto é menor de idade`)
    }else{
        alert(`Você tem ${idade} anos, portanto é maior de idade`) 
    }
}


function multiplos(){
    let soma = 0;
    let res = document.getElementById('res');
       
    
    for (i =0; i <= 1000; i++ ) {
        if(i % 3 === 0 || i % 5 === 0) {
            soma += i;   
        }
        
        res.innerHTML = `A soma dos multiplos de 3 ou 5 é <strong>${soma}</strong>`
        
    }
    
   
    
   
    
}
