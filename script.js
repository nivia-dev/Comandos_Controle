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
    let mult3 = 0;
    let mult5 = 0;
    let mult3e5 = 0;
    let res3 = document.getElementById('res3');
    let res5 = document.getElementById('res5');
    let res3e5 = document.getElementById('res3e5');
    
    
    for (i =0; i <= 1000; i++ ) {
        if (i % 3 === 0) {
            mult3 += i;
        }

        if(i % 5 === 0) {
            mult5 += i;    
        }

        if(i % 3 === 0 && i % 5 === 0) {
            mult3e5 += i;   
        }
        
        res3.innerHTML = `A soma dos multiplos de 3 é <strong>${mult3}</strong>`
        res5.innerHTML = `A soma dos multiplos de 5 é <strong>${mult5}</strong>`
        res3e5.innerHTML = `A soma dos multiplos de 3 que também <br> são multiplos de 5 é <strong>${mult3e5}</strong>`
    }
    
   
    
   
    
}
