import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LadingPage.module.css';

export default function LandingPage() {
    return (
        <div className={styles.landing_page}>
            <div>
                <Link to='/home'>
                    <button className={styles.landing_button}>LET'S GO!!</button>
                </Link>
            </div>
        </div>
    )
};