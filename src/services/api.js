export async function fetchData() {
  const url = `http://localhost:3000/creatures`;
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
    const url = `http://localhost:3000/creatures`;
     try {
     const response= await fetch(url)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }
     return await response.json()
    
    } catch (error) {
    console.error(error.message);
  }
}


export async function searchNameApi(name){
     const url=`http://localhost:3000/creatures`;
     try {
     const response= await fetch(url)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }
     return await response.json()
     } catch (error) {
    console.error(error.message);
  }
}




