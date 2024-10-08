import { Ticket } from "lucide-react";
import React from "react";

function WhyChooseUsSection() {
  return (
    <section>
      {/* First Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div>
            <p className="text-primary leading-tight font-medium uppercase">
              Trusted Ticketing
            </p>
            <p className="text-black text-[48px] font-bold leading-tight">
              Secure, Fair, and Transparent Ticketing for Every Occasion
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-[32px]">
            <div className="flex gap-2 items-center">
              <div className="h-10 w-10 rounded-full bg-red-500 p-2 flex justify-center items-center text-white">
                <Ticket size={32} />
              </div>
              <p className="font-semibold text-[28px]">Fair Access</p>
            </div>

            <div className="text-gray-500 my-[32px]">
              Our platform leverages cutting-edge blockchain technology to eliminate ticket scalping, ensuring that tickets go directly to genuine buyers at fair prices. With transparent transactions, instant ticket verification, and a hassle-free purchasing experience, we offer peace of mind and secure access to events, parties, concerts, and more. Choose us for a seamless and trustworthy ticketing experience!
            </div>
          </div>
        </div>
        <div>
          <img src="/images/secure.png" className="pl-[5rem]" alt="feature" />
        </div>
      </section>
    </section>
  );
}

export default WhyChooseUsSection;
