const AddElement = ({ add }) => {
  let add1 = "";
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          add1 = event.target.value;
        }}
      />
      <button onClick={() => add(add1)}> enviar</button>
    </div>
  );
};
export default AddElement;
