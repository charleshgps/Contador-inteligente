function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        //window.alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        /*alert('TUDO OK!!!')*/
        if (p <= 0) {
            window.alert('Passo invalido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += (` ${c} \u{1F449}`)
            }
        } else {
            //Decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += (` ${c} \u{1F449}`)
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}



/*function contar() {
var inicial = 0//window.document.getElementById('numini')
var final = 16//window.document.getElementById('numfim')
var intervalo = 3//window.document.getElementById('numinter')

while (inicial <= final){
    inicial = inicial + intervalo;
    resultado = inicial;
    console.log(`${resultado}`);
} 
    /*for (intervalo = 0; intervalo <= final; intervalo ++){
console.log(`${intervalo}º`)
}

for (inicial; inicial <= final; inicial = intervalo +) {
console.log(`Passo ${inicial}`)
}
}*/