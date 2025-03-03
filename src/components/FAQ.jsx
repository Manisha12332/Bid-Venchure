import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to see Bid Venchure results?",
      answer:
        "Bid Venchure results typically take 3-6 months, depending on the competition and strategy.",
    },
    {
      question: "How do I know I'm getting the best deal?",
      answer:
        "Compare bids based on price, reviews, and services offered to make the right choice.",
    },
  ];
  const faq = [
    {
      question: "How long does it take to see Bid Venchure results?",
      answer:
        "Bid Venchure results typically take 3-6 months, depending on the competition and strategy.",
    },
    {
      question: "How do I know I'm getting the best deal?",
      answer:
        "Compare bids based on price, reviews, and services offered to make the right choice.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mb-10">
      <h2 className="text-5xl text-center font-extrabold text-gray-800 mb-6 tracking-tight">
        FAQ
      </h2>
      <h1 className="text-2xl font-robotoSerif font-bold text-gray-800 mb-1 tracking-tight">
        For Customers
      </h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b font-robotoSerif border-gray-300 py-4 flex justify-between items-start"
        >
          <div className="flex-1">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-left w-full text-lg font-semibold text-gray-800"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2 text-lg">{faq.answer}</p>
            )}
          </div>
          <button
            onClick={() => toggleFAQ(index)}
            className="text-purple-700  font-extrabold  text-[24px] hover:text-purple-700"
          >
            {activeIndex === index ? "−" : "+"}
          </button>
        </div>
      ))}
      <h1 className="text-2xl font-robotoSerif font-bold mt-3 text-gray-800 mb-1 tracking-tight">
        For Restaurants:
      </h1>
      {faq.map((faq, index) => (
        <div
          key={index}
          className="border-b font-robotoSerif border-gray-300 py-4 flex justify-between items-start"
        >
          <div className="flex-1">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-left w-full text-lg font-semibold text-gray-800"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2 text-lg">{faq.answer}</p>
            )}
          </div>
          <button
            onClick={() => toggleFAQ(index)}
            className="text-purple-700  font-extrabold  text-[24px] hover:text-purple-700"
          >
            {activeIndex === index ? "−" : "+"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
