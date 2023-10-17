'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import IconCall from '../icons/Call'
import { Menu } from '@headlessui/react'
import { css } from '@/utils/helpers'
import InstagramIcon from '../icons/Instagram'
import WhatsappIcon from '../icons/Whatsapp'
import LanguageChanger from '../language-changer'

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 bg-white text-gray-900 border-b"
      style={css(
        "z-index: 1000; content: ''; grid-area: 1 / 1 / 2 / 2; box-shadow: 0 0 24px rgba(48, 48, 53, .07);"
      )}
    >
      <div
        className="flex justify-between items-center m-auto max-w-screen-xl w-full px-12"
        style={css('min-height: 80px;')}
      >
        <div className="w-0">
          <Logo />
        </div>

        <nav
          role="navigation"
          className="flex justify-start items-center text-gray-900"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current="page"
              className="inline-block w-full text-right text-l font-medium px-5 cursor-pointer text-gray-900 hover:text-[#ed2a07]"
              style={css('text-decoration: none; transition: color 0.2s ease;')}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="w-0">
          <div
            role="lang"
            className="flex flex-col justify-start items-center text-gray-900"
          >
            <LanguageChanger />
          </div>
        </div>
      </div>
    </header>
  )
}
