import React from 'react';
import { FaGithubSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
            <p className="my-5 text-gray-500">123 Calle Principal <br />Lima, Lurigancho-Chosica, 15011</p>
            <div className='inline-flex text-gray-500 gap-4 text-3xl'>
                <a href="https://github.com/Caritaj" target='_blank' rel="noreferrer"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/rue-ccarita-4475612b8/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                <a href="https://www.facebook.com/profile.php?id=100004304824616" target='_blank' rel="noreferrer"><FaFacebookSquare /></a>
                <a href="/" target='_blank' rel="noreferrer"><FaInstagramSquare /></a>
                <a href="mailto:rccarita13@gmail.com"><FaEnvelope /></a>
            </div>
        </div>
    )
}

export default Footer;
