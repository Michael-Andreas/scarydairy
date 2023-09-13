import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div className="mb-10">
        <h2 className="title">
          MILCH
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
        </h2>
        <h2 className="title">
          IST
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
        </h2>
        <h2 className="title">
          MORD
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
        </h2>
      </div>
      <Section />
    </>
  );
}

export default App;
