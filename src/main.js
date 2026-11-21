
import { creerCards, createMessage, creerOneCard} from "./ui.js"
import {  fetchData,  } from "./services/api.js"
import {  searchFilterSortApi  } from "./rules.js"



const state={
    searchTar:"",
    type:"ALL",
    sortBy:"name",
    order:"desc"
}
const search = document.querySelector("#search")
const filter = document.querySelector("#filters")
const sort = document.querySelector("#btn-sort")
const order = document.querySelector("#btn-order")
const currentPage = window.location.pathname;
if (currentPage.includes("index.html")) {
    initHomePages()
}

async function initHomePages() { 
    console.log("Home Page");
    ///paginagtion creation of cards Monsters
   try {
    createMessage("... Waiting for Data ...")
    let cardsData=[]
    console.log(await fetchData())
    cardsData = await fetchData()
    creerCards(cardsData)
   } catch {
    createMessage("ERR_CONNECTION_REFUSED");
   }
   creerOneCard()
}  
  
    // search filter sort events
    search.addEventListener("input", async (e) => {
        const name = e.target.value.toLowerCase().trim()
        state.searchTar = name
        createMessage("... Waiting for Data ...")
        creerCards(await searchFilterSortApi(state))
    })
    filter.addEventListener("click", async (e) => {
        const btnCLick = e.target.closest(".btn-filter")
        if(!btnCLick) return
        if(btnCLick.textContent==="ALL") return
        createMessage("... Waiting for Data ...")
        state.type = btnCLick.textContent
        
        creerCards(await searchFilterSortApi(state))
    })
    sort.addEventListener("change", async () => {
        createMessage("... Waiting for Data ...")
        state.sortBy = sort.value
      
        creerCards(await searchFilterSortApi(state))
    })
    order.addEventListener("change", async () => {
        createMessage("... Waiting for Data ...")
        console.log(order.value)
        console.log(state.sortBy)
        state.order = order.value
        console.log(order.value)
        createMessage("... Waiting for Data ...")
        creerCards(await searchFilterSortApi(state))
    })
    


    // let offset = 0
    // let page = 1
    // const btnSearch = document.querySelector("#btn-search")
    // btnSearch.addEventListener("click", async (event) => {
    //     event.stopPropagation()
    //     createBtn(1)
    //     creerCards(arrsearch)
    //     const prevPage = document.querySelector('.prev-btn')
    //     const nextPage = document.querySelector('.next-btn')
    //     const numPage = document.querySelector('.Npage-btn')

    //     prevPage.addEventListener("click", async (e) => {
    //         e.stopPropagation()
    //         if (offset - 20 <= 0) {
    //             offset = 0
    //             page = 1
    //             let arrsearch = []
    //         arrsearch = await searchNameApi(searchName, 30, offset)
    //         creerCards(arrsearch)
    //         numPage.textContent = page
    //         }
    //         else{
    //         offset -= 20
    //         page -= 1
    //         let arrsearch = []
    //         arrsearch = await searchNameApi(searchName, 30, offset)
    //         creerCards(arrsearch)
    //         numPage.textContent = page}
    //     })
    //     nextPage.addEventListener("click", async (e) => {
    //         e.stopPropagation()
    //         offset += 20
    //         page += 1
    //         let arrsearch = []
    //         arrsearch = await searchNameApi(searchName, 30, offset)
    //         creerCards(arrsearch)
    //         numPage.textContent = page
    //     })
    // })
  

