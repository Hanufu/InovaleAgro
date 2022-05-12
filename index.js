//Pega o Valor do Input
function pegaValoresInput(){
    //Pegando valores e do input e convertendo em inteiro
    let input = document.getElementById('input-valores').value;
    let valores = input.split(',').map((item) =>{
        return parseInt(item, 10);
    });
    document.getElementById('input-valores').value = "";
    return valores
}

//cria um vetor com o valor pego, e mostra na tela
function criarVetor(valoresParam){
    //verifica se já tem itens, se sim então limpa a tela 
    if(document.getElementById('campoValores').childElementCount != 0){
        document.getElementById('campoValores').innerHTML = "";
    }
    if(valoresParam != null){

        let div = document.createElement('div');
        div.innerText = valoresParam;
        let campoValores = document.querySelector('#campoValores');
        campoValores.appendChild(div);
        div.setAttribute('id', 'valores');

    }else{
        
        let valores = pegaValoresInput();
        let div = document.createElement('div');
        div.innerText = valores;
        let campoValores = document.querySelector('#campoValores');
        campoValores.appendChild(div);
        div.setAttribute('id', 'valores');
        
        return valores
    } 
}

//converte os valores para inteiro, e chama a função de selection short
//que realmente ordena o array
function ordenarVetor(){
    let valores = document.getElementById('valores').innerText;
    let valoresNaoOrdenados = valores.split(',').map((item) =>{
        return parseInt(item, 10);
    });
    document.getElementById('valores').innerHTML = "";
    let valoresOrdenados = SelectionSort(valoresNaoOrdenados)

    criarVetor(valoresOrdenados)
    
}
//Função de ordenação, procura o menor item, e vai movendo os itens para sua esquerda
function SelectionSort(values) {
    let n = values.length;
    for (let i = 0; i < n - 1; i++) {
        //Encontra o menor item da parte não ordenada
        let min_idx = i;
            for (let j = i + 1; j < n; j++){
                if (values[j] < values[min_idx]){
                    min_idx = j;
                }
            }
        //Troca o menor com o primeiro elemento
        let aux = values[min_idx];
        values[min_idx] = values[i];
        values[i] = aux;
        
        //console.log(vetor); motra o passo a passo
    }
    return values
}


    