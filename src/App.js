import React from "react";
import logo from "./logo.svg";
import float from "./assets/float.svg";
import "./App.css";
import { GithubFeed } from "./GithubFeed";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="section--header">My React Portfolio</h1>
        <img src={logo} className="App-logo" alt="react symbol" />
      </nav>
      <main>
        <section className="section--split">
          <div className="text--wrapper">
            <h2 className="font--secondary">Hey, I'm ReDi.</h2>
            <p className="body--font">
              Here's the section where you describe how awesome it is to work with
              you. "I am really into these technologies and this is what I bring
              to the table. When I'm not coding you can find me going for runs
              and drinking way too much coffee."
            </p>
          </div>
          <div className="image--wrapper">
            <img className="image" src={float} alt="woman floating" />
          </div>
        </section>
        <section>
          <h3 className="section--header">What I've been working on lately</h3>
          <GithubFeed />
        </section>
        <section>
          <h3 className="section--header">Skills</h3>
        </section>
      </main>
    </div>
  );
}

export default App;
