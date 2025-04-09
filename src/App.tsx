import ReactFullpage from "@fullpage/react-fullpage";
import Apresentacao from "./pages/Apresentacao";
import SobreMim from "./pages/SobreMim";
import Projetos from "./pages/Projetos";

function App() {
  
  return (
    <ReactFullpage
      anchors={['home', 'sobre-mim', 'meus-projetos', 'contato']}
      navigation
      scrollingSpeed={1000}
      credits={{ enabled: false }}
      render={() => {
        return (
          <div>
            <div className="section" style={{ background: '#2E2B33',}}>
              <Apresentacao />
            </div>
            <div className="section" style={{ background: '#2E2B33'}}>
              <SobreMim />
            </div>
            <div className="section" style={{ background: '#2E2B33'}}>
              <Projetos />
            </div>
          </div>
        );
      }}
    />
  );
}

export default App;
