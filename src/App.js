import { Card } from "./components/Card/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";


function App() {
  return (
      <ProvedorTema>
        <Estilos/>
          <Card>
            <h1>Tech Flex</h1>
          </Card>
      </ProvedorTema>
  );
}

export default App;
