/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import SidebarLink from './SidebarLink'
import { DotsHorizontalIcon, HomeIcon } from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <aside className="hidden sm:flex flex-col items-center xl:items-start xl:w-[270px] p-2 fixed h-full">
      <div className="flex items-center justify-center p-0 w-14 h-14 hoverAnimation">
        <Image src="/logo.png" alt="Twitter Logo" width={28} height={28} />
      </div>
      <div className="mb-2 space-y-2">
        <SidebarLink text="Início" Icon={HomeIcon} active={true} />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notificações" Icon={BellIcon} />
        <SidebarLink text="Menssagens" Icon={InboxIcon} />
        <SidebarLink text="Favoritos" Icon={BookmarkIcon} />
        <SidebarLink text="Listas" Icon={ClipboardListIcon} />
        <SidebarLink text="Perfil" Icon={UserIcon} />
        <SidebarLink text="Mais" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation mt-auto">
        <img
          src="https://avatars.githubusercontent.com/u/87643260?v=4"
          alt="User Image"
          className="w-10 h-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">Gabriel Sena</h4>
          <p className="text-[#6e767d]">@stardusteight</p>
        </div>
        <DotsHorizontalIcon className="hidden h-5 ml-[60px] xl:inline" />
      </div>
    </aside>
  )
}

export default Sidebar
