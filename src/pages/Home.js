import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import styles from "./Home.module.scss";

function Home(props) {
    const publisherData = useSelector((state) => state.publisherData);
    console.log(Object.keys(publisherData));
    return (
        <div className={styles.Home}>
            {Object.keys(publisherData).map((name) => (
                <Link type="button" to={`/${name}`} key={name}>
                    {name}
                </Link>
            ))}
        </div>
    );
}

export default Home;
