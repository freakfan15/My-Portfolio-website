import React from 'react'
import {BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia