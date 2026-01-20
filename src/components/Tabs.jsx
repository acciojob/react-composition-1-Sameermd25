import { useState } from "react";

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveIndex(index)}>{tab.title}</button>
        ))}
      </div>

      <div>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
