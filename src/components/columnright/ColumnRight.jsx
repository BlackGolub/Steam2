import React from "react";
import styles from './ColumnRight.module.css';
import { HiUserGroup } from 'react-icons/hi';
import { AiFillWechat } from 'react-icons/ai'

const ColumnRight = () => {
    return(
        <div className={styles.column}>
            <div className={styles.users_list}>
                <img className={styles.user_avatar} src="/user_avatar.jpg" alt=" "/>
                <div className={styles.friends}>
                    <HiUserGroup />
                    <ul className={styles.friends_list}>
                        <li className={styles.friends_avatar}><img src="/friend_avatar.jpg" className={`${styles.user_avatar} ${styles.user_in_game}`} alt=" "/><div className={`${styles.green_circle} ${styles.user_in_game}`} style={{top: '130px'}}></div></li>
                        <li className={styles.friends_avatar}><img src="/friend_avatar2.jpg" className={styles.user_avatar} alt=" "/><div className={styles.gray_circle} style={{top: '190px'}}></div></li>
                        <li className={styles.friends_avatar}><img src="/friend_avatar3.png" className={styles.user_avatar} alt=" "/><div className={styles.green_circle} style={{top: '250px'}}></div></li>
                        <li className={styles.friends_avatar}><img src="/friend_avatar4.jpg" className={styles.user_avatar} alt=" "/><div className={styles.gray_circle} style={{top: '310px'}}></div></li>
                        <li className={styles.friends_avatar}><img src="/friend_avatar5.jpg" className={styles.user_avatar} alt=" "/><div className={styles.green_circle} style={{top: '370px'}}></div></li>
                        <li className={styles.friends_avatar}><img src="/friend_avatar6.jpg" className={styles.user_avatar} alt=" "/><div className={styles.green_circle} style={{top: '430px'}}></div></li>
                    </ul>
                </div>
            </div>
            <div className={styles.user_chats}>
                <AiFillWechat />
                <ul className={styles.chats_list}>
                    <li className={styles.chats_avatar}><img src="/cart_avatar.jpg" className={styles.user_avatar}  alt=" "/><div className={styles.orange_circle} style={{top: '623px'}}></div></li>
                    <li className={styles.chats_avatar}><img src="/cart_avatar2.jpg" className={styles.user_avatar} alt=" "/></li>
                    <li className={styles.chats_avatar}><img src="/cart_avatar3.jpg" className={styles.user_avatar}  alt=" "/><div className={styles.orange_circle} style={{top: '744px'}}></div></li>
                </ul>
            </div>
        </div>
    )
}

export default ColumnRight