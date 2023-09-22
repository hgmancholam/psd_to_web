import React, { useState } from "react";
import ContentCard from "./content-card";
export default function TabsAccordion() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className=" max-w-screen p-0  m-0">
      {/* Tabs/Accordion for small screens */}
      <div className="sm:hidden">
        <div className="accordion">
          <div className="accordion-item BG-[#41506b] ">
            <button
              className="accordion-title w-full"
              onClick={() => handleTabClick(1)}
            >
              MOUNTAIN 1
            </button>
            {activeTab === 1 && (
              <div className="accordion-content">
                <ContentCard contenido="1" />
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button
              className="accordion-title w-full"
              onClick={() => handleTabClick(2)}
            >
              MOUNTAIN 2
            </button>
            {activeTab === 2 && (
              <div className="accordion-content ">
                <ContentCard contenido="2" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs for larger screens */}
      <div className="hidden sm:block ">
        <ul className="flex space-x-1 bg-[#41506B] m-0">
          <li
            className={`${
              activeTab === 1 ? "accordion-title" : "accordion-title-active"
            } px-4 py-1 cursor-pointer`}
            onClick={() => handleTabClick(1)}
          >
            MOUNTAIN 1
          </li>
          <li
            className={`${
              activeTab === 1 ? "accordion-title-active" : "accordion-title"
            } px-4 py-1 cursor-pointer`}
            onClick={() => handleTabClick(2)}
          >
            MOUNTAIN 2
          </li>
        </ul>

        <div className="mt-0">
          {activeTab === 1 && <ContentCard contenido="1" />}
          {activeTab === 2 && <ContentCard contenido="2" />}
        </div>
      </div>
    </div>
  );
}
