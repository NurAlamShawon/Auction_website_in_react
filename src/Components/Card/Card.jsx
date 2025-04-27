import React from "react";

const Card = ({ bit,crossbutton }) => {
  return bit.map((bit_obg) => {
    return (
      <tr className="border-b-1 border-gray-200 ">
        <td>
          <div className=" flex justify-between  ">
            <div className="flex ">
              <div>
                <img
                  src={bit_obg.image}
                  alt=""
                  className="h-18  w-18 mr-5 rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h1 className="font-medium text-2xl text-[#0E2954]">{bit_obg.title}</h1>
                </div>

                <div className="flex">
                  <div className="mr-10">
                    <span className="font-regular text-base mr-12 text-[#0E2954]">
                      ${bit_obg.currentBidPrice}
                    </span>
                  </div>

                  <div>
                    <span className="font-regular text-base text-[#0E2954]">Bids: 12</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="btn" onClick={()=>{
             crossbutton(bit_obg.id)
              }}>X</button>
            </div>
          </div>
        </td>
      </tr>
    );
  });
};

export default Card;
