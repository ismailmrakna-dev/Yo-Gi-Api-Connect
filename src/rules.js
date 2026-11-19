const url="http://localhost:3000/creatures"

// filter by type

export async function filterTypeApi(type){
     const response= await fetch(`${url}?type=${type}`)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }
     return await response.json()
    
   
}


export async function searchNameApi(name){
     const response= await fetch(`${url}?q=${name}`)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }
     return await response.json()
    
}
export async function searchFilterApi(name,type){
    
     const response= await fetch(`${url}?type=${type}&q=${name}`)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }
     return await response.json()
}

export async function searchFilterSortApi(obj){
    
     const response= await fetch(`${url}?type=${obj.type}&q=${obj.searchTar}&_sort=${obj.sortBy}&_order=${obj.order}`)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }

     return await response.json()
}