import React, { useEffect, useState } from 'react'

import SwiperCore, { Navigation, EffectCoverflow, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

import { labels } from 'utils/labels'
import { rarities } from 'utils/rarities'

import Select, { Item } from 'components/Select'

import styles from './AttributeList.module.css'

const rarityLabelMap = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  'very-rare': 'Very Rare',
  legendary: 'Legendary',
  godly: 'Godly'
}

const rarityColorMap = {
  common: 'bg-gray-600',
  uncommon: 'bg-green-600',
  rare: 'bg-blue-600',
  'very-rare': 'bg-purple-600',
  legendary: 'bg-red-600',
  godly: 'bg-yellow-600'
}

SwiperCore.use([Navigation, EffectCoverflow, A11y])

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const AttributeList = () => {
  const [swiper, setSwiper] = useState(null)
  const [selectedLayerKey, setSelectedLayerKey] = useState('skin')

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0)
    }
  }, [swiper, selectedLayerKey])

  return (
    <div className="md:flex py-48 max-w-full xl:max-w-6xl">
      <div className="pb-6 md:pr-24 lg:pr-36 text-center">
        <div className="m-4">
          <Select
            label="Choose Layer"
            selectedKey={selectedLayerKey}
            onSelectionChange={setSelectedLayerKey}>
            {Object.keys(labels)
              .filter(n => n !== 'background')
              .map(layer => (
                <Item key={layer}>{capitalize(layer)}</Item>
              ))}
          </Select>
        </div>
      </div>
      <Swiper
        navigation
        centeredSlides
        grabCursor
        effect="coverflow"
        breakpoints={{
          950: {
            slidesPerView: 3
          }
        }}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        className={styles.slider}
        onSwiper={setSwiper}>
        {Object.keys(labels[selectedLayerKey]).map((key, i) => {
          const label = labels[selectedLayerKey][key]
          const rarity = rarities[selectedLayerKey][key]

          return (
            <SwiperSlide
              key={`${selectedLayerKey}-${key}-${i}`}
              className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="rounded w-48 h-48 md:w-64 md:h-64">
                  <img
                    className="w-full h-full"
                    src={`/assets/${selectedLayerKey}/${key}.png`}
                  />
                </div>
                <span className="mt-2 text-center text-white text-lg font-black">
                  {label}
                </span>
                <span className="mt-2 flex items-center text-white text-lg">
                  <span
                    className={`rounded px-3 py-2 font-black font-caesar text-sm ${rarityColorMap[rarity]}`}>
                    {rarityLabelMap[rarity]}
                  </span>
                </span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default AttributeList
