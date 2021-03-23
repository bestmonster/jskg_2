const balance = document.getElementById('balance')
const money_plus = document.getElementById('money_plus')
const money_minus = document.getElementById('money_minus')

const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')

const amount = document.getElementById('amount')

const dataTransection = [
	{id:1, text:'toffy', amount:+500},
	{id:2, text:'Lays', amount:+700},
	{id:3, text:'Milk', amount:-100},
	{id:4, text:'Rice', amount:-200},
	{id:5, text:'Lotto', amount:+300},
]

const transections = dataTransection

function init() {
	transections.forEach(addDatatoList)
}

function addDatatoList(transections){
	const symbol = transections.amount < 0 ? '-' : '+'
	const status = transections.amount < 0 ? 'text-danger' : 'text-success'
	const item = document.createElement('li')

	item.classList.add(status)
	item.innerHTML=`${transections.text} : <span>${symbol}${Math.abs(transections.amount)}</span> <button type="button" class="btn btn-sm btn-outline-secondary">X</button>`
	list.appendChild(item)
	console.log(status);
	// console.log(transections);
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

function calculateMonney() {
	const amounts = transections.map(transections => transections.amount)
	const total = amounts.reduce((result, item) => (result+=item),0).toFixed(2)
	const income = amounts.filter(item => item > 0).reduce((result, item) => (result+=item),0).toFixed(2)
	const expense = (amounts.filter(item => item < 0).reduce((result, item) => (result+=item),0)*-1).toFixed(2)

	balance.innerText = `฿:` + numberWithCommas(total)
	money_plus.innerHTML = numberWithCommas(income)
	money_minus.innerHTML = numberWithCommas(expense)

	
}

init()
calculateMonney()


