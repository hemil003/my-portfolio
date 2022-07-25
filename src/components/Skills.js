import React from 'react'

import JavaScript from '../assets/javascript.png';
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import HTML from '../assets/html.png'
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

        <div className='w-full grid grid-cols-5 sm:grid-cols-5 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='HTML-Icon'/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='CSS-Icon'/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript-Icon'/>
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt='React-Icon'/>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt='GitHub-Icon'/>
                <p className='my-4'>GitHub</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Skills