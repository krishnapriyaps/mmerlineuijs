"use client"
import NavLinks from '@/ui/top-nav-links'
import Link from 'next/link';

export default function Header() {
    return (
        <div className='header w-full bg-l-blue p-2 flex flex-row items-end justify-between grow'>
              <span className='text-l text-dd-blue font-semibold'>
              <Link
                    key='Insights' 
                    href='/insights'
                    className='mx-2 pr-1 text-dd-blue hover:text-vl-blue'
                >
                    Merlin
                </Link>
              </span>
              <NavLinks />
          </div>
    );
}