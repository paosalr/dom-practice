import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaStar } from "react-icons/fa"; // Icono decorativo

export default function App() {
  const [elements, setElements] = useState([]);

  // Función para generar un color aleatorio
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // Agregar un nuevo elemento
  const addElement = () => {
    const newElement = { id: uuidv4(), color: getRandomColor() };
    setElements([...elements, newElement]);
  };

  // Vaciar todos los elementos
  const clearElements = () => {
    setElements([]);
  };

  // Eliminar un elemento al hacer clic
  const removeElement = (id) => {
    setElements(elements.filter((el) => el.id !== id));
  };

  return (
    <div className="container">
      <h2>Manipulación del DOM en React</h2>
      <div className="buttons">
        <button onClick={addElement}>Agregar Elemento</button>
        <button onClick={clearElements}>Vaciar Todo</button>
      </div>
      <div className="elements-container">
        {elements.map((el) => (
          <div
            key={el.id}
            className="element"
            style={{ backgroundColor: el.color }}
            onClick={() => removeElement(el.id)} // Se elimina al hacer clic
          >
            <span>Elemento</span>
            <FaStar className="icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
