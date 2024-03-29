import { useState, useEffect } from 'react'

import CerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje';



const Modal = ({
    setModal,
    animarModal,
    setAnimarModal, 
    guardarGasto,
    gastoEditar,
    setGastoEditar
    }) => {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState(''); 
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
        }

    }, []);


    const ocultarModal = () => {
    setAnimarModal(false)
    setGastoEditar({});
    setTimeout(()=>{
        setModal(false)
    },500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');

            setTimeout(()=>{
                setMensaje('');
            }, 3000);
            return;
    }
    guardarGasto({nombre, cantidad, categoria, id, fecha});
}
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
            src={CerrarModal} 
            alt="btn-cerrar-modal"
            onClick={ocultarModal}
            />
        </div>

        <form onSubmit={handleSubmit} action="" className={`formulario ${animarModal ? 'animar': 'cerrar'}`}>
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre del gasto:</label>
                <input type="text" 
                id='nombre'
                name='nombre'
                placeholder='Ej. Gasolina'
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad del gasto:</label>
                <input type="number" 
                id='cantidad'
                name='cantidad'
                placeholder='Ej. 1000'
                value={cantidad}
                onChange={(e)=>setCantidad(Number(e.target.value))}
                />
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoria:</label>

                <select name="categoria" id="categoria" value={categoria} onChange={(e)=> setCategoria(e.target.value)}>

                    <option value="">-- Seleccione --</option>
                    <option value='ahorro'>Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value='hogar'>Hogar</option>
                    <option value="deudas">Deudas</option>
                    <option value="entretenimiento">Entretenimiento</option>
                    <option value="salud">Salud</option>
                    <option value="transporte">Transporte</option>
                    <option value="ropa">Ropa</option>
                    <option value="educacion">Educación</option>
                    <option value="mascotas">Mascotas</option>
                    <option value="regalos">Regalos</option>
                    <option value="otros">Otros</option>


                </select>
               
            </div>

            <input type="submit"
            value={gastoEditar.nombre ? 'Actualiazar Gasto' : 'Agregar Gasto'} />
        </form>

    </div>
  )
}

export default Modal