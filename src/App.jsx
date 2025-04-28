import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar/Navbar";

import Info from "./components/InfoSection/Info";
import graphs from "../src/assets/graphs.svg";
import productLaunch from "../src/assets/product.svg";
import waving from "../src/assets/waving.svg";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info
        h6={
          <h6>
            Introduce your <br /> product quickly & <br /> effectively
          </h6>
        }
        p={
          <p>
            Landy comes with multi-lingual support, all of the content is <br />{" "}
            stored in the JSON files, so that you can manage the texts <br />{" "}
            without having any prior knowledge in developing web <br />{" "}
            applications using React.js.
          </p>
        }
        btn="Get Started"
        imgStart={false}
      />
      <Info
        h6={<h6>Light, fast & responsive</h6>}
        p={
          <p>
            This template is ready to use, so you don't need to change anything
            at a component level, unless you want to customize the default
            styling.
          </p>
        }
        img={graphs}
        imgStart={true}
      />
      <Info
        h6={<h6>Ready made sections</h6>}
        p={
          <p>
            Landy comes with a set of ready to use sections to help you easily
            create a landing page for your own brand, with all the content your
            startup desires. In order to replace any dummy elements, all you
            need to do is go to content folder and input your real content.
          </p>
        }
        img={productLaunch}
        imgStart={true}
      />
      <Info
        h6={<h6>That's about it!</h6>}
        p={
          <p>
            If you are familiar with React, or SPA frameworks in general, there
            shouldn't be any confusing parts about this template. if not, you
            can always reach out to me and I'll try me best to answer your
            questions.
          </p>
        }
        img={waving}
        imgStart={true}
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
