import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGenres, getPlatforms, filterVideogamesByGenre, filterCreated, orderByName, orderByRating } from '../../Redux/Action/Action';
import Card from '../Card/Card';
import styles from './Home.module.css';
import Nav from '../Nav/Nav';
import Paginate from '../Paginate/Paginate';
import Loader from '../Loader/Loader';

export default function Home() {

    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.videogames);

    // paginado 
    const [currentPage, setCurrentPage] = useState(1); // paginado arranca en la página 1
    const [videogamesPerPage, setVideogamesPerPage] = useState(15); // setea cuantos VG quiero por pagina
    const indexOfLastVideogame = currentPage * videogamesPerPage; // indice el ultimo VG
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; // indice del primer VG 
    const currentVideogames = allVideoGames.slice(indexOfFirstVideogame, indexOfLastVideogame); // guarda todos los VG que tengo en mi pagina actual
    // p1 -- 0 -- 15
    // p2 -- 16 -- 31
    const ToPaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(getVideogames());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getVideogames());
    }

    const [order, setOrder] = useState('');

    //dispatch del ordenamiento ascendente y descendente
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1); //seteame a la 1ra página 
        setOrder(e.target.value);
    };

    // Ordenamiento por Rating 
    function handleRating(e) {
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    function handleFilterGenre(e) {
        e.preventDefault();
        dispatch(filterVideogamesByGenre(e.target.value));
        setCurrentPage(1);
    };

    // Filtra por creado en la DB o si es de la API
    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setCurrentPage(1);
    };

    if (!allVideoGames.length) {
        return (<Loader />);
    }
    else
        return (
            <>
                <div className={styles.home_page}>
                <div className={styles.create_container}>
                    <Nav
                        handleSort={handleSort}
                        handleRating={handleRating}
                        handleFilterCreated={handleFilterCreated}
                        handleFilterGenre={handleFilterGenre}
                    />
                </div>

                <div>
                    <button className={styles.reload_container} onClick={(e) => { handleClick(e) }}>
                     RELOAD
                    </button>
                </div>

                <div className={styles.pagination}>
                    <Paginate
                        videogamesPerPage={videogamesPerPage}
                        allVideoGames={allVideoGames.length} // length xq necesito un valor numerico
                        paginado={ToPaginate}
                        currPage={currentPage}
                    />
                </div>

                <div className={styles.placeCards}>
                    {
                        currentVideogames.map(g => {
                            return (
                                <ul className={styles.card_grid} key={g?.id}>

                                    <Card
                                        id={g?.id}
                                        name={g?.name}
                                        image={g?.background_image ? g?.background_image : "https://wallpaperaccess.com/full/6273506.gif"}
                                        genre={g?.genres}
                                    />
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
            </>
        );
}