async function fetchUrl() {
	const url = 'http://localhost:3000/blogs';
	try {
		const response = await fetch(url);
		const data = await response.json();
		if (data.length > 0) {
			data.forEach(d=>{
				alert(d.author)
			})
		} else {
			
		}
		return data;
	} catch (error) {
		console.error(error);
	}
}

const dataPromise = fetchUrl();
dataPromise.then(function(data) {
	
	let temp = ""
	
	data.forEach((itemData) => {
		temp += "<tr>";
		temp += "<td>" + itemData.id + "</td>";
		temp += "<td>" + itemData.author+ "</td>";
		temp += "<td>" + itemData.qoute + "</td></tr>";
	});
	document.getElementById('data').innerHTML = temp;

});