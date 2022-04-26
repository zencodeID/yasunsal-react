import React from 'react'
import sunsal from '../images/logosunsal.png'

function Navbar() {
  return (
    <div>
      <header class="body-font text-gray-600">
        <div class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <a class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <img
              src={sunsal}
              height="50px"
              width="50px"
              class="h-50 w-50 rounded-full p-2 text-white"
              alt=""
            />
            <span class="ml-3 text-xl">Yayasan Sunniyah Salafiyah</span>
          </a>
          <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <a class="mr-5 hover:text-gray-900">Tentang</a>
            <a class="mr-5 hover:text-gray-900">Lembaga</a>
            <a class="mr-5 hover:text-gray-900">Fasilitas</a>
            <a class="mr-5 hover:text-gray-900">Blog</a>
            <a class="mr-5 hover:text-gray-900">Gallery</a>
            <a class="mr-5 hover:text-gray-900">Kontak</a>
          </nav>
          <a
            href="https://ppdb.sunsal.net/formulirpendaftar/#/"
            class="mt-4 inline-flex items-center rounded-3xl border-0 bg-slate-700 py-2 px-8 text-xl text-white hover:bg-gray-200 focus:outline-none md:mt-0"
          >
            Daftar
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar
