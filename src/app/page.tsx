import Image from "next/image";
import LiveClock from "./components/LiveClock";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    
    
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <LiveClock />
    <div className="w-full flex justify-center items-center text-black font-serif flex-wrap">
        <h1 className="text-[12vw] leading-none text-black"> Vijendra </h1>
        <div className="w-[300px] h-[300px] sm:w-[140px] sm:h-[140px] mx-4 rounded-lg overflow-hidden shadow-lg">
          


          <Image
          className="w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68899f91cba0818c92b3fbb8_vijendra%20singh%20sisodiya.jpg"
          alt="Vijendra singh sisodiya"
          width={280}
          height={458}
          priority
           
        />
        </div>
        <h1 className="text-[12vw] leading-none text-black">Singh</h1>
        <p className="mt-10 text-lg sm:text-xl max-w-xl font-sans text-black">
        Shopify plus Developer ,8 years experince in shopify ecosystem  <br />
        building memorable and influential brands.
      </p>
      </div>


       
        
        
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
