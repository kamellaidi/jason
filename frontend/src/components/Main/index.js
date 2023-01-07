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

  useEffect(() => {
    const dataFetch = async () => {
      const response = await api.get('/list');
      setData(response.data);
      setPosted(false);
    };
    dataFetch();
  }, [posted]);

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
        setPosted(true);
      }
    } catch (err) {
      console.log(err);
      setMessage('Erreur moussaillon !');
    }
  };

  return (
    <main>
      <Form handleSubmit={handleSubmit} message={message} setName={setName} />
      <Lists lists={data} />
    </main>
  );
};

export default Main;
