"use client";

import { useState } from "react";

type Coin = {
  id: string;
  name: string;
};

function fetchCoins(): Promise<Coin[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "eth",
          name: "Etherium",
        },
        {
          id: "arb",
          name: "Arbitrum",
        },
        {
          id: "sol",
          name: "Solana",
        },
        {
          id: "dot",
          name: "Polkadot",
        },
        {
          id: "btc",
          name: "Bitcoin",
        },
      ]);
    }, 2000);
  });
}

function fetchMemeCoins(): Promise<Coin[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "doge",
          name: "Dogecoin",
        },
        {
          id: "shib",
          name: "Shiba Inu",
        },
        {
          id: "pepe",
          name: "Pepe",
        },
        {
          id: "mog",
          name: "Mog coin",
        },
        {
          id: "elon",
          name: "Dogelon Mars",
        },
      ]);
    }, 2000);
  });
}

export default function Coins() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [memeCoins, setMemeCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleLoadCoins() {
    setIsLoading(true);

    const coinList = await fetchCoins();
    const memeCoinList = await fetchMemeCoins();

    setCoins(coinList);
    setMemeCoins(memeCoinList);
    setIsLoading(false);
  }

  function handleClearCoins() {
    setCoins([]);
    setMemeCoins([]);
  }

  return (
    <div className="flex gap-5">
      <div className="flex gap-4">
        <h1 className="text-lg font-semibold">Coins</h1>
        <div className="flex flex-col gap-2">
          <button
            className="text-sm h-8 px-4 border bg-gray-100 hover:bg-gray-300/[0.5]"
            onClick={handleLoadCoins}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load coins"}
          </button>
          <button
            className="text-sm h-8 px-4 border bg-red-100 hover:bg-red-300/[0.5]
            disabled:bg-red-50"
            onClick={handleClearCoins}
            disabled={coins.length === 0 && memeCoins.length === 0}
          >
            Clear coins
          </button>
        </div>
      </div>

      <div className="flex gap-8 flex-1 h-48">
        <div className="flex-1">
          <h2 className="text-base font-semibold">Layer 1 & 2</h2>
          {coins.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              {coins.map((coin) => (
                <div key={coin.id}>
                  <div className="flex items-center gap-2">
                    <div className="h-5 bg-yellow-400 font-bold px-2 text-sm">
                      {coin.id}
                    </div>{" "}
                    <span className="text-sm">{coin.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {coins.length === 0 && <p className="text-sm">None.</p>}
        </div>

        <div className="flex-1">
          <h2 className="text-base font-semibold">Memecoin</h2>
          {memeCoins.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              {memeCoins.map((memeCoin) => (
                <div key={memeCoin.id}>
                  <div className="flex items-center gap-2">
                    <div className="h-5 bg-yellow-400 font-bold px-2 text-sm">
                      {memeCoin.id}
                    </div>{" "}
                    <span className="text-sm">{memeCoin.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {coins.length === 0 && <p className="text-sm">None.</p>}
        </div>
      </div>
    </div>
  );
}
