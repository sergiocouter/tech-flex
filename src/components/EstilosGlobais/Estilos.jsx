import { Global } from "@emotion/react";

const estilos = tema => {
  return{
    html: {
      fontFamily: tema.fontes.principal
    },
    body: {
      margin: 0
    }
  }
}

export const Estilos = () => {
  return(
    <Global styles={estilos} />
  );
}