import React from "react";
import Header from "./header";
import Footer from "./footer";
import Card from "./Card";
function App() {
  return (
    <div class="foob">
      <Header />
      <Footer />
      <Card
        name="Vansika jain"
        job="Developer"
        about="My name is Vansika jain.I'm a diligent person,I always aim towards strengthening of my skill sets,I'm a quick learner with a spirit of leadership and collaboration.My dream is to increase the growth potential of the company in which I would work."
      />
      <bt />
    </div>
  );
}
export default App;
