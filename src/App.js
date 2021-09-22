import './App.css';
import { useState } from 'react';
import Pelicula from './Pelicula';
import MoviesJSON from './movies.json';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function App() {

	const [paginaActual, setPaginaActual ] = useState(1);
	const TOTAL_POR_PAGINA = 7;

	let movies = MoviesJSON;

	const cargarPeliculas = () =>{
		movies = movies.slice(
		(paginaActual - 1) * TOTAL_POR_PAGINA, 
		paginaActual * TOTAL_POR_PAGINA
		);
	}
	

	const getTotalPaginas = () => {
		let cantidadTotalPeliculas = MoviesJSON.length;
		return Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA);
	}

  
	cargarPeliculas();
  
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

		<Paginacion pagina = {paginaActual} total = {getTotalPaginas()} onChange={(pagina) => {
			setPaginaActual(pagina);
		}}/>
	</PageWrapper>
  );
}

export default App;
