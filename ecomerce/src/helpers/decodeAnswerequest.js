import {mensajeErrorPeticion} from '@/helpers/messages'
export const decodeResponse =(jsonResponse)=>{
    
    if (jsonResponse.hasError)
    {
        console.log('error')
        mensajeErrorPeticion(jsonResponse.mensajeError)
        return false;
    }else 
    {
        return jsonResponse.payload 
    }
}