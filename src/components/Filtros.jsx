import {useState,useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className="campo">
                <label htmlFor="filtrar">Filtrar Gastos</label>
                <select name="filtrar" id="filtrar" value={filtro} onChange={(e)=> setFiltro(e.target.value)}>

                <option value="">Todos los gastos</option>
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
        </form>
        
    </div>
  )
}

export default Filtros