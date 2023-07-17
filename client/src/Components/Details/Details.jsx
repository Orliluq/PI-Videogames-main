import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../Redux/Action/Action';
import { useEffect } from "react";
import styles from './Details.module.css';
import Loader from '../Loader/Loader';

export default function Details() {
    
    const [carga, setCarga] = useState(true);
    const {id} = useParams() //rutas dinamicas, Podemos acceder a cualquier parámetro de ruta de una ruta declarada con su componente asociado usando el hook useParams.
    const dispatch = useDispatch() // trae datos del est. global del reducer
    
    useEffect(() => {
        dispatch(getDetails(id))
          .then(() => setCarga(false));
    }, [dispatch, id]);

    const detail = useSelector(state => state.detail);

    function handleReset() {
        dispatch(getDetails()); // llama sin el id
    }

    if (carga) {
        return <Loader />;
      }
    
      return (
        <div >
            <div className={styles.detail_background}>
                <Link to={'/home'} onClick={handleReset}>
                    <button className={styles.detail_button}>HOME</button>
                </Link>
                <br />
                <div className={styles.detail_container_form}>
                    <h1 className={styles.detail_title}> {detail.name} </h1>

                    <img className={styles.detail_background_image} src={detail.background_image} alt=""/>

                    <div>
                        <p className={styles.detail_genres}><b>Genres:</b> {detail.genres} </p>
                        <p className={styles.detail_rating}> <b>ID:</b>{detail.id}</p>
                        <p className={styles.detail_rating}><b>Rating:</b> {detail.rating}</p>
                        <p className={styles.detail_released}><b>Released:</b> {detail.released}</p>
                        <p className={styles.detail_platforms}> <b>Platforms:</b> {detail.platforms} </p>
                    </div>

                    <div className={styles.detail_description_form}>
                        <p className={styles.detail_description}> {detail.description}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
