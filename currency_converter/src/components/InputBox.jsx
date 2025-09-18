import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl text-sm flex shadow-xl hover:bg-white/25 transition-all duration-300 ${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-white/80 mb-3 inline-block font-medium tracking-wide"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2 text-white placeholder-white/60 text-lg font-semibold border-b border-white/20 focus:border-white/60 transition-colors duration-200"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount > 0 ? amount : ""}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white/80 mb-3 w-full font-medium tracking-wide">
          Currency
        </p>
        <select
          className="rounded-xl px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/30 cursor-pointer outline-none text-white font-medium hover:bg-white/20 focus:bg-white/20 transition-all duration-200 shadow-lg"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="bg-gray-800 text-white"
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
