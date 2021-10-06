import * as R from 'ramda'

const iconList = [
  { icon: 'vase', text: '7,777 Hand-drawn Generative Ambrosians' },
  { icon: 'shield', text: 'Fair Launch and Distribution' },
  {
    icon: 'harp',
    text: 'Ownership and Commercial Use of Your NFT'
  },
  { icon: 'sandal', text: 'Earn Passively' }
]

const LandingPage = () => {
  return (
    <main>
      <section className="flex flex-col items-center w-full">
        <div
          className="flex flex-col justify-center items-center py-80 w-full bg-fixed bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/backgrounds/1.png)'
          }}>
          <h1 className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow">
            Welcome To The Ambrosian Guild
          </h1>
          <div className="py-8">
            <button
              disabled
              className="cursor-not-allowed p-4 uppercase text-white font-bold bg-black shadow-xl">
              Mint (coming soon)
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center p-16 w-full bg-black">
          <div className="py-8 flex flex-wrap justify-center max-w-4xl">
            {R.range(1, 5).map(num => (
              <div key={num} className="p-2 md:p-4 w-1/3 md:w-1/4">
                <img
                  className="rounded shadow-2xl"
                  src={`/images/samples/${num}.png`}
                />
              </div>
            ))}
          </div>
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            Ambrosians is a collection of 7,777 hand-drawn, generative
            NFTs-unique digital collectibles on the Solana blockchain. Your
            Ambrosian doubles as a social-club membership card that will provide
            VIP access to various events around the world, such as beach-parties
            in Greece and El Salvador. Some special-tier Ambrosians will come
            with dividend-yielding capabilities from the secondary market and
            vacation-rental privileges in “The Guild”, located in a private
            beach in El Salvador where you can find beautiful weather, great
            social ambiance, surf lessons, and of course a Bitcoin-friendly
            community.
            <br />
            <br />
            Get ready to party like the Greco-Romans.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center w-full">
        <div
          className="flex justify-center py-80 w-full bg-fixed bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/backgrounds/2.png)'
          }}>
          <h2 className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow">
            What Happens After Mint?
          </h2>
        </div>
        <div className="flex flex-col items-center p-16 w-full bg-black">
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            Post-mint era is the time where the fun begins. A secondary market
            will be established through various marketplaces, which will yield a
            percentage of every sale to some privileged NFT holders. A video
            game will be developed that&apos;s accessible to the public to
            increase our community involvement. NFT holders will have access to
            upgrade their Ambrosians&apos; rarity through special serums that
            will be distributed for free.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center w-full">
        <div
          className="flex flex-col justify-center items-center py-80 w-full bg-fixed bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/backgrounds/3.png)'
          }}>
          <h2 className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow">
            Fair Distribution
          </h2>
        </div>
        <div className="flex flex-col items-center p-16 w-full bg-black">
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            We will not partake in any bonding curves, pre-mints, or any other
            unfair launch strategies. Mint price will be the same for all 7,777
            Ambrosians and will happen through fair-launch at a discussed date.
            We are preparing our back-end infrastructure to have the smoothest
            launch possible.
          </p>
          <div className="max-w-7xl flex flex-col md:flex-row items-center">
            <ul className="my-8 md:w-1/2 text-sm md:text-xl text-white">
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
              <p className="md:py-16 max-w-5xl text-center md:text-3xl text-white">
                Each Ambrosian is programmatically generated from over 125
                unique attributes across 7 categories ranging from armour,
                weapons, head-gear, hair, backgrounds, eye-wear, and skin. Every
                single Ambrosian will be special, but some will be more than
                others.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full">
        <div
          className="flex flex-col justify-center items-center py-80 w-full bg-fixed bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/backgrounds/4.png)'
          }}>
          <h2 className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow">
            Welcome to the Guild
          </h2>
        </div>
        <div className="flex flex-col items-center p-16 w-full bg-black">
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            When you mint/buy an Ambrosian you are officially a member of the
            most exclusive Greek warrior guild which benefits will go beyond the
            blockchain. Your Ambrosian will serve as your digital identity for
            digital and real-life benefits.
          </p>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
