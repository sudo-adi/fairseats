import React from "react";

function FeatureSection() {
  const data = [
    {
      icon: "/images/star_icon.svg",
      title: "Scalper-Free Ticketing",
      description:
        "Our blockchain-based system ensures every ticket is verifiable and secure, making it impossible for scalpers to resell tickets at inflated prices. Enjoy fair access to every event!",
    },
    {
      icon: "/images/mesh_icon.svg",
      title: "Transparent Pricing",
      description:
        "With blockchain technology, you know exactly what you're paying for. Our transparent pricing model ensures you always get the best deal without any surprise fees",
    },
    {
      icon: "/images/cube_icon.svg",
      title: "Seamless Event Access",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ];
  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row items-center">
      <div>
        <img src="/images/feat.png" alt="feature" />
      </div>
      <div>
        <div>
          <p className="text-primary leading-tight font-medium uppercase">
            Features
          </p>
          <p className="text-black text-[48px] font-bold leading-tight">
            FairSeats Highlights
          </p>
        </div>
        <div className="flex flex-col gap-[32px] mt-[32px]">
          {data.map((feature, index) => (
            <div key={index}>
              <div className="flex gap-2">
                <div>
                  <img src={feature.icon} alt="feature icon" />
                </div>
                <p className="font-semibold">{feature.title}</p>
              </div>

              <div className="text-gray-500">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
