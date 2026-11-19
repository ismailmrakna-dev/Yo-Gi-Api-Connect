
import { creerCards, createMessage} from "./ui.js"
import {  fetchData, searchNameApi, filterTypeApi, searchFilterApi } from "./services/api.js"




const currentPage = window.location.pathname;
if (currentPage.includes("index.html")) {
    initHomePages()
}

async function initHomePages() { 
    const search = document.querySelector("#search")
    console.log("Home Page");
    ///  paginagtion creation of cards Monsters
      createMessage(" Waiting for Data ...")
    // let cardsData=[]
    // cardsData = await fetchData()
    // creerCards(cardsData)
}
    
 

    // filter search in console
    console.log(await filterTypeApi("LIGHT"))
    console.log(await searchNameApi("magician"))
    console.log(await searchFilterApi("magician","DARK"))

    // // search event
    // let searchName = ""
    // let offset = 0
    // let page = 1

    // search.addEventListener("input", async (e) => {
    //     const name = e.target.value.toLowerCase().trim()
    //     searchName = name
    // })

    // const btnSearch = document.querySelector("#btn-search")
    // btnSearch.addEventListener("click", async (event) => {
    //     event.stopPropagation()
    //     // default Case
    //     if (searchName === "") {
    //         creerCards(cardsData)
    //         return
    //     }

    //     createBtn(1)
    //     let arrsearch = []
    //     arrsearch = await searchNameApi(searchName, 30, offset)
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
  

