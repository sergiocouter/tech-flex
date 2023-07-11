import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";
import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import { Card } from "./components/Card/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Rodape } from "./components/Rodape/Rodape";
import { Tipografia } from "./components/Tipografia/Tipografia";
import { Botao } from "./components/Botao/Botao";


function App() {
  return (
      <ProvedorTema>
        <Estilos/>
          <Cabecalho/>
            <Container style={{margin:"80px auto"}}>
              <Row justify="center">
                <Col lg={7} md={9} sm={12}>
                  <Card>
                    <Tipografia variante="h1" componente="h1">Tech Flex</Tipografia>
                    <Tipografia variante="body" componente="body">
                      Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
                    </Tipografia>                   
                    <Row>
                      <Col>
                        <CampoTexto titulo="Nome Completo"/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4} md={4} sm={4}>
                        <CampoTexto titulo="Estado"/>
                      </Col>
                      <Col lg={8} md={8} sm={8}>
                        <CampoTexto titulo="Cidade"/>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CampoTexto titulo="E-mail"/>
                      </Col>
                    </Row> 
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <CampoTexto titulo="Senha"/>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <CampoTexto titulo="Repita a senha"/>
                      </Col>
                    </Row>                 
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <Botao variante="">
                          Anterior
                        </Botao>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <div style={{textAlign: "right"}}>
                          <Botao variante="primaria">
                            Póxima
                          </Botao>                         
                        </div>                       
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container> 
          <Rodape />     
      </ProvedorTema>
  );
}

export default App;
