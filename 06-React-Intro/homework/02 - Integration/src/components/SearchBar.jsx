export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch}>Agregar</button> //funcion flecha para que se ejecute cuando hago click
      </div>
   );
}
