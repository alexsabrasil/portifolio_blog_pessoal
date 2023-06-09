import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SkillsItem } from '../../services/data/skill';
import { Projetos } from '../../services/data/projetos';

import {
  Container, Menu, Cabecalho, OpcoesMenu, Dados, InfoDados,
  Skills, ItemSkill, Card, Itens, ProgressBar, Progress
} from './styles';


export default function DadosProjetos() {
  const ItensSkill = SkillsItem;
  const [showDados, setShowDados] = useState(true);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  function handleClickMenu(isTrue) {
    if (isTrue) {
      setShowDados(true);
    } else {
      setShowDados(false);
    }
  }

  return (
    <Container>
      <nav>
        <Menu>
          <Cabecalho>
            <span>Menu</span>
            <div></div>
          </Cabecalho>
          <OpcoesMenu>
            <span onClick={() => handleClickMenu(false)}>Projetos</span>
            <span onClick={() => handleClickMenu(true)}>Sobre</span>
          </OpcoesMenu>
        </Menu>
      </nav>
      <Dados>
        {showDados ? (
          <>
            <InfoDados initial="hidden" animate="visible" variants={variants}>
              <span>
                Olá, meu nome é Alexsandra Silva!

                Como neuropsicopedagoga, vi na programação uma oportunidade de me reinventar e trabalhar com tecnologia e inovação. 
                Meu interesse pela informática surgiu desde criança e atualmente estou cursando bacharelado em Sistemas de Informações no Centro Universitário Unifatecie. 
                Estou adquirindo conhecimentos em linguagens de programação, com foco em front-end, engenharia de dados e nuvem, incluindo AWS e Microsoft Azure. Tenho estudado JavaScript, ReactJS, Python, PHP, SqlServer, Cloud, HTML e CSS. 
                Sou entusiasta da área de sistemas, com uma paixão especial por FrontEnd, Cloud e Engenharia de Dados, dedicando mais de um ano aos estudos nessas áreas.
                Acredito que a minha experiência na área de educação pode ser aplicada à tecnologia, pois valoriza a adaptabilidade.
                Me defino como uma pessoa curiosa, organizada, determinada, focada e empenhada em evoluir e colaborar no desenvolvimento de pessoas e projetos.
                Estou sempre em busca de conhecimento, gosto de compartilhar conteúdos interessantes e apaixonantes. Se desejar saber mais sobre mim, entre em contato atráves
                do Linkedin, <b><a href='https://www.linkedin.com/in/alexsatecnolog/' target={'_blank'}>Clicando aqui!</a></b>

              </span>
            </InfoDados>
            <h1>Skills</h1>
            <Skills>
              {ItensSkill.map((Item) =>
                <ItemSkill animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}>
                  {Item.icon}
                  <div>
                    <h3>{Item.titulo}</h3>
                    <ProgressBar>
                      <Progress percentual={Item.Percentual}>
                        <span>{Item.Percentual}</span>
                      </Progress>
                    </ProgressBar>
                  </div>
                </ItemSkill>
              )}
            </Skills>
          </>
        ) : (
          <>
            <Itens>
              {Projetos.map((projetos) =>
                <Card initial="hidden" animate="visible" variants={variants}>
                  <h3>{projetos.nome}</h3>
                  <img src={projetos.img} alt="" />
                  <a href={projetos.github} target={'_blank'}>
                    <FaGithub size={20} />
                    Git Hub
                  </a>
                </Card>
              )}
            </Itens>
          </>
        )}
      </Dados>
    </Container >
  );
}