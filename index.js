var container = document.createElement('div')
container.setAttribute('class','container');

	var row = document.createElement('div')
	row.setAttribute('class','row')

		var column1 = document.createElement('div')
		column1.setAttribute('class','col-lg-4 col-sm-12')

			var card1 = document.createElement('div')
			card1.setAttribute('class','card')
			card1.style="width: 100%"

				var cardtitle1 = document.createElement('h5')
				cardtitle1.setAttribute('class','card-title')
				cardtitle1.id='head1'

					var img1 = document.createElement('img')
					img1.setAttribute('src','...')
					img1.setAttribute('class','card-img-top')
					img1.setAttribute('alt','...')
					img1.setAttribute('id','flag1')

					var cardbody1 = document.createElement('div')
					cardbody1.setAttribute('class','card-body')

						var cardtext1 = document.createElement('div')
						cardtext1.setAttribute('class','card-text')
						cardtext1.id ='para'
						
						var text1 = document.createElement('span')
						text1.id='capital1'
						var br = document.createElement('br')
						var text2 = document.createElement('span')
						text2.id='region1'
						var text3 = document.createElement('p')
						text3.id='cc1'

						cardtext1.append(text1,br,text2,text3)

						var image1 = document.createElement('a')
						image1.setAttribute('href','#img1')
						image1.setAttribute('class','btn btn-outline-light')
						image1.setAttribute('id','weather1')
						image1.innerHTML='Click for Weather'

					cardbody1.append(cardtext1,image1)

			card1.append(cardtitle1,img1,cardbody1)

		column1.append(card1)


		var column2 = document.createElement('div')
		column2.setAttribute('class','col-lg-4 col-sm-12')

			var card2 = document.createElement('div')
			card2.setAttribute('class','card')
			card2.style="width: 100%"

				var cardtitle2 = document.createElement('h5')
				cardtitle2.setAttribute('class','card-title')
				cardtitle2.id='head2'

					var img2 = document.createElement('img')
					img2.setAttribute('src','...')
					img2.setAttribute('class','card-img-top')
					img2.setAttribute('alt','...')
					img2.setAttribute('id','flag2')

					var cardbody2 = document.createElement('div')
					cardbody2.setAttribute('class','card-body')

						var cardtext2 = document.createElement('div')
						cardtext2.setAttribute('class','card-text')
						cardtext2.id ='para'
						
						var text4 = document.createElement('span')
						text4.id='capital2'
						var br1 = document.createElement('br')
						var text5 = document.createElement('span')
						text5.id='region2'
						var text6 = document.createElement('p')
						text6.id='cc2'

						cardtext2.append(text4,br1,text5,text6)

						var image2 = document.createElement('a')
						image2.setAttribute('href','#img1')
						image2.setAttribute('class','btn btn-outline-light')
						image2.setAttribute('id','weather2')
						image2.innerHTML='Click for Weather'

					cardbody2.append(cardtext2,image2)

			card2.append(cardtitle2,img2,cardbody2)

		column2.append(card2)

		var column3 = document.createElement('div')
		column3.setAttribute('class','col-lg-4 col-sm-12')

			var card3 = document.createElement('div')
			card3.setAttribute('class','card')
			card3.style="width: 100%"

				var cardtitle3 = document.createElement('h5')
				cardtitle3.setAttribute('class','card-title')
				cardtitle3.id='head3'

					var img3 = document.createElement('img')
					img3.setAttribute('src','...')
					img3.setAttribute('class','card-img-top')
					img3.setAttribute('alt','...')
					img3.setAttribute('id','flag3')

					var cardbody3 = document.createElement('div')
					cardbody3.setAttribute('class','card-body')

						var cardtext3 = document.createElement('div')
						cardtext3.setAttribute('class','card-text')
						cardtext3.id ='para'
						
						var text7 = document.createElement('span')
						text7.id='capital3'
						var br2 = document.createElement('br')
						var text8 = document.createElement('span')
						text8.id='region3'
						var text9 = document.createElement('p')
						text9.id='cc3'

						cardtext3.append(text7,br2,text8,text9)

						var image3 = document.createElement('a')
						image3.setAttribute('href','#img1')
						image3.setAttribute('class','btn btn-outline-light')
						image3.setAttribute('id','weather3')
						image3.innerHTML='Click for Weather'

					cardbody3.append(cardtext3,image3)

			card3.append(cardtitle3,img3,cardbody3)

		column3.append(card3)


	row.append(column1,column2,column3)

container.append(row)
document.body.append(container)

							 
//fetching data through api request
fetch('https://restcountries.eu/rest/v2/all')
.then((resp)=>{
return resp.json();
})
.then((data)=>{
	// var para = document.getElementByClassName('card-text');
	console.log(data);
	
	head1.innerHTML = data[0].name;
	head2.innerHTML = data[1].name;
	head3.innerHTML = data[2].name;
	img1.src = data[0].flag;
	img2.src = data[1].flag;
	img3.src = data[2].flag;
	text1.innerHTML = 'Capital:'+ data[0].capital;
	text2.innerHTML = 'Region:'+ data[0].region;
	text3.innerHTML = 'Country Code:'+ data[0].alpha3Code;
	text4.innerHTML = 'Capital:'+ data[1].capital;
	text5.innerHTML = 'Region:'+ data[1].region;
	text6.innerHTML = 'Country Code:'+ data[1].alpha3Code;
	text7.innerHTML = 'Capital:'+ data[2].capital;
	text8.innerHTML = 'Region:'+ data[2].region;
	text9.innerHTML = 'Country Code:'+ data[2].alpha3Code;
	image1.href= 'http://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=cf10aa90261638e49ec62344d097b5ce'
	image2.href= 'http://api.openweathermap.org/data/2.5/weather?q=Mariehamn&appid=cf10aa90261638e49ec62344d097b5ce'
	image3.href= 'http://api.openweathermap.org/data/2.5/weather?q=Tirana&appid=cf10aa90261638e49ec62344d097b5ce'

	
})
.catch((err)=>{
	console.log(err);
})
