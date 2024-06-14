import { CardanoWallet, useWallet } from "@meshsdk/react";

export default function Home() {
  const { name, connecting, connected } = useWallet();

  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="border border-white flex-col justify-center items-center p-8 rounded-xl">
        <div className="mb-4">
          {connecting ? (
            <p className="text-center text-orange-500">connecting...</p>
          ) : (
            <>
              {!connected && (
                <p className="text-center text-red-500">
                  wallet is not connected
                </p>
              )}
              {connected && (
                <p className="text-center text-green-500">
                  <span className="font-bold">{name}</span> wallet is connected
                </p>
              )}
            </>
          )}
        </div>

        <CardanoWallet isDark={true} label="Hubungkan Dompet" />
      </div>
    </main>
  );
}
