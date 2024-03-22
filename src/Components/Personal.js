import React, { useState } from 'react';
import foto from '../assets/foto.jpeg';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import phone from '../assets/phone.svg';
import '../App.css';

const Personal = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('Filipe Gideão Rodrigues');
  const [emailValue, setEmailValue] = useState('filipegrodriguesreal@gmail.com');
  const [phoneValue, setPhoneValue] = useState('(62) 98259-5874');

  const handleEditClick = () => {
    setEdit(!edit);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmailValue(value);
        break;
      case 'phone':
        setPhoneValue(value);
        break;
      default:
        break;
    }
  }

  const renderContent = () => {
    if (edit) {
      return (
        <form>
          <input type="text" name="name" value={name} onChange={handleInputChange} />
          <input type="email" name="email" value={emailValue} onChange={handleInputChange} />
          <input type="tel" name="phone" value={phoneValue} onChange={handleInputChange} />
        </form>
      );
    } else {
      return (
        <div>
          <p>Name: {name}</p>
          <p>Email: {emailValue}</p>
          <p>Phone: {phoneValue}</p>
        </div>
      );
    }
  };
    

  return (
    <div>
      <section>
        <div className='name-container'>
          <img src={foto} alt='foto de perfil' className='foto'/>
          <div className='text'>
            <h1>{name}</h1>
            <h2>Front-End Developer</h2>
          </div>
        </div>

        <div className='information-container'>
          <div className='email-container'>  
            <img src={email} alt='email-logo' className='email-logo'/>
            <p className='email'>{emailValue}</p>
          </div>

          <div className='linkedin-container'>
            <img src={linkedin} alt='linkedin-logo' className='linkedin-logo'/>
            <p className='linkedin'>linkedin.com/filipe-gideão-rodrigues</p>
          </div>

          <div className='github-container'>
            <img src={github} alt='github-logo' className='github-logo'/>
            <p className='github'>FilipeVOl</p>
          </div>

          <div className='phone-container'>
            <img src={phone} alt='phone-logo' className='phone-logo' />
            <p className='phone'>{phoneValue}</p>
          </div>

          {renderContent()}

          <button className='edit' onClick={handleEditClick}>
            {edit ? 'Save' : 'Edit'}
          </button>
        </div>
      </section>

      <p className='desc'>Aplicação do conhecimento de elementos do front-end development, como JS, React, Angular, Typescript, CSS, Git e Linux.
         Participação no evento Hackathon onde foi desenvolvido um software de aplicação de dados para a permissão de entrada e cadastramento de veículos.
          Cursos profissionalizantes no site Odin Project e alguns projetos disponíveis na minha conta GitHub
      </p>
      <span className='separador'></span>
    </div>
  );
}

export default Personal;
