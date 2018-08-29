
class Request {

	static requestWithBody = async (url, method, data, token) => {
		console.log('Request: ' + method + ' ' + url);
		
		let fetchRequest = await fetch(url, {
			method: method,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Endpoint': 'android/react/native',
				'Token': token
			},
			body: JSON.stringify(data)
		});

		console.log(fetchRequest)

		return await fetchRequest.json();
	}

	static requestWithoutBody = async (url, method, token) => {
		console.log('Request: ' + method + ' ' + url);
		
		let fetchRequest = await fetch(url, {
			method: method,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Endpoint': 'android/react/native',
				'Token': token
			},
		});

		console.log(fetchRequest)

		return await fetchRequest.json();
	}
}

export default Request;