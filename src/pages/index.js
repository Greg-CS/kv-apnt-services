import { Form } from "@/components/Form/Form";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";

export default function Home() {
  return (
    <main>

      {/* hero section */}
      <section className="">
        <Hero/>
      </section>

      {/* services section */}
      <section className="min-h-screen flex justify-around items-center bg-[#A2AA84]">
        <Services/>
      </section>

      {/* Form section */}
      <section className="min-h-screen bg-white flex justify-around">
        <div className="">
          <Form/>
        </div>
      </section>


    </main>
  )
}
