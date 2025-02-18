import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "700",
});

export default function Home() {
  return (
    <main className="bg-green-100 min-h-screen">
      <section className="pt-20 md:grid-cols-2 h-screen">
        {" "}
        {/* Responsive grid, full screen height */}
        <div className="flex flex-col  md:gap-8 items-center justify-center px-4 md:px-0">
          <div className="text-center">
            {" "}
            {/* Center text on smaller screens */}
            <h1
              className={`text-4xl md:text-5xl font-bold ${poppins.className} text-green-800`}
            >
              The best URL shortener in the Market
            </h1>
            <p className="text-base md:text-lg px-8 md:px-24 py-4 text-gray-700">
              We are the most straightforward URL Shortener in the world. Most
              other url shorteners track you or require your details for login.
              We understand your needs and hence we have created this URL
              shortener.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/shorten" className="w-full md:w-auto">
              {" "}
              {/* Responsive button width */}
              <button className="bg-green-500 hover:bg-green-600 rounded-lg shadow-lg py-2 px-4 font-bold text-white transition duration-300">
                Try Now
              </button>
            </Link>
            <Link href="/github" className="w-full md:w-auto">
              {" "}
              {/* Responsive button width */}
              <button className="bg-green-500 hover:bg-green-600 rounded-lg shadow-lg py-2 px-4 font-bold text-white transition duration-300">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden">
          {" "}
          {/* Overflow hidden for image */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-transparent"></div>{" "}
          {/* Subtle overlay */}
        </div>
      </section>
      <footer className="w-full bg-green-800 text-white text-center py-4 mt-10 shadow-md">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The Best URL Shortener. All rights
          reserved.
        </p>
        <p className="text-sm mt-1">Developed by Mian Farhan</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </footer>
    </main>
  );
}
