import './App.css';
import { useState } from 'react';
import Pelicula from './Pelicula';
import MoviesJSON from './movies.json';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function App() {

	const [paginaActual, setPaginaActual ] = useState(1);

	let movies = MoviesJSON;
  return(
	<PageWrapper>
		{movies.map(movie => 
			<Pelicula titulo={movie.titulo} 
					  calificaion ={movie.calificaion}  
					  director={movie.director}  
					  actores={movie.actores}  
					  fecha={movie.fecha}  
					  duracion={movie.duracion}  
					  img={movie.img} 
					  >
			{movie.desciption}
			</Pelicula>
		)}

		<Paginacion pagina = {paginaActual} total = {4} onChange={(pagina) => {
			setPaginaActual(pagina);
		}}/>
	</PageWrapper>
  );
}

export default App;
