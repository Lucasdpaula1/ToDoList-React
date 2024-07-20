import { Para } from "./Para";

export const ItemsContanier = ({ ArrayList, remove }) => {
  return (
    <div>
      {ArrayList.map((t) => (
        <Para task={t} removefromlist={remove} />
      ))}
    </div>
  );
};
