'use client'

import {
    MagnifyingGlassCircleIcon,
    PlayCircleIcon,
  } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
    {name: 'Insights', href: '/insights'},
    {name: 'Actions', href: '/actions'},
    // {name: 'ActionsV2', href: '/actionsv2'},
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className='links flex items-end grow-1 w-fit justify-items-stretch '>
    {
      links.map((link) => {
        return (
            <Link 
            key={link.name} 
            href={link.href}
            className={clsx(
              ' border-dd-blue border-r border-b mx-2 pr-1 text-dd-blue hover:border-r-d-blue hover:border-b-d-blue hover:text-d-blue active:text-yellow transition duration-0 hover:duration-150',
              {
                'border-r-white border-b-white text-vl-blue disabled-link': pathname === link.href,
              },
            )}
          >
            {link.name}
          </Link>
        )
      })
    }
    <span key='logout' className='w-6 h-6 text-dd-blue mx-6 hover:text-vl-blue'><UserCircleIcon/></span>
    </div>
  )
}