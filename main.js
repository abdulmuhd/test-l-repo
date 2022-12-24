const backendUrl = 'http://localhost:3000/blogs';

async function fetchData() {
	const response = await fetch(backendUrl);
	const data = await response.json();

	return data;
}

const data = fetchData();

data.then(function(data) {
	const dataContainer = document.getElementById('data-container');

	dataContainer.innerHTML = '';

	data.map(dd => {
		const itemElement = document.createElement('div');
		itemElement.innerHTML = dd.author;
		dataContainer.appendChild(itemElement);

	})
});