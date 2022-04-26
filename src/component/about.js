import React from 'react'
import sunsal from '../images/logosunsal.png'

function About() {
  return (
    <section class="body-font bg-slate-100 text-gray-600">
      <div class="container mx-auto flex flex-col px-5 py-24">
        <div class="mx-auto lg:w-4/6">
          <div class="mb-20 flex w-full flex-col text-center">
            <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Tentang Yayasan Sunniyah Salafiyah
            </h1>
          </div>
          <div class="mt-10 flex flex-col sm:flex-row">
            <div
              class="text-center sm:w-1/3 sm:py-8 sm:pr-8"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div class="inline-flex h-20 w-20 items-center justify-center rounded-full text-gray-400">
                <img src={sunsal} alt="sunsal" />
              </div>
              <div class="flex flex-col items-center justify-center text-center">
                <h2 class="title-font mt-4 text-lg font-medium text-gray-900">
                  Profil Yayasan Sunniyah Salafiyah
                </h2>
                <div class="mt-2 mb-4 h-1 w-12 rounded bg-indigo-500"></div>
                <p class="text-base">
                  Raclette knausgaard hella meggs normcore williamsburg enamel
                  pin sartorial venmo tbh hot chicken gentrify portland.
                </p>
              </div>
            </div>
            <div class="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p
                class="mb-4 text-lg leading-relaxed"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Yayasan Sunniyah Salafiyah berkedudukan di Jalan Raya Sidogiri
                Km.1 Dusun Suko Desa Sungiwetan Kecamatan Pohjentrek Kabupaten
                Pasuruan. Didirikan dengan maksud dan tujuan keagamaan, sosial
                dan dan kemanusian, untuk mencapai maksud dan tujuan tersebut
                YAYASAN SUNNIYAH SALAFIYAH menyelenggarakan lembaga pendidikan
                berbasis pondok pesantren dan madrasah. <br />
                Lembaga-lembaga pendidikan dibawah naungan Yayasan Sunniyah
                Salafiyah:
              </p>
              <a class="inline-flex items-center text-indigo-500">
                Selengkapnya
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
