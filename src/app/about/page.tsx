import Image from "next/image";
import GitHubContributions from "../components/GitHubContributions";

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    
    
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <GitHubContributions/>
       <h1 className="text-[10vw] underline		 leading-none text-black"> Bit More About Me </h1>
       <Image
        className="ff"
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6889a239262bcd5186ba0891_Vidinew.png"
        alt="Vijendra Singh Sisodiya"
        width={680}
        height={220}
        priority
      />
         <p className=" text-lg sm:text-xl max-w-xl font-sans text-black">
       I specialise in building fast, scalable Shopify stores that help brands grow their online presence. I’m driven by the freedom to work on projects that genuinely excite me — collaborating with passionate people, turning big ideas into exceptional eCommerce experiences.
      </p>
       <h1 className="text-[8vw] 	  text-black"> Skills </h1>
       <p className=" text-8xl sm:text-xl max-w-xl font-sans text-black">
         Shopify plus, CRO , A/B test , Next js , checkout/customer extension , Techinal SEO , corevita 
      </p>
      
    
       
        
        
        
      </main>
     
    </div>
  );
}
