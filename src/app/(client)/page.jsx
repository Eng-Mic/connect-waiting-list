import { PiDotFill } from "react-icons/pi";
import JoiningWaitList from "@/app/(client)/_components/form/JoiningWaitList";
import Hero from "@/app/(client)/_components/Hero";
import Problems from "@/app/(client)/_components/Problems";
import Caution from "@/app/(client)/_components/Caution";
import FAQ from "@/app/(client)/_components/FAQ";
import ContactForm from "@/app/(client)/_components/ContactForm";
import Footer from "@/app/(client)/_components/Footer";


export default function Home() {
  
  return (
    <div>
      {/* Head - Hero */}
      <div className="flex flex-col items-center justify-center mt-[2rem] md:mt-[2rem]">
        <Hero />
      </div>
      {/* Body */}
      <div className="mx-auto flex justify-between mt-[4rem] md:w-[95%]">
        {/* Problems */}
        <div className="w-[100%] px-[10px] py-[5px] sm:px-[2rem] md:py-[2rem]">
          <Problems />
        </div>

        {/* Separator */}
        <div className="hidden w-[1px] min-h-fit bg-zinc-300 md:flex" />

        {/* Form */}
        <div className="hidden w-[100%] px-[2rem] py-[2rem] flex-col items-center md:flex">
          <JoiningWaitList />
        </div>
      </div>
      {/* Caution */}
      <div id="caution" className="mx-auto mt-[4rem] py-[10px] px-[10px] md:w-[80%] md:px-0">
        <Caution />
      </div>
      <div className="w-full mt-[4rem] space-y-[4rem]">
        {/* FAQ */}
        <div id="faqs" className="mx-auto py-[1rem] px-[10px] md:w-[80%] md:px-0">
          <FAQ />
        </div>
        {/* Contact */}
        <div id="contact" className="mx-auto py-[1rem] px-[10px] md:w-[80%] md:px-0">
          <ContactForm />
        </div>
      </div>
      {/* Footer */}
      <div className="w-full mt-[4rem] py-[15px] md:py-[10px]">
        <Footer />
      </div>
    </div>
  );
}
