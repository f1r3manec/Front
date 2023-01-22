import React, { useContext,  useState,useEffect } from "react";
import {fetchAplicacion} from'@/helpers/fetch';
import {decodeResponse} from "@/helpers/decodeAnswerequest";
import {DataContext} from '@/context/ContextProvider'
import {endPoints} from '@/assets/constantes'


const useGetPresentaciones = () => {
    const {stateApp,setStateApp} = useContext(DataContext)
    const [dataPresentaciones, setDataPresentaciones] = useState(null);
    const [isLoadingPresentaciones, setIsLoadingPresentaciones] = useState(true);
    useEffect(() => {
      getPresentaciones()
    }, [])
   const getPresentaciones=async()=>{
      const res = await fetchAplicacion(endPoints.GetPresentacionesProductos);
      setDataPresentaciones(decodeResponse(await res.json()));
  }
  useEffect(() => {
      if (dataPresentaciones!==null )
      {
       setStateApp({...stateApp,presetaciones:dataPresentaciones})
       setIsLoadingPresentaciones(false)
      }
     }, [dataPresentaciones])
   

     const getStatePresentaciones=()=>{
        return stateApp.presetaciones;
      }  
     return{isLoadingPresentaciones, getStatePresentaciones}
}

export default useGetPresentaciones