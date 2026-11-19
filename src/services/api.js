const url="http://localhost:3000/creatures"
export async function request(method, route, body=null){
    
    const response= await fetch(`${url}${route}`,{
        method:method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body) ?? null
    })
    if(!response.ok){
        throw new Error(`response status: ${response.status}` )
    }
    return await response.json()
}

export async function fetchData() {
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
}


