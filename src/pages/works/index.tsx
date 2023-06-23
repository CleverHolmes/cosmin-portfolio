/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import React from 'react'

const Works: NextPage = () => {
  const { theme } = useTheme()
  return (
    <div className='w-[80%] mx-auto px-4 pt-5'>
      <div id="experience" className="container mx-auto">
        <div>
          <h1 className="text-[32px] text-center font-[800] uppercase">My experience</h1>
          <div className="flex flex-wrap justify-center my-5">
            <button className="py-2 border-[#aaa] border-[1px] text-center font-bold rounded-md m-2 px-5">All</button>
            <button className="py-2 shadow-tab text-[#4297aa] border-[#4297aa] border-[1px] text-center font-bold rounded-md m-2 px-5">Web3</button>
            <button className="py-2 border-[#aaa] border-[1px] text-center font-bold rounded-md m-2 px-5">Game</button>
            <button className="py-2 border-[#aaa] border-[1px] text-center font-bold rounded-md m-2 px-5">E-Commerce</button>
            <button className="py-2 border-[#aaa] border-[1px] text-center font-bold rounded-md m-2 px-5">SaaS</button>
            <button className="py-2 border-[#aaa] border-[1px] text-center font-bold rounded-md m-2 px-5">Education</button>
            <button className="py-2 border-[#aaa] border-[1px] text-center font-bold rounded-md m-2 px-5">Blog</button>
            <button className="py-2 border-[#aaa] border-[1px] text-center font-bold rounded-md m-2 px-5">Design</button>
          </div>
        </div>
        <div className="experience">
          <div className="flex flex-wrap justify-center">
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"160px"}
                src="/projects/project-14.webp"
                alt="No Image"
                className="group-hover:hidden rounded-t-[12px] w-full h-[160px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Frontend Developer</p>
                <Link href="https://moduluc.com/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://moduluc.com/</Link>
                <p className="text-[12px]">I built a pixel-perfect Next.js+TS frontend from Figma design. Component design was innovative in order to follow a special design that is not a grid type and a design that changes every day.</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Next.js</li>
                  <li className="text-[12px] ml-3"> Web3.js</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"160px"}
                src="/projects/project-20.webp"
                alt=""
                className="rounded-t-[12px] w-full h-[160px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Game Developer | Fullstack developer</p>
                <Link href="https://www.solanashuffle.com/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://www.solanashuffle.com/</Link>
                <p className="text-[12px]">Web3 Casino Game. It has Jackpot, Tower, Coin-Flip games</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Go</li>
                  <li className="text-[12px] ml-3"> React</li>
                  <li className="text-[12px] ml-3"> TailwindCSS</li>
                  <li className="text-[12px] ml-3"> Web3</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"160px"}
                src="/projects/project-21.webp"
                alt=""
                className="rounded-t-[12px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Solana Frontend developer</p>
                <Link href="https://slowrug.io/play" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://slowrug.io/play</Link>
                <p className="text-[12px]">Solana Casino Game</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Solana</li>
                  <li className="text-[12px] ml-3"> Web3</li>
                  <li className="text-[12px] ml-3"> Next.js</li>
                  <li className="text-[12px] ml-3"> TailwindCSS</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"160px"}
                src="/projects/project-11.webp"
                className="rounded-t-[12px] object-cover"
                alt="" />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Web3 E-commerce Developer</p>
                <Link href="https://www.shreddedapes.shop/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://www.shreddedapes.shop/</Link>
                <p className="text-[12px]">Product market. As the head developer of webshop, I made ecommerce with Web3.js with Next.js. There is token transaction validation. Users can purchase products with SPL tokens ($WHEY, $DUSTY) and regular payments(Credit card, Paypal, and so on).</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Rust</li>
                  <li className="text-[12px] ml-3"> Web3</li>
                  <li className="text-[12px] ml-3"> Firebase</li>
                  <li className="text-[12px] ml-3"> Next.js</li>
                  <li className="text-[12px] ml-3"> commercejs</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"160px"}
                src="/projects/project-10.webp"
                alt=""
                className="rounded-t-[12px] w-full h-[160px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Solana Web3 Frontend Developer</p>
                <Link href="https://www.shreddedapes.io/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://www.shreddedapes.io/</Link>
                <p className="text-[12px]">SAGC Landing page. I made the Landing page with Next.js an Web3.js. Introducing roadmaps, staking, bootcamps, webshops, and more.</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Web3</li>
                  <li className="text-[12px] ml-3"> Next.js</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width="100%"
                height="160px"
                src="/projects/project-8.webp"
                className="rounded-t-[12px] w-full h-[160px] object-cover"
                alt=""
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">
                  Solana Fullstack Developer</p>
                <Link href="https://www.shreddedapes-staking.io/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://www.shreddedapes-staking.io/</Link>
                <p className="text-[12px]">Solana NFT Staking Website. I made the Smart contact by using Rust and built React frontend. This site give rewards to user by there own Token called $WHEY</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Rust</li>
                  <li className="text-[12px] ml-3"> Web3</li>
                  <li className="text-[12px] ml-3"> React.js</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"100px"}
                src="/projects/project-16.webp"
                alt=""
                className="rounded-t-[12px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Game Developer | Fullstack developer</p>
                <Link href="https://degentaxi.io/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://degentaxi.io/</Link>
                <p className="text-[12px]">DegenTaxi - Car Crash</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Rust</li><li className="text-[12px] ml-3"> React.js</li>
                  <li className="text-[12px] ml-3"> Unity</li>
                  <li className="text-[12px] ml-3"> Node.js</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"100px"}
                src="/projects/project-19.webp"
                alt=""
                className="rounded-t-[12px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Solana/AWS Fullstack developer</p>
                <Link href="https://game.solarmy.io/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://game.solarmy.io/</Link>
                <p className="text-[12px]">Solarmy | NFT Game | NFT Staking | Fusion</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Rust</li>
                  <li className="text-[12px] ml-3"> Next.js</li>
                  <li className="text-[12px] ml-3"> Node.js</li>
                  <li className="text-[12px] ml-3"> AWS</li>
                  <li className="text-[12px] ml-3"> Hashlips</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"160px"}
                src="/projects/project-18.webp"
                alt=""
                className="rounded-t-[12px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Fullstack developer</p>
                <Link href="https://slotz.deezkits.com/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://slotz.deezkits.com/</Link>
                <p className="text-[12px]">Deez kits | Slotz game</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Solana</li>
                  <li className="text-[12px] ml-3"> Rust</li>
                  <li className="text-[12px] ml-3"> React.js</li>
                  <li className="text-[12px] ml-3"> Node.js</li>
                  <li className="text-[12px] ml-3"> AWS</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"100px"}
                src="/projects/project-17.webp"
                alt=""
                className="rounded-t-[12px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Solana Fullstack developer</p>
                <Link href="https://coinflip.deezkits.com/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://coinflip.deezkits.com/</Link>
                <p className="text-[12px]">Deez kits | Coin flip game</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Rust</li>
                  <li className="text-[12px] ml-3"> React.js</li>
                  <li className="text-[12px] ml-3"> Node.js</li>
                  <li className="text-[12px] ml-3"> AWS</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"100px"}
                src="/projects/project-15.webp"
                alt=""
                className="rounded-t-[12px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Solana Fullstack Developer</p>
                <Link href="https://mausoleum.tombstoned.xyz/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://mausoleum.tombstoned.xyz/</Link>
                <p className="text-[12px]">NFT Raffle, Auction. The Mausoleum project</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Rust</li>
                  <li className="text-[12px] ml-3"> Next.js</li>
                  <li className="text-[12px] ml-3"> Web3.js</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"160px"}
                src="/projects/project-3.webp"
                alt=""
                className="rounded-t-[12px] object-cover" />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Frontend/Web3 Developer</p>
                <Link href="https://www.vethugs.com/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://www.vethugs.com/</Link>
                <p className="text-[12px]">Vethugs.com is based on the VeChain and uses the token called VET. I built it with React.js and Sync Wallet - Desktop wallet. The client needed daily updates and I could make a perfect result.</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Solidity</li>
                  <li className="text-[12px] ml-3"> Web3</li>
                  <li className="text-[12px] ml-3"> Next.js</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"100px"}
                src="/projects/project-6.webp"
                alt=""
                className="rounded-t-[12px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Web3 Developer</p>
                <Link href="https://wooshi.world/" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://wooshi.world/</Link>
                <p className="text-[12px]">In this project, I modified some components of this site. This project was coded by Shopify. I worked on the internet to add Web3 functions in this code and fixed 12 bugs.</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Web3</li>
                  <li className="text-[12px] ml-3"> Shopify</li>
                </ul>
              </div>
            </div>
            <div className="group card-shadow rounded-xl flex flex-col w-full sm:w-[318px] !p-0 my-5 mx-2.5">
              <Image
                width={"100%"}
                height={"160px"}
                src="/projects/project-2.webp"
                alt=""
                className="rounded-t-[12px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold  text-[16px] my-1">Blockchain Fullstack Developer</p>
                <Link href="https://foxfinance.io/Marketplace" target="_blank" rel="noreferrer" className="text-[14px] text-[#4297aa]">https://foxfinance.io/Marketplace</Link>
                <p className="text-[12px]">I updated this page. Before I worked, NFT cards were not allowed to change their properties once made. Then I add the functions to CHANGE the price and quantities and MAKE a new card. Of course, I also rebuilt the website using Nuxt.js and Web3 and the smart contract of the marketplace by using Solidity.</p>
                <ul className="flex flex-wrap gap-3 mt-4 list-disc">
                  <li className="text-[12px] ml-3">Solidity</li>
                  <li className="text-[12px] ml-3"> Web3</li>
                  <li className="text-[12px] ml-3"> Nuxt.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
