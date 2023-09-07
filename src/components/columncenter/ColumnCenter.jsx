import React from "react";
import styles from './ColumnCenter.module.css';
import { AiOutlineBell, AiOutlineFire } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { SiEpicgames } from 'react-icons/si';
import { FaSteam } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import { BsFillPlayFill, BsFillBagFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { MdArrowRight } from 'react-icons/md';
import { ImArrowRight2 } from 'react-icons/im'

const ColumnCenter = () => {

    const handleMouseEnter = (blockId) => {
        const showElements = document.querySelectorAll(`#${blockId} #show`);
        showElements.forEach((element) => {
          element.classList.add(styles.show);
        });
    };
    
    const handleMouseLeave = (blockId) => {
        const showElements = document.querySelectorAll(`#${blockId} #show`);
        showElements.forEach((element) => {
          element.classList.remove(styles.show);
        });
    };

    return(
        <div className={styles.column}>
            <div className={styles.head}>
                <div className={styles.greeting_user}>
                    <h1 className={styles.greeting}><pre>Good evening, </pre></h1>
                    <h1 className={styles.user}>NIKITA</h1>
                </div>
                <div className={styles.search_button}>
                    <input className={styles.search} placeholder={'Search'}></input>
                    <div className={styles.buttons}>
                        <button className={styles.button}><SlBasket /></button>
                        <button className={styles.button}><AiOutlineBell /></button>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.news}>
                    <div className={styles.carousel}>
                        <div className={styles.popular}>
                            <div className={styles.platform}>
                                <div className={styles.hot}><AiOutlineFire />Popular</div>
                                <button className={styles.button_popular}><FaSteam /></button>
                                <button className={styles.button_popular}><SiEpicgames /></button>
                            </div>
                            <h2 className={styles.head_carousel}>Valorant</h2>
                            <pre>Valorant is a multiplayer computer game<br/>
                                developed and published by Riot Games.<br/>
                                Valorant is Riot Games first first—person shooter<br/>
                                game.</pre>
                            <div className={styles.evaluations}>
                                <div className={styles.users}>
                                    <img className={styles.user_like} src="/user_like.jpg" alt=""/>
                                    <img className={styles.user_like_message} src="/user_like2.jpg" alt=""/>
                                    <img className={styles.user_like_message} src="/user_like3.jpg" alt=""/>
                                </div>
                                <div className={styles.like}><BiSolidLike/><pre className={styles.black_text}> +53 Reviews</pre> </div>
                            </div>
                        </div>
                        <img className={styles.carousel_img} src="/Valorant.png" alt=""/>
                    </div>
                    <div className={styles.head_news}>
                        <h1 className={styles.name_block}>New Games</h1>
                        <h2 className={styles.see_more}>See more</h2>
                    </div>
                        <div className={styles.cards_games}>
                            <div className={styles.card_game} id="block-1" onMouseEnter={() => handleMouseEnter('block-1')} 
                                onMouseLeave={() => handleMouseLeave('block-1')} style={{ backgroundImage: 'url(/Uncharted.jpg)' }}>
                                <div className={styles.game_buttons} id="show">
                                    <button className={styles.game_button_play}><BsFillPlayFill /></button>
                                    <button className={styles.game_button_store}><BsFillBagFill /></button>
                                </div>
                                <div className={styles.card_game_text}>
                                    <h1 className={styles.card_name_title} id="show">Uncharted 4</h1>
                                    <pre className={styles.card_description} id="show">Is a continuation of Uncharted 3:<br/>
                                    Drake's Deception and the last part<br/>
                                    of the adventures of Nathan Drake.</pre>
                                </div>
                            </div>
                            <div className={styles.card_game} id="block-2"  onMouseEnter={() => handleMouseEnter('block-2')} 
                                onMouseLeave={() => handleMouseLeave('block-2')} style={{ backgroundImage: 'url(/Dishonored.jpg)' }}>
                                <div className={styles.game_buttons} id="show">
                                    <button className={styles.game_button_play}><BsFillPlayFill /></button>
                                    <button className={styles.game_button_store}><BsFillBagFill /></button>
                                </div>
                                <div className={styles.card_game_text}>
                                    <h1 className={styles.card_name_title}>Dishonored:<br/> Standard Edition</h1>
                                    <pre className={styles.card_description} id="show">Dishonored is a rich first—person<br/>
                                    action game in which you have to<br/> 
                                    get used to the role of a murderer.</pre>
                                </div>
                            </div>
                            <div className={styles.card_game} id="block-3"  onMouseEnter={() => handleMouseEnter('block-3')} 
                                onMouseLeave={() => handleMouseLeave('block-3')} style={{ backgroundImage: 'url(/Elden_Ring.jpg)' }}>
                                <div className={styles.game_buttons} id="show">
                                    <button className={styles.game_button_play}><BsFillPlayFill /></button>
                                    <button className={styles.game_button_store}><BsFillBagFill /></button>
                                </div>
                                <div className={styles.card_game_text}>
                                    <h1 className={styles.card_name_title}>Elden Ring</h1>
                                    <pre className={styles.card_description}  id="show">Elden Ring is a role-playing game<br/>
                                    project developed in the style of<br/> 
                                    "Dark Souls", which sends us<br/>
                                     towards incredible adventures</pre>
                                </div>
                            </div>
                        </div>
                    <div className={styles.head_news}>
                        <h1 className={styles.name_block}>Last Downloads</h1>
                        <h2 className={styles.see_more}>See more</h2>
                    </div>
                    <div className={styles.downloads}>
                        <div className={styles.game_preview}>
                            <div className={styles.game_label}>
                                <button className={styles.downloads_label}><SiEpicgames /></button>
                                <pre className={styles.black_text}>Hearthstone</pre>
                            </div>
                            <div className={styles.game_title_box}>
                                <div className={styles.game_title}>
                                    HEARTHSTONE
                                </div>
                                <div className={styles.game_type}>
                                    Card game
                                </div>
                            </div>
                        </div>
                        <div className={styles.game_statistics}>
                            <div className={styles.statistics}>
                                <div className={styles.time}>
                                    <pre>1 hour 23 min.</pre>
                                </div>
                                <div className={styles.download}>
                                    <pre>265Mb of 1.23Gb</pre>
                                </div>
                            </div>
                            <div className={styles.play_buttons}>
                                <button className={styles.game_button_play}><BsFillPlayFill /></button>
                                <button className={styles.game_button_store}><RxCross2 /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.more_games}>
                    <div className={styles.advertisement}>
                        <div className={styles.advertisement_card}>
                            <div className={styles.info}>
                                <img className={styles.game_img} src="/game.png" alt=""/>
                                <div className={styles.advertisement_text}>
                                    <div className={styles.advertisement_title}>Subway Surfers</div>
                                    <div className={styles.advertisement_info}>(New Map + New Hero)</div>
                                </div>
                            </div>
                            <button className={styles.advertisement_arrow}><MdArrowRight /></button>
                        </div>
                        <div className={styles.advertisement_card}>
                            <div className={styles.info}>
                                <img className={styles.game_img}  src="/game2.jpg" alt=""/>
                                <div className={styles.advertisement_text}>
                                    <div className={styles.advertisement_title}>Minecraft</div>
                                </div>
                            </div>
                            <button className={styles.advertisement_arrow}><MdArrowRight /></button>
                        </div>
                        <div className={styles.advertisement_card}>
                            <div className={styles.info}>
                                <img className={styles.game_img}  src="/game3.png" alt=""/>
                                <div className={styles.advertisement_text}>
                                    <div className={styles.advertisement_title}>Red Dead Redemption 2</div>
                                    <div className={styles.advertisement_info}>(Premium Pack)</div>
                                </div>
                            </div>
                            <button className={styles.advertisement_arrow}><MdArrowRight /></button>
                        </div>
                    </div>
                    <div className={styles.yours_statistics}>
                        <div className={styles.head_news_stat}>
                            <h1 className={styles.name_block}>Your Statistics</h1>
                            <button className={styles.news_button}><ImArrowRight2 /></button>
                        </div>
                        <div className={styles.statistics_block}>
                            <div className={styles.total_hours}/*вставить гифку на фон */>
                                <div className={styles.total_time}>
                                    <div className={styles.total_name}>Total hours</div>
                                    <div className={styles.total_meaning}>12,340h</div>
                                </div>
                            </div>
                            <ul className={styles.total_games}>
                                <li className={styles.game}>
                                    <img className={styles.logo_game} src="/logo_game.png" alt=""/>
                                    <div className={styles.hours_game}>5,200h</div>
                                </li>
                                <li className={styles.game}>
                                    <img className={styles.logo_game} src="/logo_cs.jpg" alt=""/>
                                    <div className={styles.hours_game}>4,340h</div>
                                </li>
                                <li className={styles.game}>
                                    <img className={styles.logo_game} src="/logo_rocket.jpg" alt=""/>
                                    <div className={styles.hours_game}>2,800h</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColumnCenter