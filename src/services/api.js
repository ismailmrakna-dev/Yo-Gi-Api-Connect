const url="http://localhost:3000/creatures"
export async function request(method, route, body=null){
    const options={
        method:method
    }
    if (body!==null){
        options.headers= {"Content-Type": "application/json"}
        options.body=JSON.stringify(body)
    }
    console.log(`${url}${route}`)
    const response= await fetch(`${url}${route}`,options)
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


