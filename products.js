function formatCurrency(amount, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(amount);
}

const menuOptions = [

    { name: 'X-Salada', price: 30, menu: "meat", src: './assets/xsalada.jpeg' },
    
    { name: 'X-Bacon', price: 34, menu: "meat", src: './assets/xbacon.png' },
    
    { name: 'X-Bacon Egg', price: 39, menu: "meat", src: './assets/bacon-egg.png' },
    
    { name: 'Monstruoso', price: 50, menu: "meat", src: './assets/monstruoso.png' },
    
    { name: 'Big Vegano', price: 55, menu: "vegan", src: './assets/xvegan.png' },
    
    { name: 'X-Vegan', price: 45, menu: "vegan", src: './assets/monstruoso-vegan.png' },
    
    { name: 'Mega Chicken', price: 60, menu: "chicken", src: './assets/monstruoso-chicken.jpeg' },
    
    { name: 'Double Chicken', price: 55, menu: "chicken", src: './assets/double-chicken.png' },
    
    { name: 'X-Chicken', price: 45, menu: "chicken", src: './assets/xchicken.jpeg' },
    ]
    

    /*//Gastos para apê
    
    let gastos = [ 
        
    {gasto: "piso", valor: 4100},
    {gasto: "lava e seca", valor: 4500},
    {gasto: "fogao", valor: 2400},
    {gasto: "aquecedor", valor: 2300},
    {gasto: "mesa", valor: 1350},
    {gasto: "marmore", valor: 3800},
    {gasto: "sofa", valor: 1400},
    {gasto: "cama bryan", valor: 1000},
    {gasto: "depurador", valor: 400},
    {gasto: "cuba pia", valor: 300},
    {gasto: "chuveiro", valor: 90},
    {gasto: "torneira cozinha", valor: 300},
    {gasto: "torneira banheiro", valor: 60},
    {gasto: "box", valor: 600},
    {gasto: "cama bau", valor: 640},
    {gasto: "toalheiro", valor: 400},
    ]


    const total = gastos.reduce((acc, value)=>{
        return acc + value.valor
        
        },0)

        const formattedTotal = formatCurrency(total);

        
        console.log(formattedTotal)*/
        
    
    