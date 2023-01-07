import './styles.css';

const Lists = ({lists}) => {

  return (
    <>
      <h2>Membres de l'équipage</h2>
      <section class='member-list'>
        {console.log(lists)}
        {lists &&
          lists.map((list) => {
            return <div class='member-item'>{list.name}</div>;
          })}
      </section>
    </>
  );
};

export default Lists;
