const $Moscow = document.querySelector('.moscow')
const $London = document.querySelector('.london')
const $bishkek = document.querySelector('.bishkek')
const $resultContainer = document.querySelector('.resultContainer')
const data = {
	moscow: {
		city: 'Москва',
		subtitle: 'Столица России',
		url: 'https://s1.1zoom.me/b5050/310/Russia_Moscow_Houses_Rivers_Marinas_Evening_Winter_544522_1920x1080.jpg',
		description:
			'Москва – столица России, многонациональный город на Москве-реке в	западной части страны. В его историческом центре находится средневековая крепость Кремль – резиденция российского президента. На ее территории можно посетить Оружейную палату, где выставляются драгоценные предметы, принадлежавшие царской семье. За северо-восточной стеной Кремля раскинулась Красная площадь – символический центр России. Здесь можно увидеть Мавзолей В. И. Ленина, Государственный исторический музей и собор Василия Блаженного с красочными луковичными куполами.',
	},
	london: {
		city: 'Лондон',
		subtitle: 'Столица Великобритании',
		url: 'https://wallpapercave.com/wp/wp2981069.jpg',
		description:
			'Лондон – столица Англии и Соединенного Королевства. История этого современного города уходит во времена римлян. В самом центре Лондона находится здание парламента – Вестминстерский дворец, а также знаменитая часовая башня Биг-Бен и Вестминстерское аббатство. Эта церковь является местом коронации британских монархов. На противоположном берегу Темзы расположено колесо обозрения "Лондонский глаз", с которого открывается панорамный вид не только на южный берег, но и на весь город.',
	},
	bishkek: {
		city: 'Бишкек',
		subtitle: 'Столица Киргизии',
		url: 'https://cdnn1.img.sputniknews-uz.com/img/598/86/5988612_0:257:2731:1793_1920x0_80_0_0_8fb51981bf66cd331e5138678eaab24d.jpg',
		description:
			'Бишкек – это столица Кыргызстана, расположенная у подножия гор Тянь-Шань в Центральной Азии. Отсюда можно добраться до горных хребтов Ала-Тоо и национального парка Ала-Арча, известных своими ледниками и дикой природой. Культурные центры города – монументальный Национальный музей искусств и Театр оперы и балета, размещенный в здании с колоннами. На центральной площади Ала-Тоо установлен памятник герою киргизского эпоса Манасу Великодушному.',
	},
}

window.addEventListener('load', () => {
	$Moscow.classList.add('active')
})

$Moscow.addEventListener('click', (e) => {
	e.preventDefault()
	$Moscow.classList.add('active')
	$London.classList.remove('active')
	$bishkek.classList.remove('active')
	const { city, subtitle, url, description } = data.moscow
	$resultContainer.innerHTML = renderInfo(city, subtitle, url, description)
})

$London.addEventListener('click', (e) => {
	e.preventDefault()
	$London.classList.add('active')
	$Moscow.classList.remove('active')
	$bishkek.classList.remove('active')
	const { city, subtitle, url, description } = data.london
	$resultContainer.innerHTML = renderInfo(city, subtitle, url, description)
})

$bishkek.addEventListener('click', (e) => {
	e.preventDefault()
	$bishkek.classList.add('active')
	$London.classList.remove('active')
	$Moscow.classList.remove('active')
	const { city, subtitle, url, description } = data.bishkek
	$resultContainer.innerHTML = renderInfo(city, subtitle, url, description)
})

function renderInfo(city, subtitle, url, aboutCountry) {
	return `
					<div class="resultContainerHeader">
					<h1>${city}</h1>
					<span>${subtitle}</span>
				</div>
				<div class="resultContainerBody">
					<img
						src="${url}"
						alt=""
						class="countryImg"
					/>
					<p class="aboutCountry">
						${aboutCountry}
					</p>
				</div>
	`
}
