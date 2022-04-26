import React from 'react'
import sunsal from '../images/logosunsal.png'

function Lembaga() {
  return (
    <section class="body-font text-gray-600 bg-stone-100">
      <div class="container mx-auto px-5 py-24">
        <div class="mb-20 flex w-full flex-col text-center">
          <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
            Lembaga
          </h1>
          <p class="mx-auto text-base leading-relaxed lg:w-2/3">
            Lembaga yang berada dibawah naungan yayasan sunniyah salafiyah
          </p>
        </div>
        <div class="-m-2 flex flex-wrap">
          <div class="w-full p-2 md:w-1/2 lg:w-1/3">
            <div class="flex h-full items-center rounded-lg border border-gray-200 p-4 hover:bg-kedua">
              <img
                alt="team"
                class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                src={sunsal}
              />
              <div class="flex-grow">
                <h2 class="title-font font-medium text-gray-900">
                  Pondok Athfal
                </h2>
                <p class="text-gray-500">Pondok anak max usia 12 tahun</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 md:w-1/2 lg:w-1/3">
            <div class="flex h-full items-center rounded-lg border border-gray-200 p-4 hover:bg-kedua">
              <img
                alt="team"
                class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                src={sunsal}
              />
              <div class="flex-grow">
                <h2 class="title-font font-medium text-gray-900">
                  Pondok Putra Sunniyah Salafiyah
                </h2>
                <p class="text-gray-500">Tanpa sekolah formal putra</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 md:w-1/2 lg:w-1/3">
            <div class="flex h-full items-center rounded-lg border border-gray-200 p-4 hover:bg-kedua">
              <img
                alt="team"
                class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                src={sunsal}
              />
              <div class="flex-grow">
                <h2 class="title-font font-medium text-gray-900">
                  SMP Putra Al-Azhar
                </h2>
                <p class="text-gray-500">Sekolah Formal SMP + Pondok</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 md:w-1/2 lg:w-1/3">
            <div class="flex h-full items-center rounded-lg border border-gray-200 p-4 hover:bg-kedua">
              <img
                alt="team"
                class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                src={sunsal}
              />
              <div class="flex-grow">
                <h2 class="title-font font-medium text-gray-900">
                  SMP Putra Al-Azhar
                </h2>
                <p class="text-gray-500">Sekolah Formal SMA + Pondok</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 md:w-1/2 lg:w-1/3">
            <div class="flex h-full items-center rounded-lg border border-gray-200 p-4 hover:bg-kedua">
              <img
                alt="team"
                class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                src={sunsal}
              />
              <div class="flex-grow">
                <h2 class="title-font font-medium text-gray-900">
                  Pondok Putri Az-zahro'
                </h2>
                <p class="text-gray-500">Tanpa sekolah formal putri</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 md:w-1/2 lg:w-1/3">
            <div class="flex h-full items-center rounded-lg border border-gray-200 p-4 hover:bg-kedua">
              <img
                alt="team"
                class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                src={sunsal}
              />
              <div class="flex-grow">
                <h2 class="title-font font-medium text-gray-900">
                  SMP Putri Al-azhar
                </h2>
                <p class="text-gray-500">Sekolah Formal SMA + Pondok</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 md:w-1/2 lg:w-1/3">
            <div class="flex h-full items-center rounded-lg border border-gray-200 p-4 hover:bg-kedua">
              <img
                alt="team"
                class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                src={sunsal}
              />
              <div class="flex-grow">
                <h2 class="title-font font-medium text-gray-900">
                  SMK Putri Al-azhar
                </h2>
                <p class="text-gray-500">Sekolah Formal SMA + Pondok</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 md:w-1/2 lg:w-1/3">
            <div class="flex h-full items-center rounded-lg border border-gray-200 p-4 hover:bg-kedua">
              <img
                alt="team"
                class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                src={sunsal}
              />
              <div class="flex-grow">
                <h2 class="title-font font-medium text-gray-900">
                  Pondok Takhfidz Putra Sunniyah Salafiyah
                </h2>
                <p class="text-gray-500">
                  Tanpa sekolah formal dan khusus penghafal Alqur'an
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lembaga
