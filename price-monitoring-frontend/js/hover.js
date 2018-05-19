document.onmouseover = function(e) {
	title = ''
	amount = ''
	price = ''
	if (e.target.className =='item-product'){
		title_amount = e.target.getElementsByTagName('a')[1].getAttribute('title').split(/\s|-|\//)
		title = title_amount[0]
		amount = title_amount.slice(-1)[0]
		price = e.target.getElementsByClassName('discount-price')[0].innerText.split("$")[1]

		console.log('title: ', title);
		console.log('amout:', amount);
		console.log('price: ',price);
	}
}
