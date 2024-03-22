import React from 'react'
import profile from '../assets/profile.png'
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { zoomIn } from '../utils/motion';

const Hero = () => {
    return (
        <div className='max-w-[1200px] h-[80vh] mx-auto
            flex flex-col-reverse sm:flex-row justify-center align-center' id='hero'>
            <motion.div variants={zoomIn(0.2, 1)}>
                <div className='flex-col my-auto mx-auto mt-20'>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">Hi! I am Rue Ccarita</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        <TypeAnimation sequence={[
                            "Frontend Dev",
                            1000,
                            "Web designer",
                            1000,
                            "Consultant",
                            1000,
                        ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity} />
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>
                            with a 1+ year experience
                        </p>
                    </div>
                    <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                        <a href="https://www.linkedin.com/in/rue-ccarita-4475612b8/"><AiFillLinkedin /></a>
                        <a href="https://github.com/Caritaj" target='_blank' rel="noreferrer"><AiFillGithub /></a>
                        <a href="https://www.facebook.com/profile.php?id=100004304824616"><AiFillFacebook /></a>
                    </div>
                    <div className='relative inline-flex group my-3'>
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                        from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
                        group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a href="/" title='Download CV'
                            className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
                                    font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                            <button type="button">Download CV</button>
                        </a>

                    </div>
                </div>
            </motion.div>
            <motion.div variants={zoomIn(0.2, 1)}>
                <div className='mt-10'>
                    <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full picture-hero' src={profile} alt="profile-pic" />
                </div>
            </motion.div>
            <div className='absolute xs:bottom-10 bottom-36 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-white mb-1'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SectionWrapper(Hero, "hero");