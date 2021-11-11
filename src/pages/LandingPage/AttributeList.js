import React, { useEffect, useState } from 'react'
import * as R from 'ramda'

import SwiperCore, { Navigation, EffectCoverflow, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

import Select, { Item } from 'components/Select'

import styles from './AttributeList.module.css'

SwiperCore.use([Navigation, EffectCoverflow, A11y])

const attributes = [
  {
    label: 'Body',
    path: 'body',
    traits: [
      { label: 'Light', path: 'light', rarity: 0.25 },
      { label: 'Dark', path: 'dark', rarity: 0.25 },
      { label: 'Demigod', path: 'demigod', rarity: 0.125 },
      { label: 'Nymph', path: 'nymph', rarity: 0.125 },
      { label: 'Tattoo', path: 'tattoo', rarity: 0.125 },
      { label: 'Underworld', path: 'underworld', rarity: 0.125 }
    ]
  },
  {
    label: 'Eyes',
    path: 'eyes',
    traits: [
      { label: 'Standard', path: 'standard', rarity: 0.25 },
      { label: 'Lightning', path: 'lightning', rarity: 0.125 },
      { label: 'Blind', path: 'blind', rarity: 0.075 },
      { label: 'Cyclops', path: 'cyclops', rarity: 0.075 },
      { label: 'Laser 1', path: 'laser-1', rarity: 0.075 },
      { label: 'Laser 2', path: 'laser-2', rarity: 0.075 },
      { label: 'Patch', path: 'patch', rarity: 0.075 }
    ]
  },
  {
    label: 'Headwear',
    path: 'head-accessory',
    traits: [
      {
        label: 'Ambrosians Bandana',
        path: 'bandana-ambrosians',
        rarity: 0.1
      },
      {
        label: 'Ambrosians Cryptopunk',
        path: 'bandana-cryptopunk',
        rarity: 0.1
      },
      {
        label: 'Gold Olympus Crown',
        path: 'crown-gold-olympus',
        rarity: 0.075
      },
      {
        label: 'Green Olympus Crown',
        path: 'crown-green-olympus',
        rarity: 0.075
      },
      { label: 'Halo', path: 'halo', rarity: 0.075 },
      { label: 'Cerberus Hat', path: 'hat-cerberus', rarity: 0.075 },
      { label: 'Lion Hat', path: 'hat-lion', rarity: 0.075 },
      { label: 'Minotaur Hat', path: 'hat-minotaur', rarity: 0.075 },
      { label: 'Hermes Hat', path: 'helmet-hermes', rarity: 0.075 },
      { label: 'Ares Hat', path: 'helmet-ares', rarity: 0.075 },
      { label: 'Artemis Hat', path: 'helmet-artemis', rarity: 0.075 },
      { label: 'Party Hat', path: 'party-hat', rarity: 0.0125 },
      { label: 'Hades Crown', path: 'crown-hades', rarity: 0.0125 },
      { label: 'Poseidon Crown', path: 'crown-poseidon', rarity: 0.0125 },
      { label: 'Zeus Crown', path: 'crown-zeus', rarity: 0.0125 }
    ]
  }
]

const rarities = {
  common: { label: 'Common', color: 'gray-600' },
  uncommon: { label: 'Uncommon', color: 'green-600' },
  rare: { label: 'Rare', color: 'blue-600' },
  legendary: { label: 'Legendary', color: 'yellow-600' },
  mythic: { label: 'Mythic', color: 'red-600' }
}

const AttributeList = () => {
  const [swiper, setSwiper] = useState(null)
  const [selectedLayerKey, setSelectedLayerKey] = useState('body')
  const [selectedRarityKey, setSelectedRarityKey] = useState('all')

  const selectedLayer = R.find(R.propEq('path', selectedLayerKey), attributes)

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0)
    }
  }, [swiper, selectedLayerKey, selectedRarityKey])

  const getRarityKey = rarity => {
    if (rarity <= 0.0125) return 'mythic'
    if (rarity <= 0.075) return 'legendary'
    if (rarity <= 0.1) return 'rare'
    if (rarity <= 0.125) return 'uncommon'

    return 'common'
  }

  const getRarityLabel = rarity => {
    return rarities[getRarityKey(rarity)].label
  }

  const getRarityColor = rarity => {
    return rarities[getRarityKey(rarity)].color
  }

  const activeTraits = R.filter(
    selectedRarityKey === 'all'
      ? R.identity
      : R.propSatisfies(r => getRarityKey(r) === selectedRarityKey, 'rarity'),
    selectedLayer.traits
  )

  return (
    <div className="md:flex py-48 max-w-full xl:max-w-6xl">
      <div className="pb-6 md:pr-24 lg:pr-36 text-center">
        <div className="m-4">
          <Select
            label="Choose Layer"
            selectedKey={selectedLayerKey}
            onSelectionChange={setSelectedLayerKey}>
            {attributes.map(({ path, label }) => (
              <Item key={path}>{label}</Item>
            ))}
          </Select>
        </div>
        <div className="m-4">
          <Select
            label="Choose Rarity"
            selectedKey={selectedRarityKey}
            onSelectionChange={setSelectedRarityKey}>
            <Item key="all">All</Item>
            {Object.keys(rarities).map(key => (
              <Item key={key}>{rarities[key].label}</Item>
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
        {activeTraits.map(({ label, path, rarity }, i) => (
          <SwiperSlide
            key={`${selectedLayer.path}-${path}-${i}`}
            className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="relative rounded w-48 h-48 md:w-64 md:h-64 bg-gray-300">
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  src="/traits/body/placeholder.png"
                />
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  src={`/traits/${selectedLayer.path}/${path}.png`}
                />
              </div>
              <span className="mt-2 text-white text-lg font-black">
                {label}
              </span>
              <span className="mt-2 flex items-center text-white text-lg">
                <span
                  className={`rounded p-2 font-black font-caesar text-sm bg-${getRarityColor(
                    rarity
                  )}`}>
                  {getRarityLabel(rarity)}{' '}
                  <span className="font-sans">
                    - {(rarity * 100).toFixed(1)}%
                  </span>
                </span>
              </span>
            </div>
          </SwiperSlide>
        ))}
        {activeTraits.length < 3 &&
          R.range(0, 3 - activeTraits.length).map(i => (
            <SwiperSlide key={i}>
              <div className="py-36 w-48 h-48 md:w-64 md:h-64"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default AttributeList
