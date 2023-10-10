
const btnClique = document.getElementById('btnClique');
const lblValor = document.getElementById('lblValor');
const btnselic = document.getElementById('btnselic');
const lblselic = document.getElementById('lblselic');
const btneuro = document.getElementById('btneuro');
const lbleuro = document.getElementById('lbleuro');
const btndolar = document.getElementById('btndolar');
const lbldolar = document.getElementById('lbldolar');


const api = axios.create({
    baseURL: "https://www.mercadobitcoin.net/api/BTC/ticker/"
})

async function consulta()
{
    const response = await api.get()
    lblValor.innerHTML = "R$" + (response.data.ticker.buy)
}

btnClique.onclick = ()=>{
    consulta();
}


const api2 = axios.create({
    baseURL: "https://api.hgbrasil.com/finance/taxes?format=json-cors&key=3dfb0202"
})

async function consultaselic()
{
    const responde = await api2.get()
    lblselic.innerHTML = (responde.data.results[0].selic) + "%";
}

btnselic.onclick = ()=>{
    consultaselic();
}


const api3 = axios.create({
    baseURL: "https://api.hgbrasil.com/finance/?format=json-cors&key=3dfb0202"
})

async function consultadolar()
{
    const responde2 = await api3.get()
    lbldolar.innerHTML = "R$" + (responde2.data.results.currencies.USD.buy)
}
 btndolar.onclick = ()=>{
    consultadolar();
 }


 const api4 = axios.create({
    baseURL: "https://api.hgbrasil.com/finance/?format=json-cors&key=3dfb0202"
})

async function consultaeuro()
{
    const responde3 = await api4.get()
    lbleuro.innerHTML = "R$" + (responde3.data.results.currencies.EUR.buy)
}
 btneuro.onclick = ()=>{
    consultaeuro();
 }