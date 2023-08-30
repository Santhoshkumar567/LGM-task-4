import React, { useState } from "react";

const CalculatorApp = () => {
  //declaring state
  const [number, setNumber] = useState("");

  // handle click
  const handleClick = (e) => {
    setNumber(number.concat(e.target.value));
  };

  //handleclear
  const handleClear = () => {
    setNumber("");
  };

  //handle slice
  const handleSlice = () => {
    setNumber(number.slice(0, -1));
  };

  //handle answer
  const handleAnswer = () => {
    try {
      setNumber(eval(number).toString());
    } catch (err) {
      setNumber("INVALID");
    }
  };
  return (
    <div>
      <section>
        <div className="bg-gray-900  w-96 h-full mx-auto rounded-lg overflow-hidden p-5">
          <div>
            <p className="font-bold text-3xl text-white mx-auto">CALCULATOR</p>
          </div>
          <div>
            <input
              type="text"
              className="input input-bordered input-error bordered-orange-400 w-full max-w-xs rounded-full my-3 text-right "
              value={number}
            />
          </div>

          <div className="grid grid-cols-4 gap-2 mt-2 mx-4 ">
            <button
              onClick={handleClear}
              className="btn btn-outline 16 btn-warning rounded-full w-16 hover:scale-110 duration-200 "
            >
              AC
            </button>
            <button
              onClick={handleSlice}
              className="btn btn-outline 16 btn-warning rounded-full w-16 hover:scale-110 duration-200 "
            >
              C
            </button>
            <button
              value="/"
              onClick={handleClick}
              className="btn btn-outline 16 btn-warning rounded-full w-16 hover:scale-110 duration-200 "
            >
              /
            </button>
            <button
              value="+"
              onClick={handleClick}
              className="btn btn-outline 16 btn-warning rounded-full w-16 hover:scale-110 duration-200 row-span-2 h-28"
            >
              +
            </button>

            <button
              value="9"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200 "
            >
              9
            </button>
            <button
              value="8"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200 "
            >
              8
            </button>
            <button
              value="7"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200"
            >
              7
            </button>

            <button
              value="4"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200"
            >
              4
            </button>
            <button
              value="5"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200 "
            >
              5
            </button>
            <button
              value="6"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200 "
            >
              6
            </button>
            <button
              value="-"
              onClick={handleClick}
              className="btn btn-outline 16 btn-warning rounded-full w-16 hover:scale-110 duration-200"
            >
              -
            </button>

            <button
              value="1"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200"
            >
              1
            </button>
            <button
              value="2"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200 "
            >
              2
            </button>
            <button
              value="3"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200 "
            >
              3
            </button>
            <button
              value="*"
              onClick={handleClick}
              className="btn btn-outline 16 btn-warning rounded-full w-16 hover:scale-110 duration-200"
            >
              *
            </button>

            <button
              value="."
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200"
            >
              .
            </button>
            <button
              value="0"
              onClick={handleClick}
              className="btn btn-outline 16 btn-success rounded-full w-16 hover:scale-110 duration-200 "
            >
              0
            </button>

            <button
              onClick={handleAnswer}
              className="btn btn-outline 16 btn-warning rounded-full col-span-2 w-36"
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorApp;
