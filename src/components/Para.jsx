export const Para = ({ task, removefromlist }) => {
  return (
    <div>
      <p>{task}</p>
      <button onClick={() => removefromlist(task)}> remover iten</button>
    </div>
  );
};
