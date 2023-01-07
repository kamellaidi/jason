import React from 'react';
import './styles.css';

const Form = ({ handleSubmit, message, setName }) => {
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
        <div className='message'>{message ? <p>{message}</p> : null}</div>
      </form>
    </>
  );
};

export default Form;
