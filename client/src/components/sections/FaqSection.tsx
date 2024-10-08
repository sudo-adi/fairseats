import React from "react";
import FaqCard from "../cards/FaqCard";

function FaqSection() {
  const data: IFaqCardProps[] = [
    {
      title: "How does blockchain prevent ticket scalping?",
      description:
        "Blockchain technology ensures that each ticket is uniquely encrypted and verifiable, preventing unauthorized resales. Once a ticket is purchased, it cannot be resold at inflated prices, ensuring fairness for all buyers.",
      type: "white",
    },
    {
      title: "What events can I buy tickets for?",
      description:
        "You can buy tickets for a wide range of events, including concerts, movies, functions, parties, and other live events. Our platform offers tickets for all kinds of entertainment.",
      type: "black",
    },
    {
      title: "3. Is my payment secure on your platform?",
      description:
        "Yes! Our platform uses advanced encryption and secure blockchain protocols to safeguard your transactions, ensuring that your payments are always safe and reliable.",
      type: "black",
    },
    {
      title: "Can I transfer my ticket to someone else?",
      description:
        "Yes, tickets can be transferred securely through our platform. The transfer will be verified on the blockchain to ensure authenticity and prevent fraud.",
      type: "white",
    },
    {
      title: "How do I know if my ticket is legitimate?",
      description:
        "Each ticket purchased is verified through the blockchain, providing proof of authenticity. You can view the verification details in your account or by scanning the ticket.",
      type: "white",
    },
    {
      title: "What if the event gets canceled?",
      description:
        "In case of event cancellations, you’ll receive a full refund directly through our platform, ensuring a smooth and hassle-free process.",
      type: "black",
    },
  ];
  return (
    <section>
      <div className="mb-[40px]">
        <div className="">
          <p className="text-primary leading-tight font-medium uppercase">
            FAQ
          </p>
          <p className="text-black text-[48px] font-bold leading-tight">
            Frequently Asked Questions
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((faq, index) => (
          <FaqCard key={index} {...faq} />
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
