const url="http://localhost:3000/creatures"
export async function request(method, route, body=null){
    
    const response= await fetch(`${url}${route}`,{
        method:method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body) ?? null
    })
    if(response.ok){
        throw new Error(`response status: ${response.status}` )
    }
    return await response.json()
}

export async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
    
    
  } catch (error) {
    console.error(error.message);
  }
}

// filter by type
export async function filterTypeApi(type){
     try {
     const response= await fetch(`${url}?type=${type}`)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }
     return await response.json()
    
    } catch (error) {
    console.error(error.message);
  }
}


export async function searchNameApi(name){
     try {
     const response= await fetch(`${url}?q=${name}`)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }
     return await response.json()
     } catch (error) {
    console.error(error.message);
  }
}
export async function searchFilterApi(name,type){
     try {
     const response= await fetch(`${url}?type=${type}&q=${name}`)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }
     return await response.json()
     } catch (error) {
    console.error(error.message);
  }
}



