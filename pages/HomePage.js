import styled from 'styled-components';
import customTheme from '../public/customTheme';
import AsideBar from '@/components/molecules/asideBar/AsideBar';
import SectionHero from '@/components/molecules/sectionHero/SectionHero';

const HomePageContainer = styled.div`
  display: flex;
  width: 100vw;
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: colum;
  width: 100%;
  background-color: ${customTheme.palette.background.default};
  align-items: stretch;
  height: 100vh;
  `
export default function HomePage() {

  return (
    <HomePageContainer>
      <AsideBar />
      <ContainerMain>
        <SectionHero />
      </ContainerMain>
    </HomePageContainer>
  );
}
