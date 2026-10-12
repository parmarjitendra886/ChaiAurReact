
import { useEffect, useState } from "react";
import InputBox from "./InputBox.tsx";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const InputMain = () => {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo || {});

    useEffect(() => {
        const numericAmount = Number(amount);
        const rate = currencyInfo[to];

        if (!Number.isNaN(numericAmount) && typeof rate === "number") {
            setConvertedAmount(numericAmount * rate);
        } else {
            setConvertedAmount(0);
        }
    }, [amount, currencyInfo, to]);

    const convert = () => {
        const numericAmount = Number(amount);
        const rate = currencyInfo[to];

        if (!Number.isNaN(numericAmount) && typeof rate === "number") {
            setConvertedAmount(numericAmount * rate);
        } else {
            setConvertedAmount(0);
        }
    };

    const swap = () => {
        setFrom(to);
        setTo(from);
    };

    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black/40">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={setAmount}
                                onCurrencyChange={setFrom}
                                currencyOptions={options}
                                selectedCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                onClick={swap}
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount.toString()}
                                onAmountChange={() => {}}
                                onCurrencyChange={setTo}
                                currencyOptions={options}
                                selectedCurrency={to}
                                amountDisabled={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                        <p className="mt-4 text-center text-lg font-semibold text-gray-800">
                            {amount || 0} {from.toUpperCase()} = {convertedAmount.toFixed(2)} {to.toUpperCase()}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputMain;

