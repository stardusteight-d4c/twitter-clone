/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import Trending from './Trending'

import { SearchIcon } from '@heroicons/react/outline'

const Widgets = ({ trendingResults, followResults }) => {
  return (
    <aside className="hidden lg:inline ml-8 xl:w-[550px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <SearchIcon className="z-50 h-5 text-gray-500" />
          <input
            type="text"
            className="bg-transparent py-[9px] placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
            placeholder="Procurar Twitter"
          />
        </div>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl xl:w-11/12">
        <h4 className="px-4 font-bold text-left">O que está acontecendo</h4>
        {trendingResults.map((result, index) => (
          <Trending key={index} result={result} />
        ))}
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Mostrar mais
        </button>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl xl:w-11/12">
        <h4 className="px-4 font-bold text-left">Quem seguir</h4>
        {followResults.map((result, index) => (
          <div
            key={index}
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
          >
            <Image
              src={result.userImg}
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                {result.username}
              </h4>
              <h5 className="text-gray-500 text-[15px]">{result.tag}</h5>
            </div>
            <button className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>
        ))}
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Mostrar mais
        </button>
      </div>
    </aside>
  )
}

export default Widgets
