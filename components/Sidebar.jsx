/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Menu } from '@headlessui/react'

import SidebarLink from './SidebarLink'
import { DotsHorizontalIcon, HomeIcon } from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  LogoutIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
  const { data: session } = useSession()

  return (
    <aside className="hidden sm:flex flex-col items-center xl:items-start xl:w-[270px] p-2 fixed h-full">
      <div className="flex items-center justify-center p-0 w-14 h-14 hoverAnimation">
        <Image src="/logo.png" alt="Twitter Logo" width={28} height={28} />
      </div>
      <div className="w-full mb-2 space-y-2">
        <SidebarLink text="Início" Icon={HomeIcon} active={true} />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notificações" Icon={BellIcon} />
        <SidebarLink text="Mensagens" Icon={InboxIcon} />
        <SidebarLink text="Favoritos" Icon={BookmarkIcon} />
        <SidebarLink text="Listas" Icon={ClipboardListIcon} />
        <SidebarLink text="Perfil" Icon={UserIcon} />
        <SidebarLink text="Mais" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <Menu>
        <div className="relative mt-auto">
          <Menu.Button className="text-[#d9d9d9] flex items-center justify-center hoverAnimation mt-auto">
            <img
              src={session.user.image}
              alt="User image"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full xl:mr-2.5"
            />
            <div className="hidden leading-5 xl:inline">
              <h4 className="font-bold">{session.user.name}</h4>
              <p className="text-[#6e767d]">@{session.user.tag}</p>
            </div>
            <DotsHorizontalIcon className="hidden h-5 ml-[60px] xl:inline" />
          </Menu.Button>
          <Menu.Items className="absolute text-white top-[50%] cursor-pointer -translate-y-[50%] right-[10px] p-2 bg-[#1d9bf0] hover:bg-[#1a8cd8] rounded-full">
            <Menu.Item>
              <div onClick={signOut}>
                <LogoutIcon className="h-5" />
              </div>
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    </aside>
  )
}

export default Sidebar
