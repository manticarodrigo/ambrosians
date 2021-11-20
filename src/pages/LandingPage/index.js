import React, { useState } from 'react'
import * as R from 'ramda'

import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'

import MintButton from 'components/MintButton'
import ExpandVertical from 'components/ExpandVertical'

import {
  Section,
  Header,
  Paragraph,
  ParallaxSection,
  ContentSection
} from './ui'

import AttributeList from './AttributeList'
import Footer from './Footer'

const iconList = [
  { icon: 'vase', text: '7,777 Hand-drawn Generative Ambrosians' },
  { icon: 'shield', text: 'Fair Launch and Distribution' },
  {
    icon: 'harp',
    text: 'Ownership and Commercial Use of Your NFT'
  },
  { icon: 'sandal', text: 'Ambrosian Lottery' }
]

const LandingPage = () => {
  const [readMore, setReadMore] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <Section>
        <ParallaxSection url="/images/backgrounds/1.jpg">
          <Header level="1">Welcome To The Ambrosian Guild</Header>
          <div className="flex flex-col py-8">
            <MintButton />
          </div>
        </ParallaxSection>
        <ContentSection>
          <div className="py-8 flex flex-wrap justify-center max-w-4xl">
            {R.range(1, 5).map(num => (
              <div key={num} className="p-2 md:p-4 w-1/2 md:w-1/4">
                <img
                  className="rounded shadow-2xl"
                  src={`/images/samples/${num}.png`}
                />
              </div>
            ))}
          </div>
          <Paragraph>
            In a place that knows no time, where Olympians live their days and
            the clouds look like gold, lies Mt. Olympus. This is the home of the
            Champions, Gods, and honorable Legends whose deeds shall be
            remembered for eternity.{readMore ? '' : '..'}
          </Paragraph>
          <ExpandVertical scrollOnCollapse expanded={readMore}>
            <Paragraph>
              In the heart of the cosmos lies the land of the mortals and the
              darkness of the Underworld. The Greek cosmos is wide and vast. You
              can find everything from the Palace of Zeus to the Garden of
              Hesperides. If you dare to explore, you&apos;ll find the depth of
              Poseidon&apos;s Sea and maybe even Charon&apos;s boat at the River
              Styx. If you are valiant enough, you can peek into the Gates of
              the Underworld, or even the Abyss of Tartarus… where the Titans
              are patiently waiting for their time to reclaim what they deem
              theirs.
            </Paragraph>
            <Paragraph>
              For eons, far beyond what any human can grasp, the Gates that hold
              these Titans had remained closed. However, this was until Chaos, a
              God that precedes the universe, decided to make things
              interesting. Chaos, motivated by the same thing that granted him
              his name, tipped the balances of power and unleashed the Titans
              from their slumber.
            </Paragraph>
            <Paragraph>
              What comes next, is nothing short of a nightmare. The Titans
              finally freed from their shackles, used their power to breach the
              heavens and take Olympus by force. The battle was short. Olympians
              were not prepared for an attack of this magnitude. Tarnished by
              the unfamiliar taste of defeat and exile, they seeked refuge in
              the world of men.
            </Paragraph>
            <Paragraph>
              Anguished, and craving their sacred Ambrosia, Olympians who wanted
              their home back, mortals that would do anything to try the
              Gods&apos; elixir, beings of the Underworld wanting to return the
              Titans to Tartarus out of spite, and even sacred creatures like
              nymphs and minotaurs, formed an alliance. An alliance bound to
              regress the hands of time. An alliance determined to imprison the
              Titans back where they belong. An alliance like no other. These
              are the Ambrosians.
            </Paragraph>
          </ExpandVertical>
          <button
            className="flex items-center text-white"
            onClick={() => setReadMore(R.not)}>
            Read {readMore ? 'less' : 'more'}
            {readMore ? (
              <ChevronUpIcon width={38} />
            ) : (
              <ChevronDownIcon width={38} />
            )}
          </button>
        </ContentSection>
      </Section>
      <Section>
        <ParallaxSection url="/images/backgrounds/2.jpg">
          <Header>Ambrosian Manifesto</Header>
        </ParallaxSection>
        <ContentSection>
          <img src="/images/manifesto.png" />
        </ContentSection>
      </Section>
      <Section>
        <ParallaxSection url="/images/backgrounds/3.jpg">
          <Header>Roadmap</Header>
        </ParallaxSection>
        <ContentSection>
          <div className="max-w-7xl flex flex-col lg:flex-row items-center">
            <ul className="p-8 lg:p-16 md:w-1/2 text-sm md:text-xl text-white">
              {iconList.map(({ icon, text }, index) => (
                <li key={index} className="flex items-center">
                  <img
                    className="inline-block w-24 md:w-40"
                    src={`/images/icons/${icon}.png`}
                  />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <div className="md:w-1/2">
              <button
                aria-label="Open roadmap preview"
                onClick={() => setModalOpen(true)}>
                <img src="/images/roadmap.png" />
              </button>
              <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                classNames={{
                  modalContainer: 'flex justify-center items-center'
                }}
                styles={{
                  root: { overflow: 'auto' },
                  modalContainer: { height: 'unset' },
                  modal: { maxWidth: '90%', padding: 0, borderRadius: '.25rem' }
                }}>
                <img src="/images/roadmap.png" />
              </Modal>
            </div>
          </div>
        </ContentSection>
      </Section>
      <Section>
        <ParallaxSection url="/images/backgrounds/4.jpg">
          <Header>Attribute List</Header>
        </ParallaxSection>
        <ContentSection>
          <AttributeList />
        </ContentSection>
      </Section>
      <Section>
        <Footer />
      </Section>
    </main>
  )
}

export default LandingPage
