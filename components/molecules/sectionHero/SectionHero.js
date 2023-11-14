import styled from 'styled-components';
import customTheme from '../../../public/customTheme';
const SectionHero = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: space-around;
    align-items: flex-start;
`;


export default function HomePage() {

    return (
        <SectionHero>
            <h1>HELLO WORLD</h1>
        </SectionHero>
    );
}
