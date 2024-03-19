import React from 'react'

const Contact = () => {
    return (
        <div className="flex-justify-center my-5 h-full sm:h-[70vh] items-center">
            <div className="max-w-[1200px] mx-auto">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols2">
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

                        <form action="" method='post' class='p-6 flex flex-col justify-center max-w-[700px]'>
                            <div className="flex flex-col">
                                <input type="name" name='name' placeholder='Full Name' class='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'/>
                            </div>

                            <div className="flex flex-col">
                                <input type="name" name='name' placeholder='Full Name' class='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'/>
                            </div>

                            <div className="flex flex-col">
                                <input type="name" name='name' placeholder='Full Name' class='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'/>
                            </div>

                            <button type='submit' class='md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3'>Submit</button>
                        </form>




                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact