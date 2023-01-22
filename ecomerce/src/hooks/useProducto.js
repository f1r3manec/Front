import React, { useContext,  useState,useEffect } from "react";
import {fetchAplicacion} from'@/helpers/fetch';
import {decodeResponse} from "@/helpers/decodeAnswerequest";
import {DataContext} from '@/context/ContextProvider'
import {metodosPeticion,endPoints,uri} from '@/assets/constantes'
export const useProducto = () => {
  
  const {stateApp,setStateApp} = useContext(DataContext)
  const [data, setData] = useState(null);
  const [listaProductos, setListaProductos] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  


  const peticiones = async (endPonint) => {
    const res = await fetchAplicacion(endPonint);
    setData(decodeResponse(await res.json()));
  };
  useEffect(() => {
   if (data!==null )
   {
    setStateApp({...stateApp,listaProductos:data})
    setIsLoading(false)
   }
  }, [data])

  useEffect(() => {
    setListaProductos(stateApp.listaProductos)
  }, [stateApp.listaProductos])
  const seleccionarProductoActivo=(idProducto)=>{
    const {listaProductos}=stateApp;
    const productoActivo=listaProductos.filter(
         (producto)=>{
           if(producto.idProducto===idProducto) return producto
         }
       )
       setStateApp({...stateApp, producto:productoActivo[0]})
  }
  const eliminarProducto=async (idProducto, estado)=>{
    if (estado)
      {
        const res= await fetchAplicacion(endPoints.EliminarProducto,idProducto,metodosPeticion.DELETE, uri.idPaciente )
      }else {
        const res= await fetchAplicacion(endPoints.ActivarProducto,idProducto,metodosPeticion.PUT, uri.idPaciente )
      }
      const listadonuevo =stateApp.listaProductos.map((producto)=>{
        if( producto.idProducto===idProducto)
        {
          producto.productoActivo=!estado
        }
        return producto
      })
      actualizarContext(listadonuevo)

  }
  const actualizarContext=(estado)=>{
        setStateApp({...stateApp,listaProductos:estado})
  }
  const getProductoActivo=()=>{
    return stateApp.producto
  }
  
  
  return { peticiones, isLoading, listaProductos,seleccionarProductoActivo,eliminarProducto,getProductoActivo };


};


