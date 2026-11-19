
import { creerCards, createMessage} from "./ui.js"
import {  fetchData, searchNameApi, filterTypeApi, searchFilterApi, searchFilterSortApi } from "./services/api.js"



let state={
    searchTar:"",
    type:"DARK",
    sortBy:"name",
    order:"desc"

}
const search = document.querySelector("#search")
const filter = document.querySelector("#filters")
const sort = document.querySelector("#sortBy")
const order = document.querySelector("#order")
const currentPage = window.location.pathname;
if (currentPage.includes("index.html")) {
    initHomePages()
}

async function initHomePages() { 
    console.log("Home Page");
    ///paginagtion creation of cards Monsters
   try {
    createMessage(" Waiting for Data ...")
    let cardsData=[]
    cardsData = await fetchData()
    creerCards(cardsData)
   } catch {
    createMessage("ERR_CONNECTION_REFUSED");
   }
}
    // filter search in console
    console.log( await filterTypeApi("LIGHT"))
    console.log( await searchNameApi("magician"))
    console.log( await searchFilterApi("magician","DARK"))
    console.log( await searchFilterSortApi("magician","DARK"))

    // search event
    
    search.addEventListener("input", async (e) => {
        const name = e.target.value.toLowerCase().trim()
        state.searchTar = name
        createMessage(" Waiting for Data ...")
        creerCards(await searchFilterSortApi(state))
    })
    filter.addEventListener("click", async (e) => {
        const btnCLick = e.target.closest(".btn-filter")
        if(!btnCLick) return
        if(btnCLick.textContent==="ALL") return
        createMessage(" Waiting for Data ...")
        state.type = btnCLick.textContent
        createMessage(" Waiting for Data ...")
        creerCards(await searchFilterSortApi(state))
    })
    sort.addEventListener("change", async (e) => {
        const sortCLick = e.value
        if(!sortCLick) return
        createMessage(" Waiting for Data ...")
        state.sortBy = sortCLick.value
        createMessage("  Waiting for Data ...")
        creerCards(await searchFilterSortApi(state))
    })
    order.addEventListener("change", async (e) => {
        const orderCLick = e.value
        if(!orderCLick) return
        createMessage(" Waiting for Data ...")
        state.sortBy = order.value
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
  

