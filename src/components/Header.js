import React from 'react'
import './Header.css'
//src/assets /people.png




const Header = () => {
    return (
        <div className='gpt3__header section__padding' id="home">
           <div className="gpt3__header-content">

               <h1 className='gradient__text'>Lets build something great with GPT-3 OpenAI</h1>
               <p className='body-text'>GPT-3 AI body text p tag sign up and get started now!</p>

                <div className="gpt3__header-content__input">
                    <input type='email' placeholder='Your email' />
                    <button className='button'>Get started!</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/people.png?raw=truealt='people'"/>
                    <p>1600 people requested access to visit in the last 24 hours</p>
                </div>

           </div>


            <div className="gpt3__header-image">
                <img src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/ai.png?raw=true" alt='ai'/>
            </div>

        </div>
    )
}

export default Header
