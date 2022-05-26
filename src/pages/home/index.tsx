
import React from "react";
import { DivTotal, HeaderImg, Img, AreaFolders, H2, AreaProject, Project1, SeePt, Ppt, H3, APt, PGit, Section, Hey1, Hey2, AreaRedes, ALinkedin, AreaTec, ImgTec, ImgTs, AreaFooter, H2footer, Ul, Li, AreaExp, LinkLkd, ABtn, PProfile, AreaBtnFooter, H3footer } from "../../styles/home";
import {
  BsEmojiSunglasses, BsGithub,
  BsLinkedin, BsWhatsapp
} from "react-icons/bs";

export default function Home(props: {
  contentProject: Array<{
    project?: string;
    description?: string;
    bntlook?: string;
  }>
  contentImgTech: Array<{
    url?: string;
  }>
  contentExp: Array<{
    name?: string;
    title?: string;
    timeCourse?: string;
  }>
}) {

  return (
    <DivTotal>
      <Section className="header">
        <HeaderImg>
          <Img src="https://avatars.githubusercontent.com/u/80927757?s=96&v=4" />
          <Hey1>Bem Vindos, este é  </Hey1>
          <Hey2> Meu Portifólio !</Hey2>
          <AreaRedes>
            <ALinkedin href="https://www.linkedin.com/in/cinara-neis-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-99868557/" target="_blank">
              <BsLinkedin />
            </ALinkedin>
            <ALinkedin href="https://web.whatsapp.com/send?phone=5551992714694" target="_blank">
              <BsWhatsapp />
            </ALinkedin>
            <ALinkedin href="https://github.com/cinara-neis" target="_blank">
              <BsGithub />
            </ALinkedin>
          </AreaRedes>
        </HeaderImg>
      </Section>

      <Section >
        <AreaFolders>
          <H2><em>Profile . . .</em></H2>
          <PProfile>Estudante de Análise e Desenvolvimento de Sistemas, 3º período pela Uninter, cursando Inglês - intermediário pela mesma. Busco oportunidades na área de T.I. , na parte de desenvolvimento Front-End.  </PProfile>
        </AreaFolders>
      </Section>

      <Section >
        <AreaFolders>
          <H2><em>Professional Experiences and certifications . . .</em></H2>
        </AreaFolders>
        <AreaExp>
          {props.contentExp.map((item, index) => (
            <Ul key={index}>
              <Li>
                {item.title} <br></br><br></br>
                {item.name} <br></br><br></br>
                {item.timeCourse}
              </Li>
            </Ul>
          ))}
        </AreaExp>
      </Section>

      <Section>
        <AreaFolders>
          <H2><em>Hard Skills . . .</em></H2>
        </AreaFolders>
        <AreaTec>
          {props.contentImgTech.map((item, index) => (
            <ImgTec key={index} src={item.url} />
          ))}
          <ImgTs src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" />
          <ImgTs src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" />
        </AreaTec>
      </Section>

      <Section id="Projetos">
        <AreaFolders >
          <H2><em>My Recent Projects . . .</em></H2>
          <AreaProject>
            {props.contentProject.map((item, index) => (
              <Project1 key={index}>
                <H3>***{' '}{item.project}{' '}***</H3>
                <SeePt>
                  <Ppt>{item.description}</Ppt>
                </SeePt>
                <APt href={item.bntlook} target="_blank">
                  <BsGithub /> <PGit>See Code  </PGit>
                </APt>
              </Project1>
            ))}
          </AreaProject>
        </AreaFolders>
      </Section>

      <Section id="Contato">
        <AreaFooter>
          <footer>
            <H2footer>Qualquer um que nunca tenha cometido um erro,
              nunca tentou nada de novo ! ! !</H2footer>
          </footer>
        </AreaFooter>

        <AreaBtnFooter>
          <H3footer>Desenvolvido por Cinara Neis</H3footer>
          <BsEmojiSunglasses />
        </AreaBtnFooter>
      </Section>
    </DivTotal >
  );
};

