export async function fetchData() {
  const url = ``;
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
    const url = ``;
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
     const url=``;
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




