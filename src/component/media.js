import React from 'react'
import VanillaTilt from 'vanilla-tilt'
import sunsal from '../images/logosunsal.png'
import sn from '../images/SN.png'
import cn from '../images/CN.png'

function Media() {
  return (
    <section class="mx-5">
      <div class="container mx-auto">
        <div class="mb-20">
          <h1 class="title-font mb-4 text-2xl font-medium text-gray-900">
            Media Partner
          </h1>
        </div>
        <div class="flex w-full flex-wrap text-center lg:flex-row">
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
              <div class="keyboard-box">
                <h4 class="keyboard-name">Sunsal Media</h4>
                <img src={sunsal} alt="Keychron K3" class="keyboard-img" />
                <a href="#" class="btn btn-light keyboard-detail-button">
                  Show Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
              <div class="keyboard-box">
                <h4 class="keyboard-name">Suara Nabawiy</h4>
                <img src={sn} alt="Keychron K3" class="keyboard-img" />
                <a href="#" class="btn btn-light keyboard-detail-button">
                  Show Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
              <div class="keyboard-box">
                <h4 class="keyboard-name">Cahaya Nabawiy</h4>
                <img src={cn} alt="Keychron K3" class="keyboard-img" />
                <a href="#" class="btn btn-light keyboard-detail-button">
                  Show Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Media
