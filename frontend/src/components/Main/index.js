import React, { useEffect, useState } from 'react';
import Form from './Form';
import Lists from './Lists';
import api from '../../services/api';

import './styles.css';

const Main = () => {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [posted, setPosted] = useState(false);
  const [deleted, setDeleted] = useState(false);


  useEffect(() => {
    const dataFetch = async () => {
      const response = await api.get('/list');
      setData(response.data);
    };
    dataFetch();
  }, [posted, deleted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    try {
      const res = await api.post('/list', {
        name,
      });
      if (res.status === 200) {
        setMessage('Bienvenue à bord !');
        setPosted(true);
        setTimeout(() => {
          setPosted(false);
          setMessage('');
          setName('');
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      setMessage('Erreur moussaillon !');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/list/${id}`, {
        params: {
          id,
        },
      });
      console.log(response.data);
      setMessage(response.data);
      setDeleted(true);
      setTimeout(() => {
        setDeleted(false);
        setMessage('');
      }, 1500);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  return (
    <main>
      <Form handleSubmit={handleSubmit} message={message} setName={setName} />
      <Lists lists={data} handleDelete={handleDelete} />
    </main>
  );
};

export default Main;
