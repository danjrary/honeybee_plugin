window.onmouseover = function(e) {
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
		

		data = {"query":{"match":{"title":{"query":title}}}}
		return_data = {'honestbee':{'item':'好吃雞腿排', 'price':49},
						'carrefour':{'item':'無谷雞腿牌', 'price':30}}

		if (return_data['carrefour']['price'] <= return_data['honestbee']['price']){
			console.log(return_data['honestbee']['price'])
			
			var node = document.createElement('div')
			hoveredElement = e.target
			hoveredElement.appendChild(node)
			console.log(hoveredElement)
		}
	}
},function(e){
	console.log('leave hover')
}