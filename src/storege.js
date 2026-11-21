const filterKey= "lastFilter"
const draftAdd= "formDraft"
export function saveFilter(type){
    localStorage.setItem(filterKey,type)
}
export function getLastFilter(){
    return localStorage.getItem(filterKey)||""
}
export function formDraft(obj){
    sessionStorage.setItem(draftAdd,JSON.stringify(obj))
}
export function getFormDraft(){
   const dt= sessionStorage.getItem(draftAdd)
   return JSON.parse(dt)
}