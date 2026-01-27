// import Navigation from "@/components/Navigation";
// import Hero from "@/components/Hero";
// import DiningSection from "@/components/DiningSection";
// import MenuSection from "@/components/MenuSection";
// import Footer from "@/components/Footer";
// import {
//   experiences,
//   startersMenu,
//   mainsMenu,
//   dessertsMenu,
//   aboutContent,
//   menuIntro,
//   contactContent,
// } from "@/content/site-content";

import ComingSoon from './coming-soon/page';

const Home = () => {
  return (
    <>
      <ComingSoon />
      {/* <Navigation />
      <main>
        <Hero />

        <section id="experience" className="bg-[#f8f6f1] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-16 md:mb-24">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1a1a1a]">
                Experience
              </h2>
            </div>
            {experiences.map((exp, index) => (
              <DiningSection
                key={exp.title}
                title={exp.title}
                subtitle={exp.subtitle}
                description={exp.description}
                index={index}
              />
            ))}
          </div>
        </section>

        <section id="menus" className="bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
              <div className="md:col-span-4">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1a1a1a] md:sticky md:top-32">
                  {menuIntro.title}
                </h2>
                <p className="font-display italic text-xl text-[#1a1a1a]/60 mt-4">
                  {menuIntro.subtitle}
                </p>
              </div>
              <div className="md:col-span-8">
                <MenuSection title="To Start" items={startersMenu} />
                <MenuSection title="Main" items={mainsMenu} />
                <MenuSection title="To Finish" items={dessertsMenu} />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f8f6f1] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1a1a1a]">
                  About
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/80">
                  {aboutContent.paragraph1}
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/80 mt-6">
                  {aboutContent.paragraph2}
                </p>
                <button className="mt-12 text-sm tracking-wide border border-[#1a1a1a] px-8 py-3 hover:bg-[#1a1a1a] hover:text-[#f8f6f1] transition-all duration-300">
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#1a1a1a] py-32 md:py-48">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#f8f6f1] mb-8">
              {contactContent.title}
            </h2>
            <p className="font-display italic text-xl md:text-2xl text-[#f8f6f1]/60 mb-12">
              {contactContent.subtitle}
            </p>
            <button className="text-sm tracking-wide border border-[#f8f6f1] text-[#f8f6f1] px-10 py-4 hover:bg-[#f8f6f1] hover:text-[#1a1a1a] transition-all duration-300">
              {contactContent.ctaLabel}
            </button>
          </div>
        </section>
      </main>
      <Footer /> */}
    </>
  );
};

export default Home;
