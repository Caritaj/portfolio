import React from 'react'
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
    return (
        <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center bg-[#232325] overflow-x-hidden" id='contact'>
            <div className="w-[1500px]">
                <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                    <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
                        <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
                            <h1 className="text-4xl sm:text-5xl text-white">
                                Contact <span>Me</span>
                            </h1>
                            <p className="text-normal text-lg font-medium text-gray-400 mt-2">
                                Let´s connect on Linkedin <br /> or send me an Email
                            </p>

                            <div className="flex items-center mt-2 text-gray-400">
                                <p>Icon here!</p>
                                <div className="ml-4 text-md tracking-wide w-40">
                                    <p>Rue Ccarita</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
                        <form action="https://getform.io/f/raeqyvna" method='post' class='p-6 flex flex-col justify-center max-w-[700px]'>
                            <div className="flex flex-col">
                                <input type="name" name='name' id='name' placeholder='Full Name' class='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                            </div>

                            <div className="flex flex-col">
                                <input type="email" name='email' id='email' placeholder='Email' class='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                            </div>

                            <div className="flex flex-col">
                                <textarea name='message' id='message' placeholder='Your Message' class='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                            </div>

                            <button type='submit' class='md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3'>Submit</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");