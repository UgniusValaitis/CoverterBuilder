import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Select from "react-select";
import { v4 as uuidv4 } from 'uuid';
import styles from './Converter.module.css'

const ConverterBuilder = (props) => {
    const [options, setOptions] = useState([]);
    const [sessionId, setSessionId] = useState("");
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState('');
    const [rate, setRate] = useState('')


    useEffect(() => {
        if (!localStorage.getItem("sessionId")) {
            const id = uuidv4();
            localStorage.setItem("sessionId", id);
            setSessionId(id);
            axios.post("http://ugniusvalaitis.xyz/user", { session: id })
                .then(() => { console.log("Started new session") })
        } else {
            const id = localStorage.getItem("sessionId")
            setSessionId(id);
        }
        axios.get("http://ugniusvalaitis.xyz")
            .then((res) => {
                const options = []
                res.data.map(e => {
                    const option = {
                        value: e.ccy,
                        label: e.ccy + " | " + e.nameEn
                    }
                    options.push(option)
                })
                setOptions(options);
            })
    }, []);


    const convert = () => {
        axios.get(`http://ugniusvalaitis.xyz/${from}/${to}/${amount}`)
            .then((res) => {
                setResult(`${res.data.to[1].toFixed(2)} ${res.data.to[0]}`)
                if (res.data.rate.toString().length > 4) {
                    setRate(`Exchange Rate: ${res.data.rate.toFixed(5)}`)
                } else {
                    setRate(`Exchange Rate: ${res.data.rate}`)
                }

            })
        axios.post("http://ugniusvalaitis.xyz/activity", {
            session: sessionId,
            fromCcy: from,
            toCcy: to,
            amount: amount
        })
            .then(() => console.log("Converted"))

    }
    return (
        <div className={styles.Main}>
            <h1 className={styles.Header}>Currency Converter</h1>
            <p className={styles.From}>From:</p>
            <Select className={styles.Select} options={options} onChange={(e) => setFrom(e.value)} />
            <p className={styles.To}>To:</p>
            <Select className={styles.Select} options={options} onChange={(e) => setTo(e.value)} />
            <p className={styles.Amnt}>Amount:</p>
            <input className={styles.Amount} type="number" onChange={(e) => setAmount(e.target.value)} value={amount}></input>
            <button className={styles.Convert} onClick={() => convert()}>Convert</button>
            <p className={styles.Result}>{result}</p>
            <p className={styles.Rate}>{rate}</p>
            <p className={styles.Api}>Check our restful API service: </p>
            <Link className={styles.Link} to="/api">restAPI</Link>
        </div>
    )
}

export default ConverterBuilder 
