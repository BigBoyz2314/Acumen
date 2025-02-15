"use client";
import React, { useState } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Language", "Technology"];

  const filteredFeatures = activeTab === "All"
    ? featuresData
    : featuresData.filter(feature => feature.type === activeTab);

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="technologies" className="py-12 lg:py-12 xl:py-12">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "LANGUAGES & TECHNOLOGIES",
              subtitle: "Core Technologies We Use",
              description: `Explore the diverse range of programming languages and technologies that power our solutions. From frontend to backend, we leverage the best tools to deliver exceptional results.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          {/* <!-- Tabs Start --> */}
          <div className="flex justify-center mt-8">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-4 rounded-3xl py-2 mx-2 ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* <!-- Tabs End --> */}

            <div className="mt-12.5 grid grid-cols-2 gap-7.5 md:grid-cols-4 lg:mt-15 lg:grid-cols-6 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}
            {filteredFeatures.map((feature, key) => (
              <div key={key} className="flex flex-col items-center">
              <img src={feature.icon} alt={feature.name} className="w-16 h-16 mb-4 object-contain" />
              <h3 className="text-lg font-semibold">{feature.name}</h3>
              </div>
            ))}
            {/* <!-- Features item End --> */}
            </div>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
