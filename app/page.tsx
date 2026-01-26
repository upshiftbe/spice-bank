import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiningSection from "@/components/DiningSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const Home = () => {
  const experiences = [
    {
      title: "The Dining Room",
      subtitle: "An intimate setting",
      description:
        "Our main space features an open kitchen where culinary artistry unfolds before your eyes. Each table is positioned for privacy while maintaining a connection to the energy of the room.",
    },
    {
      title: "The Bar",
      subtitle: "Craft & conversation",
      description:
        "A sophisticated retreat for those seeking expertly crafted cocktails and curated small plates. Perfect for pre-dinner drinks or a late evening escape.",
    },
    {
      title: "Private Dining",
      subtitle: "Exclusive experiences",
      description:
        "An intimate space for gatherings that demand discretion and exceptional service. Custom menus designed in collaboration with our head chef.",
    },
  ];

  const startersMenu = [
    {
      name: "Orkney Scallops",
      description: "Brown butter, capers, lemon",
      price: 24,
    },
    {
      name: "Beef Tartare",
      description: "Aged parmesan, confit egg yolk",
      price: 18,
    },
    {
      name: "Burrata",
      description: "Heritage tomatoes, basil oil",
      price: 16,
    },
    {
      name: "Foie Gras Terrine",
      description: "Brioche, Sauternes jelly",
      price: 22,
    },
  ];

  const mainsMenu = [
    {
      name: "Dry-Aged Ribeye",
      description: "45-day aged, bone marrow, watercress",
      price: 58,
    },
    {
      name: "Dover Sole",
      description: "Brown butter, capers, parsley",
      price: 48,
    },
    {
      name: "Roasted Duck",
      description: "Cherry, turnip, jus gras",
      price: 42,
    },
    {
      name: "Lamb Saddle",
      description: "Aubergine, harissa, yogurt",
      price: 44,
    },
  ];

  const dessertsMenu = [
    {
      name: "Chocolate Tart",
      description: "Salted caramel, crème fraîche",
      price: 14,
    },
    {
      name: "Tarte Tatin",
      description: "Calvados cream",
      price: 12,
    },
    {
      name: "Cheese Selection",
      description: "British & French, quince",
      price: 18,
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <Hero />

        {/* Experience Section */}
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

        {/* Menu Section */}
        <section id="menus" className="bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
              {/* Left Column - Title */}
              <div className="md:col-span-4">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1a1a1a] md:sticky md:top-32">
                  Menu
                </h2>
                <p className="font-display italic text-xl text-[#1a1a1a]/60 mt-4">
                  A selection from our seasonal offerings
                </p>
              </div>

              {/* Right Column - Menu Items */}
              <div className="md:col-span-8">
                <MenuSection title="To Start" items={startersMenu} />
                <MenuSection title="Main" items={mainsMenu} />
                <MenuSection title="To Finish" items={dessertsMenu} />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
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
                  Spice Bank represents a new approach to fine dining—one that
                  respects tradition while embracing innovation. Our kitchen is
                  led by Chef Marie Laurent, whose vision shapes every dish we
                  serve.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/80 mt-6">
                  We source ingredients from producers who share our commitment
                  to quality and sustainability. The result is cuisine that
                  speaks for itself.
                </p>
                <button className="mt-12 text-sm tracking-wide border border-[#1a1a1a] px-8 py-3 hover:bg-[#1a1a1a] hover:text-[#f8f6f1] transition-all duration-300">
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation CTA */}
        <section id="contact" className="bg-[#1a1a1a] py-32 md:py-48">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#f8f6f1] mb-8">
              Reserve a Table
            </h2>
            <p className="font-display italic text-xl md:text-2xl text-[#f8f6f1]/60 mb-12">
              Join us for an unforgettable evening
            </p>
            <button className="text-sm tracking-wide border border-[#f8f6f1] text-[#f8f6f1] px-10 py-4 hover:bg-[#f8f6f1] hover:text-[#1a1a1a] transition-all duration-300">
              Make a Reservation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
