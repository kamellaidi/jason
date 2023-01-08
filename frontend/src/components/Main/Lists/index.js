import './styles.css';

const Lists = ({ lists, handleDelete }) => {

  return (
    <>
      <h2>Membres de l'équipage</h2>
      <section class='member-list'>
        {console.log(lists)}
        {lists &&
          lists.map((list) => {
            return (
              <div class='member-item' onClick={() => handleDelete(list.id)} key={list.id} >
                {list.name}
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Lists;
