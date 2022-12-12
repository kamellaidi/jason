import React, { useState } from 'react';
import './styles.css';
import api from '../../../services/api';

const Form = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    try {
      const res = await api.post('/list', {
        name, 
      });
      if (res.status === 200) {
        setName('');
        setMessage('Bienvenue à bord !');
      } else {
        setMessage('Erreur moussaillon !');
      }
    } catch (err) {
      console.log(err);
    }
    window.location.reload(false);
    // je n'arrivais pas à mettre à jour en direct la liste 
  };

  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>

      <form onSubmit={handleSubmit} class='new-member-form'>
        <label for='name'>Nom de l&apos;Argonaute</label>

        <input
          id='name'
          name='name'
          type='text'
          placeholder='Charalampos'
          onChange={(e) => setName(e.target.value)}
        />

        <button type='submit'>Envoyer</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>

      </form>
    </>
  );
};

export default Form;
