import React, { useContext,  useState,useEffect } from "react";
import {fetchAplicacion} from'@/helpers/fetch';
import {decodeResponse} from "@/helpers/decodeAnswerequest";
import {DataContext} from '@/context/ContextProvider'
import {endPoints} from '@/assets/constantes'

const useGetCategorias = () => {
  
  const {stateApp,setStateApp} = useContext(DataContext)
  const [dataCategorias, setDataCategorias] = useState(null);
  const [isLoadingCategorias, setIsLoadingCategorias] = useState(true);
  useEffect(() => {
    getCategorias()
  }, [])
 const getCategorias=async()=>{
    const res = await fetchAplicacion(endPoints.GetCategoriasProductos);
    setDataCategorias(decodeResponse(await res.json()));
  }
useEffect(() => {
    if (dataCategorias!==null )
    {
     setStateApp({...stateApp,categorias:dataCategorias})
     setIsLoadingCategorias(false)
    }
   }, [dataCategorias])
 
const getStateCategorias=()=>{
  return stateApp.categorias;
}  

    return {isLoadingCategorias, getStateCategorias }
}

export default useGetCategorias