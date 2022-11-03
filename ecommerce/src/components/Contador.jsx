import { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);
  const date = new Date().toLocaleString();

  const sumar = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={sumar}>Contar</button>
      <div>Haz hecho click {count} veces</div>

      {count > 0 ? <div>La última vez fue el {date}</div> : <div></div>}
    </div>
  );
};