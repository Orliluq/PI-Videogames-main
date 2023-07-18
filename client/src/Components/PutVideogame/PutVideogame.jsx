// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getGenres, putVideogame, deleteVideogame } from '../../Redux/Action/Action';
// import { Link } from 'react-router-dom';

// const PutVideogame = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
    
//     useEffect(() => {
//         dispatch( getGenres() );
//     },[ dispatch, id ]);
    
//     // Estados
//     const detail = useSelector(  state => state.detail  );
//     const genres = useSelector( state => state.genresFilter );
//     
//      const [ updateVideogame, setUpdateVideogame ] = useState({
//         name: detail.name,
//         description: detail.description,
//         parent_platforms: detail.parent_platforms,
//         background_image: detail.background_image,
//         released: detail.released,
//         rating: detail.rating,
//         genres: detail.genres.map(genre => genre.id)
//     });
//     const [ platformsOptions ] = useState([
//         "Android", 
//         "Nintendo", 
//         "Pc", 
//         "PlayStation", 
//         "Xbox",
//     ]);
//     const [ platformSelect, setPlatformSelect ] = useState( detail.platforms );
//     const [ genreSelect, setGenreSelect ] = useState( detail.genres?.map(g => (g.name ? g.name : g)).join('| ') );
    
//     // Handlers
//     // Guarda los cambios en los estados
//     const handleChange = ( event ) => {
//         const value = event.target.value;
//         const inputName = event.target.name;
        
//         // Evita que se guarden valores nulos en el estado
//         if( value === '' ) return;
        
//         // Guarda los datos en las propiedades correspondientes
//         setUpdateVideogame({
//             ...updateVideogame,
//             [inputName]: Number(value) ? Number(value).toFixed(1) : value,
//         });
//     };
    
//     // Envia los datos al reducer
//     const handleSubmit = ( event ) => {
//         event.preventDefault();
//         if( window.confirm("Are you sure?") === true ) {
//             dispatch( putVideogame( id, updateVideogame ));
//             // También se puede usar dispatch(deleteVideogame(id));
//         }
//     };
    
//     //  Guarda y actualiza los estados según las opciones
//     // Plataformas
//     const handlePlatformSelect = ( event ) => {
//         const platform = event.target.value
        
//         // Si la plataforma ya esta guardada en el estado updateGame o si esta vacío termina la ejecución
//         if( updateVideogame.platforms.includes( platform ) ) return;
//         if(platform === "" ) return;
        
//         // Guarda la plataforma en el estado UpdateGame y en setPlatformSelect
//         setUpdateVideogame({
//             ...updateVideogame,
//             parent_platforms: [...updateVideogame.platforms, platform]
//         });
//         setPlatformSelect([ ...platformSelect, platform  ]);
//     };
//     const handlePlatformDelete = ( evento ) => {
//         const value = evento.target.value;
//         setUpdateVideogame({ ...updateVideogame, platforms: updateVideogame.platforms.filter( platform => platform !== value )})
//         setPlatformSelect( platformSelect.filter( platform => platform !== value ));
//     };
    
//     // Generos
//     const handleGenreSelect = ( event ) => {
//         const genre = event.target.value
//         if( updateVideogame.platforms.includes( genre )) return;
//         if( genre === "" ) return;
        
//         // Obtiene el id del género a partir del nombre
//         const idValue = genres.find( genreDb => genreDb.name === genre).id;
        
//         // Guarda el género en el estado UpdateGame y en setGenreSelect
//         setUpdateVideogame({
//             ...updateVideogame,
//             genres: [ ...updateVideogame.genres, idValue ]

//     return (
//         <div className="updateVideogame">
//             <div className='titleCG'>
//                 <Link to={'/home'}>
//                     <button id='btnHomeCG' className='goHome'> HOME </button>
//                 </Link>
//                 <h1 className='tituloCG'> Update the game </h1>
//             </div>
//             <div id='updateGame' >
//                 {/* Form Create */}
//                 <div className="updateGameContainer">
//                     <form className='form' action="" onSubmit={ handleSubmit } >
//                         {/* Name */}
//                         <div className="sectionInputCG">
//                             <label className='label' htmlFor="name"> Name </label>
//                             <input type="text" className='input' name='name' onChange={ handleChange } required  autoComplete='off' defaultValue={ detail.name } />
//                         </div>
                        
//                         {/* Image */}
//                         <div className="sectionInputCG">
//                             <label className='label' htmlFor="background_image"> Image </label>
//                             <input type="url" id='img' className="input" name='background_image' onChange={ handleChange }  autoComplete='off' defaultValue={ detail.background_image }/>
//                         </div>
                        
//                         {/* Description */}
//                         <div className="sectionInputCG">
//                             <label className='label' htmlFor="description"> Description </label>
//                             <textarea name="description" id='descriptionCG' minLength="100" maxLength="300"   className='input' onChange={ handleChange } cols="30" rows="10" required  autoComplete='off' defaultValue={ detail.description } ></textarea>
//                         </div>
                        
//                         {/* Released */}
//                         <div className="sectionInputCG">
//                             <label className='label' htmlFor="released"> Released </label>
//                             <input type="date" name="released" id="" className="input" onChange={ handleChange } required autoComplete='off' defaultValue={ detail.released }/>
//                         </div>
                        
//                         {/* Rating */}
//                         <div className="sectionInputCG">
//                             <label className='label' htmlFor="rating"> Rating  </label>
//                             <input type="number" step="any" min={0} max={5} minLength="1" className="input" id='inputRating' name='rating' onChange={ handleChange } required autoComplete='off' defaultValue={ detail.rating}/>
//                         </div>
                        
//                         {/* Platforms */}
//                         <div className="parent_platforms">
//                             <div className="sectionInputCG">
//                                 <label className='label' > Platforms </label>
//                                 <select className='selectOptions' name="platforms" onChange={ handlePlatformSelect } >
//                                     <option className='optionsAllCGD' value=""> Selection </option>
//                                         {
//                                             platformsOptions.map((platform, i) => {
//                                                 return(
//                                                     <option className='optionsCG' key={ i } value={ platform }> { platform } </option>
//                                                 )
//                                             })
//                                         }
//                                 </select>
//                             </div>
//                             <div className='tagList'>
//                                 {
//                                     platformSelect.map(( platform, i ) => {
//                                         return(
//                                             <div className='listCG' key={i}>
//                                                 { platform }
//                                                 <button className='btnDelete' type='button' value={ platform } onClick={ handlePlatformDelete }> x </button>
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </div>
//                         </div>
                        
//                         {/* Genres */}
//                         <div className="genresList">
//                             <div className="sectionInputCG">
//                                 <label className='label'> Genres </label>
//                                 <select className='selectOptions' name="platforms" onChange={ handleGenreSelect } >
//                                     <option className='optionsAllCGD' value=""> Selection </option>
//                                     {
//                                         genres.map((genre, i) => {
//                                             return(
//                                                 <option className='optionsCG' key={ i } value={ genre.name } > { genre.name } </option>
//                                             )
//                                         })
//                                     }
//                                 </select>
//                             </div>
//                             <div className='tagList'>
//                                 {
//                                     genreSelect.map(( platform, i ) => {
//                                         return(
//                                             <div className='listCG' key={i}>
//                                                 { platform }
//                                                 <button className='btnDelete' type='button' value={ platform } onClick={ handleGenreDelete }> X </button>
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </div>
//                         </div>
//                         <section className='ScCg'>
//                             <button className='createBtn' type="submit"> Update videogame </button>
//                         </section>
//                     </form>
//                     <div className="cancelBtn">
//                         <a href={`/detail/${id}`}>
//                             <button className='createBtn'>Cancel</button>
//                         </a> 
//                     </div>
//                 </div>
//                 {/* Preview */}
//                 <div className='CardPreview'>
//                     <div id='card'>
//                         <div className='imgCard'>
//                             <img className='img' src={ updateVideogame.background_image } alt='Game' />
//                         </div>
//                         <div className='cardInfo'>
//                             <section className='cardClose'>
//                                 <button className='rating' value={ Math.round(updateVideogame.rating) } > { updateVideogame.rating } </button>
//                                 <section className='platform'>
//                                     { updateVideogame.platforms( updateVideogame.platforms ) }
//                                 </section>
//                                 <h1 className='name'> { updateVideogame.name } </h1>
//                             </section>
//                             <section className='cardOpen'>
//                                 <p className='cardGenres'> 
//                                     { genreSelect.join(", ") } 
//                                 </p>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default PutVideogame;
