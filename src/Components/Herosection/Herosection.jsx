import React from 'react';

const Herosection = () => {
    return (
        <div className=' bg-cover bg-center pb-20 '
        style={{ backgroundImage: "url('https://i.imgur.com/FqSfSD3.jpeg')"  ,
            height: "calc(100vh - 180px)  "   
        }}>
            <div className='max-w-screen-2xl mx-auto '>
            <div className='max-w-3xl space-y-4 xl:pt-56 pt-12 xl:pl-0 pl-2 '> 
                <h1 className='font-semibold text-5xl text-white'>Bid on Unique Items from Around the World</h1>
                <p className='font-light text-2xl text-white'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                <button className='btn bg-white rounded-3xl px-6 py-2'>Explore Auction</button>
            </div>
            </div>
            
            
        </div>
    );
};

export default Herosection;