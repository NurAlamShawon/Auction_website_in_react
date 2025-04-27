

import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Selected = ({ bit ,crossbutton}) => {
  

const[total_bit,settotal_bit]=useState(0);



useEffect(() => {
  let total = 0;
  bit.forEach((element) => {
    total += parseInt(element.currentBidPrice);
  });
  settotal_bit(total);
}, [bit]);



  

  return (
    <div className="bg-white rounded-xl xl:ml-5 xl:mt-0 mt-6 xl:mx-0 mx-2">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <div className="flex items-center justify-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-2xl text-[#0E2954] text-center">
                      Favorite Item
                    </p>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          {bit.length !== 0 ? (
            <Card bit={bit}  crossbutton={crossbutton} />
          ) : (
            <tr className="px-5">
              <td className="text-center py-20">
                <h1 className="font-medium text-2xl">No Favorite Yet</h1>
                <p className="font-regular text-base">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </td>
            </tr>
          )}

          <tr className="border-t-1 border-gray-200">
            <td>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-2xl">Total bids Amount</p>{" "}
                </div>
                <div>
                  <p className="font-medium text-2xl">${total_bit}
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Selected;
