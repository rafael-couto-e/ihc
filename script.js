function display(id) {
	let navigationNew = document.getElementById('navigation-new')
	let navigationList = document.getElementById('navigation-list')
	let newText = document.querySelector('#navigation-new p')
	let listText = document.querySelector('#navigation-list p')
	let search = document.querySelector('#toolbar img')
	var other;

	if (id === 'new-location') {
		other = 'list-locations';
		navigationNew.style.backgroundColor = 'white'
		navigationList.style.backgroundColor = '#dedede'
		newText.style.color = 'navy'
		listText.style.color = 'black'
		newText.style.fontSize = '1.2em'
		listText.style.fontSize = '1em'
		search.style.display = 'inline'
	} else {
		other = 'new-location';
		navigationNew.style.backgroundColor = '#dedede'
		navigationList.style.backgroundColor = 'white'
		newText.style.color = 'black'
		listText.style.color = 'navy'
		newText.style.fontSize = '1em'
		listText.style.fontSize = '1.2em'
		search.style.display = 'none'
	}

	let element = document.getElementById(id)
	let otherElement = document.getElementById(other)

	element.style.display = "block"
	otherElement.style.display = "none"
}

function search() {

}

function remove() {
	
}