import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';




function App() {

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

		

	</PageWrapper>
  );
}

export default App;
