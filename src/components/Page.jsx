import React from "react";
import styles from './Page.module.css';
import ColumnLeft from './columnleft/ColumnLeft';
import ColumnCenter from './columncenter/ColumnCenter'
import ColumnRight from './columnright/ColumnRight';

const Page = () => {
    return(
        <div className={styles.background}>
            <div className={styles.page}>
                <ColumnLeft />
                <ColumnCenter />
                <ColumnRight />
            </div>
        </div>
    )
}

export default Page