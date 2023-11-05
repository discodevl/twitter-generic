import React from 'react'
import styles from './Avatar.module.css'

type AvatarProps = {
    imgURL: string;
}

function Avatar({imgURL} : AvatarProps) {
  return (
    <div className={styles['container-avatar']}>
        <img src={imgURL}/>
    </div>
  )
}

export default Avatar