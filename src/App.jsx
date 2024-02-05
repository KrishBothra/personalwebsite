import { useState } from "react";
import AboutUsBlock from "./Sections/AboutUs";
import ContactBlock from "./Sections/Contact";
import DescriptionBlock from "./Sections/Description";
import ExampleBlock from "./Sections/Example";
import FAQBlock from "./Sections/FAQ";
import TitleBlock from "./Sections/Title";
import ProcessBlock from "./Sections/Process";
import NavBlock from "./Sections/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#121212]">
      <NavBlock />
      <TitleBlock />
      <div className="pb-[500px] lg:pb-[800px] bg-[#121212] w-[screen]"></div>
      <DescriptionBlock />
      <ProcessBlock />
      {/* <ExampleBlock /> */}
      <AboutUsBlock />
      <FAQBlock />
      <ContactBlock />
    </div>
  );
}

export default App;
