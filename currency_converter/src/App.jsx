import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-wrap justify-center items-center bg-gradient-to-br bg-slate-900 bg-cover bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: ``,
      }}
    >
      <div className="w-full relative z-10">
        <div className="w-full max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Currency{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Converter
              </span>
            </h1>
            <p className="text-white/70 text-lg">
              Convert currencies with real-time rates
            </p>
          </div>

          <div className="border border-white/20 rounded-3xl p-8 backdrop-blur-xl bg-white/10 shadow-2xl hover:bg-white/15 transition-all duration-300">
            <div>
              <div className="w-full mb-2">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div className="relative w-full h-4 flex justify-center items-center my-6">
                <button
                  type="button"
                  className="absolute bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full border-2 border-white/30 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold tracking-wide backdrop-blur-sm"
                  onClick={swap}
                >
                  ⇅ Swap
                </button>
              </div>

              <div className="w-full mb-8">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              <button
                type="submit"
                onClick={convert}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg tracking-wide shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 border border-white/20"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()} →
              </button>
            </div>

            {convertedAmount > 0 && (
              <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-white/80 text-center">
                  <span className="font-semibold">
                    {amount} {from.toUpperCase()}
                  </span>{" "}
                  =
                  <span className="font-bold text-white ml-1">
                    {convertedAmount.toFixed(2)} {to.toUpperCase()}
                  </span>
                </p>
                <p className="text-white/60 text-center text-sm mt-1">
                  1 {from.toUpperCase()} = {currencyInfo[to]?.toFixed(4)}{" "}
                  {to.toUpperCase()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
