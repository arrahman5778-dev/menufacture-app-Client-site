import React from 'react';
import banner from '../../../assets/b.webp';
import tester from '../../../assets/tester.webp';
const HomeCarousel = () => {
    return (
        <div>
            <div className='h-[93vh]' style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'cover'
            }}>
                <div className="hero h-full ">
                    <div className="hero-content flex-col justify-between lg:flex-row  w-full">

                        <div className='flex-1 w-full md:px-12 lg:px-0 text-left lg:pl-24 mb-16 lg:mb-0'>
                            <h1 className="text-6xl font-bold text-orange-500">Top Product <br /> Hand Tool <br /> 2022</h1>
                            <p className="py-6">Exclusive email offers & Limited time discount <br /> specials</p>
                            <button className="p-2 rounded bg-orange-500 hover:bg-zinc-800 hover:text-orange-500   text-white font-medium ">Get Started</button>
                        </div>
                        <div className='flex-1 '>
                            <img src={tester} className="w-9/12 mx-auto" alt='banner images' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;