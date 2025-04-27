
import Bit from "../Bit/Bit";
const Bits = ({ fetchdata,card_clicked ,click}) => {
  const bits = fetchdata;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th  className="xl:p-4 text-black font-regular  text-xl">Items</th>
              <th  className="xl:p-4 text-black font-regular text-xl text-center">Current Bit</th>
              <th  className="xl:p-4 text-black font-regular text-xl text-center xl:table-cell hidden">Time left</th>
              <th  className="xl:p-4 text-black font-regular text-xl text-center">Bid now</th>
            </tr>
          </thead>
          {bits.map((bit) => {
            return <Bit bit={bit} card_clicked={card_clicked} key={bit.id} click={click}></Bit>;
          })}
        </table>
      </div>
    </div>
  );
};

export default Bits;
