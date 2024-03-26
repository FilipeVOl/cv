import React from 'react'
import { useState } from 'react'



const Education = () => {
  const [edit, setEdit] = useState ('')
  const [titulo, setTitulo] = useState ('UniEvangélica')
  const [curso, setCurso] = useState ('Engenharia de Software')
  const [tempo, setTempo] = useState ('4 anos')
  const [titulo2, setTitulo2] = useState ('Odin Project')
  const [curso2, setCurso2] = useState ('React, JS, HTML, CSS')
  const [tempo2, setTempo2] = useState ('Undetermined')


  const handleEditClick = () => {
    setEdit(!edit);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'titulo':
        setTitulo(value);
        break;
      case 'curso':
        setCurso(value)
        break;
      case 'tempo':
        setTempo(value)
        break;
          default:
        break;
      case 'titulo2':
        setTitulo2(value)
        break;
      case 'curso2':
        setCurso2(value)
        break;
      case 'tempo2':
        setTempo2(value)
      break;
    }
  }

  return (
    <div className='education'>
      
      <h1 className='titulo-edu'>ÁREA ACADÊMICA</h1>

      <div className='edu-container'>
        {edit ? (
          <input
          type='text'
          name='titulo'
          value={titulo}
          onChange={handleInputChange}
          />
        ) : (
          <p className='titulo-univer'>
          {titulo}
        </p>
        )}

        {edit ? (
          <input
          type='text'
          name='curso'
          value={curso}
          onChange={handleInputChange}
          />
        ) : (
        <p>
          {curso}
        </p>
        )}


        {edit ? (
          <input
          type='text'
          name='tempo'
          value={tempo}
          onChange={handleInputChange}
          />
        ) : (
        <p>
          {tempo}
        </p>
        )}
      </div>

      <div className='edu-container'>

        {edit ? (
          <input
          type='text'
          name='titulo2'
          value={titulo2}
          onChange={handleInputChange}
          />
        ) : (
        <p className='titulo-univer'>
          {titulo2}
        </p>
        )}

        
        {edit ? (
          <input
          type='text'
          name='curso2'
          value={curso2}
          onChange={handleInputChange}
          />
        ) : ( 
        <p>
          {curso2}</p>
        )}

        {edit ? (
          <input
          type='text'
          name='tempo2'
          value={tempo2}
          onChange={handleInputChange}
          />
        ) : ( 
        <p>
          {tempo2}</p>
        )}  


        
      </div>

      <div className='button-div'>
      <button className='edit' onClick={handleEditClick}>
      {edit ? 'Save' : 'Edit'}
      </button>
      </div>

    </div>

  )
}

export default Education