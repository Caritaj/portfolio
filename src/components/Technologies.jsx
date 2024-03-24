import React from 'react';
import { technologies } from '../constants';

const Technologies = () => {
    return (
        <div className='py-20 text-white bg-[#232325] h-auto' id='tech'>
            <h3 className="text-4xl font-semibold mb-5 text-center">My <span>Technologies</span></h3>
            <div className="flex flex-row flex-wrap justify-center gap-5">
                {technologies.map((tech) => (
                    <div className="w-28 h-28" key={tech.id}>
                        <img src={tech.icon} alt={tech.name} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Technologies;
