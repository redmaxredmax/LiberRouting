import React from 'react'
import { useParams } from 'react-router-dom'
import { heroBannerData } from '../../data.js';
import icon1 from "/public/headphone.svg"
import icon2 from "/public/rating_star.svg"
import icon3 from "/public/commets.svg"
import style from "./banner.module.scss"
import rating2 from "/public/rating2.svg"
export const HeroBooks = () => {

    const params = useParams();

    const result = heroBannerData.find((obj) => obj.id === Number(params.heroId))

    return (
        <div data-aos="fade-left" className='container detail__container'>
            <div className={style.details__wrapper}>
                <div data-aos="flip-left" className={style.img_block}>
                    <img className={style.img} src={result.img} alt="img" />
                </div>
                <div className={style.detail__block}>
                    <div className={style.details__sub_header}>
                        <h2 className={style.detail__title}>
                            {result.name}
                        </h2>
                        <img src={icon1} alt="icon" />
                        <img src={icon2} alt="icon" />
                        <img src={icon3} alt="icon" />
                    </div>
                    <p className={style.detail__text}>{result.text}</p>
                    <p className={style.detail__comment}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <ul className={style.detail__list}>
                        <li className={style.detail__item}>
                            <p className={style.detail__author}>
                                Муаллиф
                            </p>
                            <span className={style.detail__author_name}>
                                Kevin Smiley
                            </span>
                        </li>
                        <li className={style.detail__item}>
                            <p className={style.detail__author}>
                                Нашриёт
                            </p>
                            <span className={style.detail__author_name}>
                                Wepress Inc.
                            </span>
                        </li>
                        <li className={style.detail__item}>
                            <p className={style.detail__author}>
                                1999
                            </p>
                            <span className={style.detail__author_name}>
                                Kevin Smiley
                            </span>
                        </li>
                    </ul>
                    <div className={style.detail__dots}>
                    </div>
                    <div className={style.details__btn_box}>
                        <button className={style.details__btn_service}>{result.cost}</button>
                        <button className={style.details__btn_service}>{result.service}</button>
                        <button className={style.details__btn_service}>{result.reading}</button>
                    </div>
                </div>
            </div>
            <div className={style.detail__info}>
                <div className={style.detail__data}>
                    <div className={style.detail__tab}>
                        <button className={style.detail__tab_btn2}>
                            Маълумотлар
                        </button>
                        <button className={style.detail__tab_btn2}>
                            Фикрлар
                        </button>
                    </div>
                    <div className={style.detail__about}>
                        <div className={style.details__texts}>
                            <p className={style.detail__book_name}>Китоб номи </p>
                            <p className={style.detail__book_info}>Элжернга аталган гуллар</p>
                        </div>

                        <div className={style.details__texts}>
                            <p className={style.detail__book_name}>Муаллиф </p>
                            <p className={style.detail__book_info}>Даниел КИЗ</p>
                        </div>

                        <div className={style.details__texts}>
                            <p className={style.detail__book_name}>ISBN </p>
                            <p className={style.detail__book_info}>121341381648 (ISBN13: 121341381648)</p>
                        </div>

                        <div className={style.details__texts}>
                            <p className={style.detail__book_name}>Тил </p>
                            <p className={style.detail__book_info}>Ўзбек</p>
                        </div>

                        <div className={style.details__texts}>
                            <p className={style.detail__book_name}>Сахифалар </p>
                            <p className={style.detail__book_info}>450</p>
                        </div>

                        <div className={style.details__texts}>
                            <p className={style.detail__book_name}>Чоп этилган сана </p>
                            <p className={style.detail__book_info}>Апрель 7, 1999</p>
                        </div>

                        <div className={style.details__texts}>
                            <p className={style.detail__book_name}>Нашриёт </p>
                            <p className={style.detail__book_info}>Wepress Inc.</p>
                        </div>

                        <div className={style.details__texts}>
                            <p className={style.detail__book_name}>Сахифалар </p>
                            <p className={style.detail__book_info}>450</p>
                        </div>
                    </div>
                </div>
                <div className={style.detail__same}>
                    <h2 className={style.detail__book}>Ўхшаш китоблар</h2>
                    {heroBannerData.map((item) =>
                        <div key={item.id} className={style.details__book_same}>
                            <div>
                                <img className={style.details__book_img} src={item.img} alt="img" />
                            </div>
                            <div>
                                <h3 className={style.details__book_name}>{item.name}</h3>
                                <p className={style.details__book_txt}>{item.text}</p>
                                <img src={rating2} alt="rate" />
                            </div>
                        </div>
                    )}
                    <button className={style.details__more}>Кўпроқ</button>
                </div>
            </div>
        </div>
    )
}
