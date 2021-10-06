import * as R from 'ramda'

const iconList = [
  { icon: 'vase', text: '10,000 Hand-drawn Generative Ambrosians' },
  { icon: 'shield', text: 'Fair Launch and Distribution' },
  {
    icon: 'harp',
    text: 'Ownership and Commercial Use of Your NFT'
  },
  { icon: 'sandal', text: 'Earn Passively' }
]

const LandingPage = () => {
  return (
    <main
      className="w-screen bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6)), -webkit-image-set( url('/images/landing/bg_959.jpg') 1x, url('/images/landing/bg.jpg') 2x)`
      }}>
      <section className="flex flex-col items-center py-8 md:py-32 px-8 w-full">
        <div className="flex flex-col items-center">
          <div className="my-8 max-w-5xl">
            <h1 className="text-4xl md:text-7xl font-caesar text-center">
              Welcome To The Ambrosian Guild
            </h1>
          </div>
          <div className="mb-8 flex flex-wrap justify-center max-w-5xl">
            {R.range(1, 5).map(num => (
              <div key={num} className="p-2 md:p-4 w-1/3 md:w-1/4">
                <img
                  className="rounded shadow-2xl"
                  src={`/images/samples/${num}.png`}
                />
              </div>
            ))}
          </div>
        </div>
        <p className="md:py-16 max-w-5xl text-center md:text-3xl">
          Ambrosians is a collection of 7,777 hand-drawn, generative NFTs-unique
          digital collectibles on the Solana blockchain. Your Ambrosian doubles
          as a social-club membership card that will provide VIP access to
          various events around the world, such as beach-parties in Greece and
          El Salvador. Some special-tier Ambrosians will come with
          dividend-yielding capabilities from the secondary market and
          vacation-rental privileges in “The Guild”, located in a private beach
          in El Salvador where you can find beautiful weather, great social
          ambiance, surf lessons, and of course a Bitcoin-friendly community.
          <br />
          <br />
          Get ready to party like the Greco-Romans.
        </p>
      </section>
      <section className="flex flex-col items-center py-8 md:py-64 px-8 w-full">
        <h2 className="my-8 text-4xl md:text-7xl font-caesar text-center">
          What Happens After Mint?
        </h2>
        <p className="md:py-16 max-w-5xl text-center md:text-3xl">
          Post-mint era is the time where the fun begins. A secondary market
          will be established through various marketplaces, which will yield a
          percentage of every sale to some privileged NFT holders. A video game
          will be developed that&apos;s accessible to the public to increase our
          community involvement. NFT holders will have access to upgrade their
          Ambrosians&apos; rarity through special serums that will be
          distributed for free.
        </p>
      </section>
      <section className="flex flex-col items-center py-8 md:py-32 px-8 w-full">
        <h2 className="my-8 text-4xl md:text-7xl font-caesar text-center">
          Fair Distribution
        </h2>
        <p className="md:py-16 max-w-5xl text-center md:text-3xl">
          We will not partake in any bonding curves, pre-mints, or any other
          unfair launch strategies. Mint price will be the same for all 10,000
          Ambrosians and will happen through fair-launch at a discussed date. We
          are preparing our back-end infrastructure to have the smoothest launch
          possible.
        </p>
        <div className="max-w-7xl flex flex-col md:flex-row items-center">
          <ul className="my-8 md:w-1/2 text-sm md:text-xl">
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
            <p className="md:py-16 max-w-5xl text-center md:text-3xl">
              Each Ambrosian is programmatically generated from over 130 unique
              attributes across 7 categories ranging from armour, weapons,
              head-gear, hair, backgrounds, eye-wear, and skin. Every single
              Ambrosian will be special, but some will be more than others.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-8 md:py-32 px-8 w-full">
        <h2 className="my-8 text-4xl md:text-7xl font-caesar text-center">
          Welcome to the Guild
        </h2>
        <p className="md:py-16 max-w-5xl text-center md:text-3xl">
          When you mint/buy an Ambrosian you are officially a member of the most
          exclusive Greek warrior guild which benefits will go beyond the
          blockchain. Your Ambrosian will serve as your digital identity for
          digital and real-life benefits.
        </p>
      </section>
    </main>
  )
}

export default LandingPage
