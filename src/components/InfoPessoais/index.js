import React from 'react';
import {
  FaDev, FaVercel, FaLinkedin, FaGithub, FaMapMarkerAlt,
  FaRegEnvelope
} from 'react-icons/fa';

import {
  Container, Informacoes, DadosPerfil, Funcao ,RedeSociais,
  Detalhes,DadosEndereco
} from './styles';

export default function InfoPessoais() {
  return (
    <Container>
      <Informacoes>
        <DadosPerfil>
          <img src="https://github.com/alexsatecnolog.png" alt="Imagem perfil" />
          <h1>Alexsandra Silva</h1>
        </DadosPerfil>
        <Funcao>
          <FaDev size={20} />
          <span>Web Developer</span>
        </Funcao >
        <RedeSociais>
          <div>
            <a href='https://blog-pessoal-alexsatech.vercel.app' target={'_blank'}><FaVercel size={25} /></a>
            <a href='https://www.linkedin.com/in/alexsatecnolog/' target={'_blank'}><FaLinkedin size={25} /></a>
            <a href='https://github.com/alexsabrasil' target={'_blank'}><FaGithub size={25} /></a>
          </div>
        </RedeSociais>
        <DadosEndereco>
          <Detalhes>
            <FaMapMarkerAlt size={20} />
            <span>Recife - PE | Brasil</span>
          </Detalhes>
          <Detalhes>
            <FaRegEnvelope size={20}/>
            <span>alexsa.tecnolog@gmail.com</span>
          </Detalhes>
        </DadosEndereco>
      </Informacoes>
    </Container>
  );
}
