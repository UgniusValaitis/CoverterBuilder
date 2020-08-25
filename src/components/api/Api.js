import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Api.module.css';

const Api = () => {

    return (
        <div className={styles.Main}>
            <h1 className={styles.Header}>restAPI</h1>
            <h3 className={styles.Section}>We provide open restAPI services</h3>
            <p className={styles.Text}>Use our API to build your own Currency Converting application or include it in your projects </p>
            <p className={styles.Text}> All service is based on GET requests and is open to use for everyone</p>
            <p className={styles.Text}>Currency rates are always updated</p>
            <p className={styles.Text}>(placeholder) in url is a placeholder</p>
            <h3 className={styles.Section}> GET "http://ugniusvalaitis.xyz/" </h3>
            <p className={styles.Text}>Returns all supported currency names</p>
            <h3 className={styles.Section}> GET "http://ugniusvalaitis.xyz/rates"</h3>
            <p className={styles.Text}>Returns all currency rates in relation to Euro</p>
            <h3 className={styles.Section}> GET "http://ugniusvalaitis.xyz/(fromCcy)/(toCcy)"</h3>
            <p className={styles.Text}>Returns currency rate of declared currencies</p>
            <p className={styles.Text}>e.g. "http://ugniusvalaitis.xyz/EUR/EUR" will return 1</p>
            <p className={styles.Text}>Ccy names in url are case sensitive (USE UPPERCASE)</p>
            <h3 className={styles.Section}>GET "http://ugniusvalaitis.xyz/(fromCcy)/(toCcy)/(amount)" </h3>
            <p className={styles.Text}> Returns currency rate of declared currencies and calculated amount</p>
            <p className={styles.Text}> e.g. "http://ugniusvalaitis.xyz/EUR/EUR/200" will return rate of 1 and amount of 200</p>
            <Link className={styles.Link} to="/">Back</Link>
        </div>
    )
}

export default Api
