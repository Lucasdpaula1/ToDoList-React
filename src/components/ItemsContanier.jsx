export const ItemsContanier = ({ ArrayList }) => {
  return (
    <div>
      {ArrayList.map((t) => (
        <p>{t}</p>
      ))}
    </div>
  );
};
