import { useState } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const CryptoChart = () => {
  const [interval, setInterval] = useState<"D" | "1" | "3" | "5" | "15" | "30" | "60" | "120" | "180" | "240" | "W" | undefined>("D");

  return (
    <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Bitcoin Price</h2>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${interval === "D" ? "bg-primary text-white" : "bg-secondary text-foreground"}`}
            onClick={() => setInterval("D")}
          >
            1D
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${interval === "1" ? "bg-primary text-white" : "bg-secondary text-foreground"}`}
            onClick={() => setInterval("1")}
          >
            1W
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${interval === "5" ? "bg-primary text-white" : "bg-secondary text-foreground"}`}
            onClick={() => setInterval("5")}
          >
            1M
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${interval === "240" ? "bg-primary text-white" : "bg-secondary text-foreground"}`}
            onClick={() => setInterval("240")}
          >
            1Y
          </button>
        </div>
      </div>
      <div className="h-[500px] w-full">
        <AdvancedRealTimeChart
          symbol="BINANCE:BTCUSDT"
          theme="light"
          locale="en"
          autosize
          hide_side_toolbar={false}
          allow_symbol_change={true}
          interval={interval}
          toolbar_bg="#FAFAF8"
          enable_publishing={false}
          hide_top_toolbar={false}
          save_image={false}
          container_id="tradingview_chart"
        />
      </div>
    </div>
  );
};

export default CryptoChart;
