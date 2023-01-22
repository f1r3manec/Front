import Swal from 'sweetalert2/dist/sweetalert2.js'

export const mensajeErrorPeticion=(mensaje)=>{
    Swal.fire({
        title: 'Error!',
        text: `Error por favor notifique el siguiente error a Soporte: ${mensaje}`,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}