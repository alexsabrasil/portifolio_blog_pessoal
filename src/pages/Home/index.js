import React from 'react';
import InfoPessoais from '../../components/InfoPessoais';
import DadosProjetos from '../../components/DadosProjetos';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <aside>
        <InfoPessoais/>
      </aside>
      <main>
        <DadosProjetos/>
      </main>
    </Container>
  );
}

export default Home;