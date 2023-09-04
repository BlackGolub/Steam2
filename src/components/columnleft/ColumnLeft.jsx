import React, { useState } from "react";
import styles from './ColumnLeft.module.css';
import { AiOutlinePlus, AiFillGift, AiFillPieChart } from 'react-icons/ai';
import { PiSquaresFourFill, PiTelevisionSimpleFill } from 'react-icons/pi';
import { BsHouseFill, BsChatLeftDotsFill, BsFillBagFill } from 'react-icons/bs';
import { BiSolidJoystick } from 'react-icons/bi';

const ColumnLeft = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const navItems = [
        { id: "home", icon: <BsHouseFill /> },
        { id: "joystick", icon: <BiSolidJoystick /> },
        { id: "gift", icon: <AiFillGift /> },
        { id: "television", icon: <PiTelevisionSimpleFill /> },
        { id: "chart", icon: <AiFillPieChart /> },
        { id: "bag", icon: <BsFillBagFill /> },
        { id: "chat", icon: <BsChatLeftDotsFill /> },
    ];

    return (
        <div className={styles.column}>
            <div className={styles.naw}>
                <div className={styles.square}><PiSquaresFourFill /></div>
                <ul className={styles.naw_list}>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            id={item.id}
                            className={activeTab === item.id ? styles.active : ""}
                            onClick={() => handleTabClick(item.id)}
                        >
                            {item.icon}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.add}>
                <div className={styles.button_add}><AiOutlinePlus /></div>
            </div>
        </div>
    );
}

export default ColumnLeft;