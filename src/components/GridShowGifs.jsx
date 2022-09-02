
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";


export const GridShowGifs = ({ gridCategory }) => {

const {images, isLoading} = useFetchGifs(gridCategory);


    return (
        <>
            <h3>{gridCategory}</h3>
            {/* forma 1 de ternario {isLoading ? (<h2>Cargando...</h2>): null} */}
            {/* forma 2 de ternario */}
            {isLoading && (<h2>Cargando...</h2>)} 
            {/* forma 3 seria crear un componente de loading que se muestre si isLoading es true */}
            
            <div className="card-grid">
                {images.map((image) =>  (
                        <GifCard 
                        key={image.id} 
                        {...image} />)
                


                    // <li key={image.id}>{image.title}</li> )
                )}
            </div>
        </>
    )
}
