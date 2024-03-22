import React from 'react'
import { work } from '../constants'

const Work = () => {
    return (
        <div className='py-6 max-w-[1200px] mx-auto' id='work'>
            <div className="mx-auto px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8">
                    <h2 className="text-2xl lg:text-3xl text-white">
                        My <span>Projects</span>
                    </h2>
                    <p className="text-gray-500">
                        These area my latest projects for different clients.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">
                {
                    work.map((item) => (
                        <a key={item.id} href={item.link} target='_blank' rel="noreferrer"
                            className={item.class}>
                            <img src={item.image} alt={item.title} className="h-full w-full 
                        object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Work