import React from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import styles from '../Nav/Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav({ handleFilterGenre, handleFilterCreated, handleRating, handleSort }) {

    const allGenre = useSelector(state => state.genres);

    return (
        <div>
            <div>
                <h1 className={styles.nav_title}>PI VIDEOGAMES</h1>
                <div className={styles.nav_container}>
                    <Search />
                </div>
            </div>

            <select className={styles.select} onChange={(e) => handleSort(e)}>
                <option value='Asc'>Sort by Name</option>
                <option value='Asc'>A-Z</option>
                <option value='Desc'>Z-A</option>
            </select>

            <select className={styles.select} onChange={(e) => handleRating(e)}>
                <option value="Top">Sort by Rating</option>
                <option value="Top">Highest Rating</option>
                <option value="Low">Lower Rating</option>
            </select>

            <select className={styles.select} onChange={(e) => handleFilterCreated(e)}>
                <option value='All'>Filter Videogames</option>
                <option value='All'>Todos</option>
                <option value='Created'>Creados en BD</option>
                <option value='Api'>Existentes</option>
            </select>

            <select className={styles.select} onChange={(e) => handleFilterGenre(e)}>
                <option value='All'>Filtrar Genres</option>
                <option value='All'>All</option>

                {allGenre.map((genre) => (
                    <option key={genre.name} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>
            <Link className={styles.button_about} to='/'>EXIT</Link>
            <Link className={styles.button_about} to='/about'>ABOUT</Link>
            <Link className={styles.button_create_videogame} to='/videogames'>CREATE VIDEOGAME</Link>
        </div>
        
    )
};