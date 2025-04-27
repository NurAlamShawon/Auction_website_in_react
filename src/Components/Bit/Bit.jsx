import React from "react";

const Bit = ({ bit, card_clicked,click }) => {


 const found = click.find(click_id=>{
    return(
      click_id===bit.id
    )
   });





  return (
    <tr className="border-b-1 border-gray-200 ">
      <td>
        <div className="flex items-center gap-3">
          <div className="xl:inline hidden">
            <img
              src={bit.image}
              alt="Avatar Tailwind CSS Component"
              className="xl:h-24  xl:w-24   h-18 w-18"
            />
          </div>

          <div>
            <h1 className="text-[#0E2954] font-regular text-xl overscroll-contain">{bit.title}</h1>
          </div>
        </div>
      </td>
      <td className="text-[#0E2954] font-regular text-xl  text-center">
        {bit.currentBidPrice}
      </td>
      <td className="text-[#0E2954] font-regular text-xl text-center  xl:table-cell hidden">
        {bit.timeLeft}
      </td>
      <td className=" text-center">
        <button
          onClick={() => {
            card_clicked(bit);
          }}
           className={`${found ? "btn-ghost btn-disabled cursor-not-allowed":" cursor-pointer"}`}
           disabled={found}

        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={`${found?"red":"none" } `}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Bit;
