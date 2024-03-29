import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatearFecha } from "../helpers";

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

const diccionarioIconos ={
    ahorro: IconoAhorro,
    comida: IconoComida,
    hogar: IconoCasa,
    deudas: IconoGastos,
    entretenimiento: IconoSuscripciones,
    salud:IconoSalud,

    //Cambiar estos iconos
    transporte: IconoOcio,
    ropa: IconoOcio,
    educacion: IconoOcio,
    mascotas: IconoOcio,
    regalos: IconoOcio,
    otros: IconoOcio,

}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
const {nombre, cantidad, categoria, id,fecha} = gasto;

const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={()=> setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
)

const trailingActions = () =>(
    <TrailingActions>
        <SwipeAction destructive={true} onClick={()=>eliminarGasto(id)}>Eliminar</SwipeAction>
    </TrailingActions>
 )


  return (
 <SwipeableList>
        <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
    <div className="gasto sombra">
       <div className="contenido-gasto">
        <img src={diccionarioIconos[categoria]} alt={categoria} />
        <div className="descripcion-gasto">
            <p className="categoria">{categoria}</p>
            <p className="nombre-gasto">{nombre}</p>
            <p className="fecha-gasto">Agregado el: {''}
            <span>{formatearFecha(fecha)}</span>
            </p>
        </div>
       </div>
       <p className="cantidad-gasto">${cantidad}</p>
    </div>
    </SwipeableListItem>
</SwipeableList>
  )
}

export default Gasto