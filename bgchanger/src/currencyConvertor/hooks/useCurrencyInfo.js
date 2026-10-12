import { useState, useEffect } from "react";

const currencyRates = {
    usd: { usd: 1, eur: 0.92, inr: 83.4, jpy: 156.9, gbp: 0.79, cad: 1.36, aud: 1.5 },
    eur: { eur: 1, usd: 1.09, inr: 90.8, jpy: 170.7, gbp: 0.86, cad: 1.48, aud: 1.63 },
    inr: { inr: 1, usd: 0.012, eur: 0.011, jpy: 1.88, gbp: 0.0095, cad: 0.016, aud: 0.018 },
    jpy: { jpy: 1, usd: 0.0064, eur: 0.0059, inr: 0.53, gbp: 0.005, cad: 0.0087, aud: 0.0096 },
    gbp: { gbp: 1, usd: 1.27, eur: 1.16, inr: 105.5, jpy: 198.5, cad: 1.72, aud: 1.89 },
    cad: { cad: 1, usd: 0.74, eur: 0.68, inr: 61.4, jpy: 115.4, gbp: 0.58, aud: 1.1 },
    aud: { aud: 1, usd: 0.67, eur: 0.61, inr: 55.6, jpy: 104.6, gbp: 0.53, cad: 0.91 },
};

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const baseCurrency = currency?.toLowerCase() || "usd";
        const mockData = currencyRates[baseCurrency] || {
            [baseCurrency]: 1,
        };

        setData(mockData);
    }, [currency]);

    return data;
}

export default useCurrencyInfo;