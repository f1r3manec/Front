import  { fetchAplicacion }  from "@/helpers/fetch"

export const peticiones =  (endPonint)=>{
    return async ()=>{
        const res= await fetchAplicacion(endPonint)
        console.log(await res.json())
    }
}