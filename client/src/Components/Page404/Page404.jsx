import React from 'react';
import { Link } from 'react-router-dom';
import styles from './page404.module.css';

function Page404 () {

    return (
        <div className={styles.containerPage404}>
            <img src="" alt="" />
            <div className={styles.myIg}>
          <Link to='/home' className={styles.miboton}><button>Volver al Home</button></Link>
          </div>
        </div>
    )
}

export default Page404;
