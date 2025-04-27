import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center space-y-6 pb-40 pt-30">
      <a className="btn btn-ghost text-3xl text-[#003EA4]">
      Auction<span className="text-[#FFD337]">Gallery</span>
      </a>

      <div className=" space-y-6 ">
        <ul className="flex xl:gap-4 gap-2 items-center justify-center">
          <li>
            <a className="font-regular text-2xl">Bid.</a>
          </li>
          <li>
            <a className="font-regular text-2xl">Win.</a>
          </li>
          <li>
            <a className="font-regular text-2xl">Own.</a>
          </li>
        </ul>

        <ul className="flex gap-4 items-center justify-center">
          <li>
            <a className="font-regular text-2xl">Home</a>
          </li>
          <li>
            <a className="font-regular text-2xl">Auctions</a>
          </li>
          <li>
            <a className="font-regular text-2xl">Categories</a>
          </li>

          <li>
            <a className="font-regular text-2xl">How to works</a>
          </li>
        </ul>
      </div>

      <p className="font-regular text-xl">
        © 2025 AuctionHub. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
