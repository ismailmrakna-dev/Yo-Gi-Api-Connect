const url="http://localhost:3000/creatures"
import { fetchData, request   } from "./services/api.js"
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
     let newurl=`${url}?&q=${obj.searchTar}&_sort=${obj.sortBy}&_order=${obj.order}`
     if(obj.type!=="ALL"){
        newurl += `&type=${type}`
     }
     const response= await fetch(newurl)
     if(!response.ok){
      throw new Error(`Response Error: ${response.status}`)
     }

     return await response.json()
}

export async function removeMons(monstId){
  await request('DELETE',`/${monstId}`)
}