import React, { useState } from 'react';
import foto from '../assets/foto.jpeg';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import phone from '../assets/phone.svg';
import '../App.css';

const Personal = () => {
  const [edit, setEdit] = useState(false);
  const [nameValue, setName] = useState('Filipe Gideão Rodrigues');
  const [emailValue, setEmailValue] = useState('filipegrodriguesreal@gmail.com');
  const [phoneValue, setPhoneValue] = useState('(62) 98259-5874');
  const [subnomeValue, setSubnomeValue] = useState('Front-end Developer');
  const [githubValue, setGithubValue] = useState('FilipeVOl');
  const [linkedinValue, setLinkedinValue] = useState('linkedin.com/filipe-gideão-rodrigues');
  const [descValue, setDescValue] = useState('Aplicação do conhecimento de elementos do front-end development, como JS, React, Angular, Typescript, CSS, Git e Linux. Participação no evento Hackathon onde foi desenvolvido um software de aplicação de dados para a permissão de entrada e cadastramento de veículos. Cursos profissionalizantes no site Odin Project e alguns projetos disponíveis na minha conta GitHub');

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
      case 'sub-nome':
        setSubnomeValue(value);
        break;
      case 'github':
        setGithubValue(value);
        break;
      case 'linkedin':
        setLinkedinValue(value);
        break;
      case 'desc':
        setDescValue(value)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <section>
        <div className='name-container'>
          <img src={foto} alt='foto de perfil' className='foto'/>
          <div className='text'>
            {edit ? (
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={handleInputChange}
              />
            ) : (
              <h1 className='name'>{nameValue}</h1>
            )}
              {edit ? (
                <input
                  type='text'
                  name='sub-nome'
                  value={subnomeValue}
                  onChange={handleInputChange}
                />
              ) : (
                <h2 className='subnome'>Front end Developer</h2>
              )}
          </div>
        </div>

        <div className='information-container'>
          <div className='email-container'>  
            <img src={email} alt='email-logo' className='email-logo'/>
            {edit ? (
              <input
              type='email'
              name='email'
              value={emailValue}
              onChange={handleInputChange}
              />
            ) : (
            <p className='email'>{emailValue}</p>
            )}
          </div>

          <div className='linkedin-container'>
            <img src={linkedin} alt='linkedin-logo' className='linkedin-logo'/>
            {edit ? (
              <input
              type='text'
              name='linkedin'
              value={linkedinValue}
              onChange={handleInputChange}
              />
            ) : (
            <p className='linkedin'>linkedin.com/filipe-gideão-rodrigues</p>
            )}
          </div>

          <div className='github-container'>
            <img src={github} alt='github-logo' className='github-logo'/>
            {edit ? (
              <input
              type='text'
              name='github'
              value={githubValue}
              onChange={handleInputChange}
              />
            ) : (
            <p className='github'>FilipeVOl</p>
            )}
          </div>

          <div className='phone-container'>
            <img src={phone} alt='phone-logo' className='phone-logo' />
            {edit ? (
              <input
              type='tel'
              name='phone'
              value={phoneValue}
              onChange={handleInputChange}
              />
            ) : (
              <p className='phone'>{phoneValue}</p>
            )}
          </div>

          <button className='edit' onClick={handleEditClick}>
            {edit ? 'Save' : 'Edit'}
          </button>
        </div>
      </section>

      {edit ? (
              <input
              type='text'
              name='desc'
              value={descValue}
              onChange={handleInputChange}
              />
            ) : (
              <p className='desc'>Aplicação do conhecimento de elementos do front-end development, como JS, React, Angular, Typescript, CSS, Git e Linux.
        Participação no evento Hackathon onde foi desenvolvido um software de aplicação de dados para a permissão de entrada e cadastramento de veículos.
        Cursos profissionalizantes no site Odin Project e alguns projetos disponíveis na minha conta GitHub
      </p>
            )}
      
      <span className='separador'></span>
    </div>
  );
}

export default Personal;
