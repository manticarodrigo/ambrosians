import React from 'react'

const teamList = [
  { src: 'wookie', name: 'Wookie', role: 'Operations' },
  { src: 'hercules', name: 'Hercules', role: 'Community Marketing' },
  { src: 'diogenes', name: 'Diogenes', role: 'Legal' },
  { src: 'perseus', name: 'Perseus', role: 'Finance' },
  { src: 'ivoryblack', name: 'IvoryBlack', role: 'Artist' },
  { src: 'rorro', name: 'Rorro', role: 'Dev' }
]

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-8 md:p-16 w-full bg-gray-900">
      <h3 className="py-8 font-caesar text-3xl text-white">Meet the Team</h3>
      <ul className="max-w-7xl flex flex-wrap my-8 text-sm md:text-xl text-white">
        {teamList.map(({ src, name, role }, index) => (
          <li
            key={index}
            className="flex flex-col items-center w-1/2 md:w-1/3 my-4">
            <img
              className="rounded inline-block w-24 md:w-48"
              src={`/images/team/${src}.jpeg`}
            />
            <div className="pt-4 text-center">
              <p className="font-black text-2xl">{name}</p>
              <p className="font-thin">{role}</p>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="py-8 font-caesar text-3xl text-white">Contact Us</h3>
      <ul className="max-w-7xl flex flex-col md:flex-row my-8 text-sm md:text-xl text-white">
        <li className="m-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/ambrosians"
            className="flex items-center">
            <img
              className="rounded inline-block w-8 md:w-12"
              src={`/images/social/discord.png`}
            />
            <p className="pl-4 font-black">Discord</p>
          </a>
        </li>
        <li className="m-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/AmbrosiansNFT"
            className="flex items-center">
            <img
              className="rounded inline-block w-8 md:w-12"
              src={`/images/social/twitter.png`}
            />
            <p className="pl-4 font-black">Twitter</p>
          </a>
        </li>
      </ul>
      <button
        aria-label="scroll to top"
        className="my-8"
        onClick={() => {
          document.body.scrollTop = 0 // For Safari
          document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
        }}>
        <img src="/images/logo.png" className="w-48" label="Ambrosians Logo" />
      </button>
      <p className="my-8 text-white">All rights reserved 2021 ©</p>
    </div>
  )
}

export default Footer
