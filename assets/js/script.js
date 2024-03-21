
document.querySelector("#paginas").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prototipo_nao").addEventListener("change", calcular)
document.querySelector("#js").addEventListener("change", calcular)

document.querySelector("#prazo").addEventListener("input", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerText 
                = `Prazo: ${prazo} semanas`
    calcular()
})

function calcular(){
    // 100 por página
    const qtde = document.querySelector("#paginas").value
    let preco = qtde * 100;

    const tipo = document.querySelector("#tipo").value
    if (tipo === 2) preco += 1000

    const precisa_prototipo = document.querySelector("#prototipo_sim").checked
    if (precisa_prototipo) preco += qtde * 50
    
    const tem_js = document.querySelector("#js").checked
    if (tem_js) preco *= 1.1

    const prazo = document.querySelector("#prazo").value
    const taxa_de_urgencia = 1 - prazo * 0.05
    preco *= 1 + taxa_de_urgencia


    document.querySelector("#preco").innerText = "R$ " + preco.toFixed(2)
}