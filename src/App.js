import React from "react";
import logo from "./logo.svg";
import float from "./assets/float.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="section--header">My React Portfolio</h1>
        <img src={logo} className="App-logo" alt="react symbol" />
      </nav>
      <main>
        <section className="section--about-me">
          <div className="text--wrapper">
            <h2 className="font--secondary">Hey, I'm ReDi.</h2>
            <p>
              Here's the section where I describe how awesome it is to work with
              me. I am really into these technologies and this is what I bring
              to the table. When I'm not coding you can find me going for runs
              with my dog or drinking way too much coffee.
            </p>
          </div>
          <div className="image--wrapper">
            <img className="image" src={float} alt="woman floating" />
          </div>
        </section>
        <section>
          <h3 className="section--header">My work</h3>
        </section>
        <section>
          <h3 className="section--header">Skills</h3>
        </section>
      </main>
    </div>
  );
}

export default App;
