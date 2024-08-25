
let filteredItemsDesc = menuOptions; // Variável para armazenar os itens filtrados avancado 1
let discountApplied = false; // Flag para verificar se o desconto foi aplicado avancado 2


//formatação para deixar valores como moeda real usar o "formatCurrency" no ou elemento/valor para funcionar
function formatCurrency(amount, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(amount);
}


//VARIAVEIS MAPEADAS
const list = document.querySelector("ul")
//const buttonStart = document.querySelector(".foreach") /* mapear o botao se for fazer tudo pelo js com addEventListener*/ 
const digitCupons = document.querySelector(".cupom")
const clickApply = document.querySelector(".apply")
const sumAll = document.querySelector(".sum-all")
const h1 = document.querySelector("h1")




let myLi = ""

function showAll(productArray) {//defini uma variavel para a função encontrar productArray, depois altera o menuOptions para ela
    myLi = ""//colocar uma myLi dentro da function para poder resetar toda vez que chamar a função para não ficar adicionando varias vezes mais o <li> 

    productArray.forEach(produce => {//mesma coisa ali colocando myLi += '<li>...menuOptions

        // forma mais detalhada para adicionar linha atravessada no valor
        if (produce.discountedPrice) {
            // Exibe o preço original com linha atravessada e o preço com desconto
            myLi += `
            <li>
                <img src=${produce.src} alt="${produce.name}">
                <p>${produce.name}</p>
                <p class="item-price original-price" style="text-decoration: line-through;">
                    ${formatCurrency(produce.price)}
                </p>
                <p class="item-price discounted-price">
                    ${formatCurrency(produce.discountedPrice)}
                </p>
            </li>
        `;
        //formatCurrency deixa o ${produce.price} em real
        

        } else {
            // Exibe apenas o preço original
            myLi += `
            <li>
                <img src=${produce.src} alt="${produce.name}">
                <p>${produce.name}</p>
                <p class="item-price">
                    ${formatCurrency(produce.price)}
                </p>
            </li>
        `;
        
        }
    });

    h1.style.display = "none"//remover o h1 apos chamar o hamburges foreach
    list.innerHTML = myLi
}

/* 
//forma mais compacta do modelo com a linha atravessada no valor original com operadores logicos = ?(if) :(else)----------------------------------------

productArray.forEach(produce => {//mesma coisa ali colocando myLi += '<li>...menuOptions
    myLi = myLi + `
                    <li>
                        <img src=${produce.src}>
                        <p>${produce.name}</p>

                         ${produce.discountedPrice ? 
                    `<p class="item-price original-price" style="text-decoration: line-through;">${formatCurrency(produce.price)}</p>
                     <p class="item-price discounted-price">${formatCurrency(produce.discountedPrice)}</p>`
                    :
                    `<p class="item-price">${formatCurrency(produce.price)}</p>`
                        }
                   </li>
        `
        //formatCurrency deixa o ${produce.price} em real
        console.log(myLi)        
});
*/


/* 
//modelo mais simples com apenas a array sem efeito de linha atravessada no valor original----------------------------------------

productArray.forEach(produce => {//mesma coisa ali colocando myLi += '<li>...menuOptions
    myLi = myLi + `
                    <li>
                        <img src=${produce.src}>
                        <p>${produce.name}</p>
                        <p class="item-price">$${formatCurrency(produce.price)}</p>
                   </li>
        `
        //formatCurrency deixa o ${produce.price} em real
        console.log(myLi)        
});

*/

function desconto() {
    if (digitCupons.value === "BURGER10") {

        const newFilteredItems = filteredItemsDesc.map((item) => ({
            ...item,
            discountedPrice: item.price * 0.9

            //abaixo o modo mais simples sem o (filteredItemsDesc)desconto no filtro
        /*const newMenuOptions = menuOptions.map((item) => ({
            ...item, // ... = Spread Operator deixar o restante do array igual
            discountedPrice: item.price * 0.9 //1-subtrai 10% no valor //discountedPrice: usado para criar a linha atravessado no valor original, forma sem a linha seria: "price: item.price * 0.9"
*/  


        }))
        //abaixo sem o (filteredItemsDesc)desconto no filtro
        //showAll(newMenuOptions)// chama o showall para realizar a mudança do desconto e defini no showall o (newMenuOptions) que é igual ao menuOptions

        discountApplied = true; // Marca que o desconto foi aplicado

        showAll(newFilteredItems);
        filteredItemsDesc = newFilteredItems; // Atualize os itens filtrados com desconto
       
    }
}

function sumAllItems() {
    
    //const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0) //modo mais simples sem o (filteredItemsDesc)desconto no filtro

    //const totalValue = filteredItemsDesc.reduce((acc, curr) => acc + curr.price, 0); //modo avancado 2 abaixo faz somar os items se estiverem com desconto e com filtro e caso nao soma eles tambem
    
    const totalValue = filteredItemsDesc.reduce((acc, curr) => {
        const price = curr.discountedPrice || curr.price; // Usa o preço com desconto se disponível
        return acc + price;
    }, 0);

    list.innerHTML = `
        <li>
        <p>Valor Total é: ${formatCurrency(totalValue)}</p>
        </li>
        `
    //console.log(totalValue)
}


const cardapio = document.querySelector(".select")//mapeado o select no html

function filterItems() {

    const selectedValue = cardapio.value; //definir uma variavel para o minha varivel mapeada do select(cardapio) + valor que esta nela no html value

    if (selectedValue == "all") {
        //showAll(menuOptions) //abaixo o modo mais simples sem o (filteredItemsDesc)desconto no filtro
        filteredItemsDesc = menuOptions;
    }else{//abaixo o modo mais simples sem o (filteredItemsDesc)desconto no filtro
        /*const filteredItems = menuOptions.filter(item => item.menu === selectedValue);
        showAll(filteredItems)*/

        filteredItemsDesc = menuOptions.filter(item => item.menu === selectedValue);
        
        
        console.log(filteredItemsDesc)
    
    }

        

        // Se o desconto foi aplicado, aplique-o novamente aos itens filtrados
    if (discountApplied) {//modo avancado 2 (discountApplied) somar os itens filtrado com desconto remova se for tirar o avancado 2
        filteredItemsDesc = filteredItemsDesc.map((item) => ({
            ...item,
            discountedPrice: item.price * 0.9
        }))}

    showAll(filteredItemsDesc);//remova se for tirar o filteredItemsDesc
    }

clickApply.addEventListener("click", desconto)
sumAll.addEventListener("click", sumAllItems)
cardapio.addEventListener("change", filterItems)//evento change(mudar para usar no select ativa quando muda de opção)
//buttonStart.addEventListener("click", () => showAll(menuOptions)) forma com botao mapeado aqui,
//colocado (menuOptions) no showall pois la em cima foi adicionado um parametro dentro dele por esse motivo ele ficou sem chamar pois faltava definir,
// na sequencia temos que colocar () => arrow function pois quando definimos um parametro para a function "(menuOptions)"  na addeventlistener faz ela chamar instataneamente a função sem clicar, agora ele chama quando eu clico no botao.


