import React from 'react'
import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'

const Feed = () => {
  return (
    <div className="flex-grow max-w-2xl text-white border-gray-700 border-x sm:ml-[73px] xl:ml-[270px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-lg font-bold sm:text-xl">Início</h2>
        <div className="flex items-center justify-center ml-auto hoverAnimation w-9 h-9 xl:px-0">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      <Input />
    </div>
  )
}

export default Feed
