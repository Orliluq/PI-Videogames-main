import React from 'react';
import { Link } from "react-router-dom";
import styles from './Card.module.css';

export default function Card({ id, background_image, name, genre }) {

    // const videogames = [
        //         {
        //             "id": 3498,
        //             "name": "Grand Theft Auto V",
        //             "released": "2013-09-17",
        //             "rating": 4.47,
        //             "genres": [
        //                 "Action",
        //                 "Adventure"
        //             ],
        //             "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, PlayStation 3, Xbox 360, Xbox One",
        //             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 3328,
        //             "name": "The Witcher 3: Wild Hunt",
        //             "released": "2015-05-18",
        //             "rating": 4.66,
        //             "genres": [
        //                 "Action",
        //                 "Adventure",
        //                 "RPG"
        //             ],
        //             "platforms": "Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One, PlayStation 5",
        //             "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 4200,
        //             "name": "Portal 2",
        //             "released": "2011-04-18",
        //             "rating": 4.62,
        //             "genres": [
        //                 "Shooter",
        //                 "Puzzle"
        //             ],
        //             "platforms": "Xbox 360, Linux, macOS, PlayStation 3, PC, Xbox One",
        //             "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 5286,
        //             "name": "Tomb Raider (2013)",
        //             "released": "2013-03-05",
        //             "rating": 4.05,
        //             "genres": [
        //                 "Action",
        //                 "Adventure"
        //             ],
        //             "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox 360, PlayStation 3",
        //             "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 4291,
        //             "name": "Counter-Strike: Global Offensive",
        //             "released": "2012-08-21",
        //             "rating": 3.56,
        //             "genres": [
        //                 "Action",
        //                 "Shooter"
        //             ],
        //             "platforms": "PC, Xbox 360, PlayStation 3",
        //             "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 3498,
        //             "name": "Grand Theft Auto V",
        //             "released": "2013-09-17",
        //             "rating": 4.47,
        //             "genres": [
        //                 "Action",
        //                 "Adventure"
        //             ],
        //             "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, PlayStation 3, Xbox 360, Xbox One",
        //             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 3328,
        //             "name": "The Witcher 3: Wild Hunt",
        //             "released": "2015-05-18",
        //             "rating": 4.66,
        //             "genres": [
        //                 "Action",
        //                 "Adventure",
        //                 "RPG"
        //             ],
        //             "platforms": "Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One, PlayStation 5",
        //             "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 4200,
        //             "name": "Portal 2",
        //             "released": "2011-04-18",
        //             "rating": 4.62,
        //             "genres": [
        //                 "Shooter",
        //                 "Puzzle"
        //             ],
        //             "platforms": "Xbox 360, Linux, macOS, PlayStation 3, PC, Xbox One",
        //             "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 5286,
        //             "name": "Tomb Raider (2013)",
        //             "released": "2013-03-05",
        //             "rating": 4.05,
        //             "genres": [
        //                 "Action",
        //                 "Adventure"
        //             ],
        //             "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox 360, PlayStation 3",
        //             "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 4291,
        //             "name": "Counter-Strike: Global Offensive",
        //             "released": "2012-08-21",
        //             "rating": 3.56,
        //             "genres": [
        //                 "Action",
        //                 "Shooter"
        //             ],
        //             "platforms": "PC, Xbox 360, PlayStation 3",
        //             "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 3498,
        //             "name": "Grand Theft Auto V",
        //             "released": "2013-09-17",
        //             "rating": 4.47,
        //             "genres": [
        //                 "Action",
        //                 "Adventure"
        //             ],
        //             "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, PlayStation 3, Xbox 360, Xbox One",
        //             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 3328,
        //             "name": "The Witcher 3: Wild Hunt",
        //             "released": "2015-05-18",
        //             "rating": 4.66,
        //             "genres": [
        //                 "Action",
        //                 "Adventure",
        //                 "RPG"
        //             ],
        //             "platforms": "Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One, PlayStation 5",
        //             "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 4200,
        //             "name": "Portal 2",
        //             "released": "2011-04-18",
        //             "rating": 4.62,
        //             "genres": [
        //                 "Shooter",
        //                 "Puzzle"
        //             ],
        //             "platforms": "Xbox 360, Linux, macOS, PlayStation 3, PC, Xbox One",
        //             "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 5286,
        //             "name": "Tomb Raider (2013)",
        //             "released": "2013-03-05",
        //             "rating": 4.05,
        //             "genres": [
        //                 "Action",
        //                 "Adventure"
        //             ],
        //             "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox 360, PlayStation 3",
        //             "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        //             "createInDB": false
        //         },
        //         {
        //             "id": 4291,
        //             "name": "Counter-Strike: Global Offensive",
        //             "released": "2012-08-21",
        //             "rating": 3.56,
        //             "genres": [
        //                 "Action",
        //                 "Shooter"
        //             ],
        //             "platforms": "PC, Xbox 360, PlayStation 3",
        //             "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        //             "createInDB": false
        //         }
        //     ]

    return (
        <>
            <div className={styles.card}>
                <li className={styles.card_game}>
                    <Link to={'/videogames/' + id}>
                        <img className={styles.card_background_image} src={background_image} alt='' />
                    </Link>
                    <div className={styles.card_name}> <h3>{name}</h3> </div>
                    <div className={styles.card_genre}> <h5>{genre.map(e => { return e.name + ", " })}</h5> </div>
                </li>
            </div>
        </>
    );
};