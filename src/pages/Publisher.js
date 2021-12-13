import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Publisher.module.scss";
import News from "../components/News";

function Publisher(props) {
    const params = useParams();
    const [searchKey, setSearchKey] = useState("");
    const news = useSelector((state) => state.publisherData[params.publisher]);

    function changeSearchKey(e) {
        setSearchKey(e.target.value.trim().toUpperCase());
    }

    return (
        <div className={styles.Publisher}>
            <h2>{params.publisher}</h2>
            <input
                className={styles.newsSearch}
                placeholder={"🔍 Search for news of " + params.publisher}
                onChange={changeSearchKey}
            />
            <div className={styles.newsList}>
                {news
                    .filter((n) => {
                        if (searchKey === "") return true;
                        return n.TITLE.toUpperCase().includes(searchKey);
                    })
                    .sort((a, b) => b.TIMESTAMP - a.TIMESTAMP)
                    .map((n) => (
                        <News data={n} key={n.ID} />
                    ))}
            </div>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Publisher;
