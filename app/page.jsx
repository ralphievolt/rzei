// import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200 content-start ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold  text-secondary mt-10">
            Paperless Transactions
          </h1>
          <p className="py-6 text-3xl">
            We love saving trees and energy through recycling, but more
            importantly, we enjoy making your transactions more efficient!
          </p>

          <Link
            href="/joblist"
            role="button"
            className="btn btn-secondary btn-outline"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
