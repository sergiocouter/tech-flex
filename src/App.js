import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";
import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import { Card } from "./components/Card/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Rodape } from "./components/Rodape/Rodape";
import { Tipografia } from "./components/Tipografia/Tipografia";
import { Botao } from "./components/Botao/Botao";
import  Logo  from "./img/logo-tech-flex.png";
import { Link } from "./components/Link/Link";
import { ListaSuspensa } from "./components/ListaSuspensa/ListaSuspensa";

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]


function App() {
  return (
      <ProvedorTema>
        <Estilos/>
          <Cabecalho>
            <Container>
              <Row align="center">
                <Col>
                  <img src={ Logo } alt="Logo do site" style={{width: "50px"}}/>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                  <Link>Login</Link>
                </Col>
              </Row>
            </Container>
          </Cabecalho>
            <Container style={{margin:"50px auto"}}>
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
                        <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros}/>
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
          <Rodape>
            <Tipografia variante="h3" componente="h2">
              @Desenvolvido por Sérgio Couter
            </Tipografia>
          </Rodape>     
      </ProvedorTema>
  );
}

export default App;
