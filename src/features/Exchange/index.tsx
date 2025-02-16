import React from "react";
import MarketStats from "../../components/MarketStats";
import CryptoChart from "../../components/CryptoChart";
import PortfolioCard from "../../components/PortfolioCard";
import CryptoList from "../../components/CryptoList";
import { Link } from "react-router";

const Exchange = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <button className="glass-card py-2 px-4 rounded mb-4 shadow-lg ">
            Go Back
          </button>
        </Link>
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-muted-foreground">
            Crypto Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back to your portfolio
          </p>
        </header>

        <MarketStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CryptoChart />
          </div>
          <div>
            <PortfolioCard />
          </div>
        </div>

        <CryptoList />
      </div>
    </div>
  );
};

export default Exchange;
