import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import Footer from "./Components/Footer/Footer";
import Bits from "./Components/Bits/Bits";
import { useEffect, useState } from "react";
import Selected from "./Components/Selected/Selected";

function App() {
  const [fetchdata, setFetchdata] = useState([]);

  const [click, setclick] = useState([]);
  const [bit, setbit] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch("/public.json");
      const data = await res.json();
      setFetchdata(data);
    };

    fetchItem();
  }, []);

  const crossbutton = (id) => {
    const newbit = bit.filter((bit_data) => bit_data.id !== id);
    setbit(newbit);

    const remain = click.filter((clicked) => clicked !== id);

    setclick(remain);
  };

  const card_clicked = (bit_data) => {
    const newbit = [...bit, bit_data];
    setbit(newbit);
    let newclick = [...click, bit_data.id];

    setclick(newclick);
  };

  return (
    <>
      <Navbar />
      <Herosection />

      <section className=" bg-sky-100 pb-28 pt-28">
        <div className="max-w-screen-2xl mx-auto ">
          <h1 className="font-medium text-2xl mb-5">Active Auction</h1>
          <p className="font-regular text-xl mb-5">
            Discover and bid on extraordinary items
          </p>
          <div className="grid xl:grid-cols-3 grid-cols-1">
            <div className="xl:col-span-2  bg-white rounded-xl">
              <Bits
                fetchdata={fetchdata}
                card_clicked={card_clicked}
                click={click}
              ></Bits>
            </div>

            <div>
              <Selected bit={bit} crossbutton={crossbutton}>
                {" "}
              </Selected>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
