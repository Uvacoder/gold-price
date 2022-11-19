import React from "react";
import {BsArrowDown} from 'react-icons/bs';
import {BsArrowUp} from 'react-icons/bs';

export default function index({data}) {
    const date = data.date ? data.date.split('T')[0] : "Now" ;
    // const date = new Date(data.timestamp*1000);
    // let isToday =false;
    // if(date.getDate() ==(new Date()).getDate() && date.getMonth() == (new Date()).getMonth() && date.getFullYear() == (new Date()).getFullYear()) {
    //     isToday =true;
    // }
  return (
    <div className="dark:bg-gray-900">
      <div className="pb-5">
        <div className="mx-auto bg-gradient-to-l to-amber-300 from-stone-400 h-64">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <div className="mt-3">
                <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">Gold , Silver Price </h2>
              </div>
              <div className="mt-6 mx-2 md:mx-0 text-center">
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6 w-10/12">
            <div className="flex justify-center flex-col items-center w-full md:w-full h-56 lg:w-full bg-white shadow rounded-2xl">
                {JSON.stringify(data) == "{}" ? 
                <h2 className="lg:text-2xl md:text-2xl text-2xl font-extrabold leading-10 text-center text-gray-800">Loading ...</h2> :
                <>
              <h2 className="lg:text-2xl md:text-2xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                ({data.metal})
                {data.metal=='XAU'? 'GOLD' : data.metal=='XAG' ? 'SILVER' : data.metal=='XPT'? 'Platinum' : 'Palladium'}
                {" "+data.currency + " "} 
                {date}</h2>
                <div className="flex items-center">
              <h2 className="lg:text-3xl md:text-2xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {data.price + " "}
                </h2>
                {data.ch >= 0 ? 
                <span className="flex items-center text-green-600"><BsArrowUp/> {data.ch} {((data.ch/data.price)*100).toFixed(2)} % </span> : 
                <span className="flex items-center text-red-600 text-2xl"><BsArrowDown/> {data.ch} ({-(((data.ch/data.price)*100).toFixed(2))})% </span>
                }
            </div>
              {date == 'Now' ? 
              <h2 className="text-1xl font-extrabold leading-7 text-center text-gray-800">Open price: {data.open_price} <br></br> High Price : {data.high_price} <br></br> Low Price : {data.low_price}</h2>
              : ''}
              </>
                }
            </div>
            <div className="flex justify-center flex-col items-center w-full md:w-full md:h-48 lg:w-full lg:h-56 bg-white shadow rounded-2xl">
              {/* <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">540+</h2> */}
              <p className="text-sm md:text-base lg:text-lg font-extrabold leading-10 text-center text-gray-700">Price 24K : {data.price_gram_24k} (1 Gram)</p>
              <p className="mt-2 text-sm md:text-base lg:text-lg font-extrabold leading-10 text-center text-gray-700">Price 22K : {data.price_gram_22k} (1 Gram)</p>
              <p className="mt-2 text-sm md:text-base lg:text-lg font-extrabold leading-10 text-center text-gray-700">Price 21K : {data.price_gram_21k} (1 Gram)</p>
              <p className="mt-2 text-sm md:text-base lg:text-lg font-extrabold leading-10 text-center text-gray-700">Price 20K : {data.price_gram_20k} (1 Gram)</p>
              <p className="mt-2 text-sm md:text-base lg:text-lg font-extrabold leading-10 text-center text-gray-700">Price 18K : {data.price_gram_18k} (1 Gram)</p>
            </div>
            {/* <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">300</h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Dedicated Members</p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">25+</h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Awards Won</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
