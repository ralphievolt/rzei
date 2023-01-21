// import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Paperless Transactions</h1>
          <p className="py-6">
            We like saving trees and saving energy in recyling but more than
            that we like to have the your transaction get more effecient!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
