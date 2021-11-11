import React from 'react'

export const Section = props => {
  return <section className="flex flex-col items-center w-full" {...props} />
}

export const Header = ({ level = '2', ...props }) => {
  const Component = `h${level}`

  return (
    <Component
      className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow"
      {...props}
    />
  )
}

export const ParallaxSection = ({ url, ...props }) => {
  return (
    <div
      className="flex flex-col justify-center items-center py-80 w-full xl:bg-fixed bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: `url(${url})`
      }}
      {...props}
    />
  )
}

export const ContentSection = ({ bg = 'black', ...props }) => (
  <div
    className={`flex flex-col items-center p-8 md:p-16 w-full bg-${bg}`}
    {...props}
  />
)

export const Paragraph = props => (
  <p className="py-8 text-white text-center md:text-3xl max-w-4xl" {...props} />
)
