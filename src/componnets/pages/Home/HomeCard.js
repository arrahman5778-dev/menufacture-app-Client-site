import React from 'react';
import banner from '../../../assets/banner-42.jpg.webp'
const HomeCard = () => {
    return (
        <div>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={banner} className='rounded' alt='Banner images' />
                    <div>
                        <h1 className='m-5 text-3xl font-bold '>YOU’LL BE HAPPY TO SEE OUR AWESOME</h1>
                        <h1 className='m-5 text-3xl font-bold text-orange-500 '>FEATURES.</h1>
                        <p className='m-5 font-bold text-slate-600'>Sale 20% off your Collection days</p>
                        <button className=" py-1 px-3  rounded bg-orange-500 hover:bg-zinc-800 hover:text-orange-500  text-white font-medium">Button</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;