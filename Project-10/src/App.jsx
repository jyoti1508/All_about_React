import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [principale, setPrincipale] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principale") {
      setPrincipale(value);
    } else if (id === "interest") {
      setInterest(value);
    } else setYears(value);
  };

  useEffect(() => {
    const calcEMI = () => {
      if (principale && interest && years) {
        let r = interest;
        r = r / 12 / 100; // per month
        const calcPow = Math.pow(1 + r, years * 12);
        const amount = principale * ((r * calcPow) / (calcPow - 1));
        setEmi(Math.round(amount));
      }
    };
  }, [principale, interest, years]);

  return (
    <>
      <div className="flex  justify-center item-center h-screen w-full bg-gray-900 text-white ">
        <div className="flex justify-center  flex-col mt-30 px-10 py-7  bg-green-100 h-110">
          <h1 className="text-2xl font-bold text-blue-400 mb-5">
            Mortgage Calculator
          </h1>
          <div>
            <h3 className="text-blue-400 mb-2">Principale:</h3>
            <input
              id="principale"
              onChange={handleChange}
              className="border border-black rounded px-2 py-1 mb-4 text-gray-600"
              type="number"
              placeholder="Enter amount here.."
            />
            <h3 className="text-blue-400 mb-2">Interest:</h3>
            <input
              id="interest"
              onChange={handleChange}
              type="number"
              className="border border-black rounded px-2 py-1 mb-4 text-gray-600"
              placeholder="Enter interest here.."
            />
            <h3 className="text-blue-400 mb-2">Years:</h3>
            <input
              id="year"
              onChange={handleChange}
              type="number"
              className="border border-black text-gray-600 rounded px-2 py-1 mb-4"
              placeholder="Enter year here.."
            />
            <div>
              <button className="bg-blue-600 px-2 py-1 rounded">
                Genrate EMI
              </button>
            </div>
          </div>
          <div className="py-5">
            <h2 className="text-blue-400 text-xl px-7">
              Your EMI is:
              <span className="font-semibold text-blue-700"> {emi}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
