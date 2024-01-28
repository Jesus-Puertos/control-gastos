import {useState, useEffect } from "react"
import {CircularProgressbar, buildStyles} from 
'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Swal from 'sweetalert2'
const ControlPresupuesto = ({
    presupuesto,
    gastos,
    setGastos,
    setPresupuesto,
    setIsValidPresupuesto,
}) => {
    const [porcentaje, setPorcentaje] = useState(0); 
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
   
 useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0);

    const totalDisponible = presupuesto - totalGastado;

    //Calcular el porcentaje gastado

    const nuevoPorcentaje = (((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2);
    

    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(()=>{
        setPorcentaje(nuevoPorcentaje)
    }, 500);

 }, [gastos])

const formatearCantidad = (cantidad) =>{
    return cantidad.toLocaleString('es-MX',{
        style: 'currency',
        currency: 'MXN',
    })
}

const handleResetApp = () => {
   Swal.fire({
      
        title: "Seguro que quieres reiniciar la app?",
        text: "Esta accion no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, reiniciar la app!",
        cancelButtonText: "Cancelar",
               
      }).then((resultado) => {
        if (resultado.isConfirmed) {
          const Toast =  Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "App reiniciada!"
              });
          setGastos([]);
          setPresupuesto(0);
          setIsValidPresupuesto(false);
          localStorage.clear();
        }
      });
      

  
}


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        
        <div>
            <CircularProgressbar
                styles={buildStyles({
                  pathColor: porcentaje> 100 ? '#dc2626' : '#3B82F6',
                  trailColor: '#F5F5F5',
                  textColor:  porcentaje> 100 ? '#dc2626' : '#3B82F6',

                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>

        <div className="contenido-presupuesto">
            <button className="reset-app" type="button" onClick={handleResetApp}>
                Reiniciar App
            </button>
            <p>
                <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible:</span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado:</span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto