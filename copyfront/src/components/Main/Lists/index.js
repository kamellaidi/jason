import React, { useEffect, useState } from 'react';
import './styles.css';

const Lists = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://localhost:4000/list"
        )
      ).json();
      setData(data);
    };
    dataFetch();
  }, []);


  return (
    <>
      <h2>Membres de l'équipage</h2>
      <section class='member-list'>
        {console.log(data)}
        {data && data.map((item) => {
          return <div class='member-item'>{item.name}</div>;
        })}
      </section>
    </>
  );
};

export default Lists;
