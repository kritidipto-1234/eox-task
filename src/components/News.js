import React, { useState, useEffect } from "react";
import styles from "./News.module.scss";

function News(props) {
    const d = new Date(props.data.TIMESTAMP);
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className={styles.News}
            href={props.data.URL}
        >
            <span className={styles.title}>{props.data.TITLE}</span>
            <span>
                {d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}
            </span>
        </a>
    );
}

export default News;
