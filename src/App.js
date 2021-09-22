import './App.css';
import { useEffect,useState } from 'react';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function App() {

	const [paginaActual, setPaginaActual ] = useState(1);
	const [peliculas, setPeliculas] = useState([]);
	const TOTAL_POR_PAGINA = 7;

	useEffect(() => {
		buscarPeliculas();
	}, []);

	// Pulling data from servers
	const buscarPeliculas = async() =>{
		//let url = "https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json";
		let url = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json';

		let respuesta = await fetch(url,{
			"method" : 'GET',
			"headers" : {
				"Accept" : 'application/json',
				"Content-Type" : 'application/json',
				"Origin" : 'https://raw.githubusercontent.com/'
			}
		});
		let json = await respuesta.json();
		setPeliculas(json);
	}

	
	const getTotalPaginas = () => {
		let cantidadTotalPeliculas = peliculas.length;
		return Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA);
	}

	let peliculasPorPagina = peliculas.slice(
		 (paginaActual - 1) * TOTAL_POR_PAGINA, 
		 paginaActual * TOTAL_POR_PAGINA
		 );
  
	return(
	<PageWrapper>

		{peliculasPorPagina.map(movie => 
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
