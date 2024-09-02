"use client";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

function Page() {
  const [navOpen, setNavOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleNav() {
    setNavOpen((open) => !open);
    setToggleMenu((toggle) => !toggle);
    console.log(navOpen);
  }

  return (
    <main className="mx-4 my-8 laptop:mx-8 deskop:mx-14">
      <div className="flex justify-between">
        <Image
          src="/assets/images/logo.svg"
          width={40}
          height={40}
          alt="logo"
        />
        {!navOpen && (
          <Image
            src="/assets/images/icon-menu.svg"
            width={30}
            height={30}
            alt="logo"
            className="block largeLaptop:hidden z-20"
            onClick={() => handleNav()}
          />
        )}
        {navOpen && (
          <Image
            src="/assets/images/icon-menu-close.svg"
            width={25}
            height={25}
            alt="logo"
            className="block largeLaptop:hidden z-20"
            onClick={() => handleNav()}
          />
        )}
        <nav className="hidden largeLaptop:block">
          <ul className="flex gap-x-6">
            <li className="text-darkgray">
              <a href="#">Home</a>
            </li>
            <li className="text-darkgray">
              <a href="#">New</a>
            </li>
            <li className="text-darkgray">
              <a href="#">Popular</a>
            </li>
            <li className="text-darkgray">
              <a href="#">Trending</a>
            </li>
            <li className="text-darkgray">
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>

        <nav
          className={clsx(
            "absolute right-0  bg-white w-3/4 px-5 h-full largeLaptop:hidden transition-all",
            { "-mr-[300px]": navOpen === false }
          )}
        >
          <ul className="flex flex-col gap-y-6 mt-14">
            <li className="text-black font-semibold text-xl">
              <a href="#">Home</a>
            </li>
            <li className="text-black font-semibold text-xl">
              <a href="#">New</a>
            </li>
            <li className="text-black font-semibold text-xl">
              <a href="#">Popular</a>
            </li>
            <li className="text-black font-semibold text-xl">
              <a href="#">Trending</a>
            </li>
            <li className="text-black font-semibold text-xl">
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>
      </div>
      <Image
        src="/assets/images/image-web-3-mobile.jpg"
        width={570}
        height={250}
        className="mt-10 block tablet:hidden"
        alt="logo"
      />

      <div className="laptop:grid laptop:grid-cols-[3fr_1.5fr] gap-x-4 mt-10 mb-12">
        <div>
          <Image
            src="/assets/images/image-web-3-desktop.jpg"
            width={800}
            height={250}
            className=" hidden tablet:block laptop:width-full"
            alt="logo"
          />
          <div className="tablet:grid grid-cols-2 gap-x-1 items-center laptop:mb-0 mb-10">
            <h2 className="text-5xl mt-4 font-semibold">
              The Bright future of web 3.0?
            </h2>
            <div>
              <p className="text-lg mt-5">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="text-xl bg-red py-2 px-4 mt-5 font-bold ">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="bg-darkblue text-white py-2 px-4">
          <h2 className="text-2xl font-bold text-yellow-600 my-5">New</h2>
          <p className="text-xl font-semibold ">Hydrogen VS Electric Cars</p>
          <p className="text-lightgray my-2 border-b-2 pb-5 border-slate-200">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <p className="text-xl font-semibold">The Downsides of AI Artistry</p>
          <p className="my-2 text-lightgray border-b-2 pb-5">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <p className="text-xl font-semibold"> Is VC Funding Drying Up?</p>
          <p className="my-2 text-lightgray border-b-2 pb-5 mb-4">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>

      <div className="mt-8 laptop:grid laptop:grid-cols-2 gap-2">
        <div className="flex gap-x-5 items-center mb-5">
          <Image
            src="/assets/images/image-retro-pcs.jpg"
            alt="laptop"
            width={100}
            height={150}
          />
          <div>
            <p className="text-3xl font-bold text-red mb-2">01</p>
            <p className="text-2xl font-bold"> Reviving Retro PCs</p>
            <p className="text-base mt-1">
              What happens when old PCs are given modern upgrades
            </p>
          </div>
        </div>
        <div className="flex gap-x-5 items-center mb-5">
          <Image
            src="/assets/images/image-top-laptops.jpg"
            alt="laptop"
            width={100}
            height={150}
          />
          <div>
            <p className="text-3xl font-bold text-red mb-2">02</p>
            <p className="text-2xl font-bold"> Top 10 Laptops of 2022</p>
            <p className="text-base mt-1">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex gap-x-5 items-center mb-5">
          <Image
            src="/assets/images/image-gaming-growth.jpg"
            alt="laptop"
            width={100}
            height={150}
          />
          <div>
            <p className="text-3xl font-bold text-red mb-2">03</p>
            <p className="text-2xl font-bold">The Growth of Gaming</p>
            <p className="text-base mt-1">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
