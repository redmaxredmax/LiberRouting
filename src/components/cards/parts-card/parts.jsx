import React from 'react'
import style from "./parts.module.scss"
export const Parts = ({ img, name, id }) => {
  return (
    <div data-aos="zoom-in"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine" className={style.wrapper} key={id}>
      <img className={style.img} src={img} alt="img" />
      <h3 className={style.name}>{name}</h3>
    </div>
  )
}
