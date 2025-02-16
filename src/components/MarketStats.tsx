import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useCryptoStore } from "../store/useCryptoStore";

interface GlobalData {
  data: {
    total_market_cap: { usd: number };
    total_volume: { usd: number };
    market_cap_percentage: { btc: number };
    market_cap_change_percentage_24h_usd: number;
    market_cap_percentage_change_24h: { btc: number };
  };
}

const fetchGlobalData = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/global");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const MarketStats = () => {
  const { data: globalData, isLoading } = useQuery<GlobalData>({
    queryKey: ["globalMarketData"],
    queryFn: fetchGlobalData,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-6 rounded-lg animate-pulse">
            <div className="h-4 bg-secondary rounded w-24 mb-4"></div>
            <div className="h-8 bg-secondary rounded w-32"></div>
          </div>
        ))}
      </div>
    );
  }

  const formatNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(1)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
    return `$${num.toFixed(1)}`;
  };

  const marketCap = globalData?.data.total_market_cap.usd || 0;
  const volume = globalData?.data.total_volume.usd || 0;
  const btcDominance = globalData?.data.market_cap_percentage.btc || 0;
  const marketCapChange =
    globalData?.data.market_cap_change_percentage_24h_usd || 0;
  const btcDominanceChange =
    globalData?.data.market_cap_percentage_change_24h?.btc || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">
            Market Cap
          </h3>
          <TrendingUpIcon
            className={`w-4 h-4 ${
              marketCapChange >= 0 ? "text-success" : "text-warning"
            }`}
          />
        </div>
        <p className="text-2xl font-semibold mt-2">{formatNumber(marketCap)}</p>
        <span
          className={`text-sm flex items-center gap-1 ${
            marketCapChange >= 0 ? "text-success" : "text-warning"
          }`}
        >
          {marketCapChange >= 0 ? (
            <ArrowUpIcon className="w-3 h-3" />
          ) : (
            <ArrowDownIcon className="w-3 h-3" />
          )}
          {Math.abs(marketCapChange).toFixed(2)}%
        </span>
      </div>

      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">
            24h Volume
          </h3>
          <TrendingUpIcon className="w-4 h-4 text-success" />
        </div>
        <p className="text-2xl font-semibold mt-2">{formatNumber(volume)}</p>
        <span className="text-sm text-success flex items-center gap-1">
          <ArrowUpIcon className="w-3 h-3" />
          {((volume / marketCap) * 100).toFixed(2)}%
        </span>
      </div>

      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">
            BTC Dominance
          </h3>
          <TrendingUpIcon
            className={`w-4 h-4 ${
              btcDominanceChange >= 0 ? "text-success" : "text-warning"
            }`}
          />
        </div>
        <p className="text-2xl font-semibold mt-2">
          {btcDominance.toFixed(1)}%
        </p>
        <span
          className={`text-sm flex items-center gap-1 ${
            btcDominanceChange >= 0 ? "text-success" : "text-warning"
          }`}
        >
          {btcDominanceChange >= 0 ? (
            <ArrowUpIcon className="w-3 h-3" />
          ) : (
            <ArrowDownIcon className="w-3 h-3" />
          )}
          {Math.abs(btcDominanceChange).toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default MarketStats;
