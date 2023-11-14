import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import PostAddIcon from '@mui/icons-material/PostAdd';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
const NavBar = styled.nav`
    width: 19.50vw;
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    gap: 4rem;
    align-items: stretch;
    background-color: ${(props) => props.theme.palette.background.paper};
`;

const Links = styled.div`
    color: ${(props) => props.theme.palette.text.primary};
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.palette.background.paper};
    gap: 0.5rem;
    transition: background-color 0.3s, transform 0.3s, color 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.palette.secondary.main};
        transform: scale(1.1);
        color: ${(props) => props.theme.palette.text.secondary};
    }
`;

const IconWithFrameMotion = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    align-items: center;
    justify-content: center;
`;



const Navbar = () => {
    const theme = useTheme();

    return (
        <NavBar theme={theme}>
            <Link href={'/'}>
                <Links theme={theme}>
                    <IconWithFrameMotion>
                        <HomeIcon
                            style={{
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s',
                                color: theme.palette.primary.main,
                            }}
                        />

                    </IconWithFrameMotion>
                </Links>
            </Link>
            <Link href={'/about'}>
                <Links theme={theme}>
                    <IconWithFrameMotion>
                        <PersonIcon
                            style={{
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s',
                                color: theme.palette.primary.main,
                            }}
                        /> About Me
                    </IconWithFrameMotion>
                </Links>
            </Link>
            <Link href={'/services'}>
                <Links theme={theme}>
                    <IconWithFrameMotion>
                        <WorkIcon
                            style={{
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s',
                                color: theme.palette.primary.main,
                            }}
                        /> Service
                    </IconWithFrameMotion>
                </Links>
            </Link>
            <Link href={'/skills'}>
                <Links theme={theme}>
                    <IconWithFrameMotion>
                        <BuildIcon
                            style={{
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s',
                                color: theme.palette.primary.main,
                            }}
                        />
                    </IconWithFrameMotion>
                </Links>
            </Link>
            <Link href={'/portfolio'}>
                <Links theme={theme}>
                    <IconWithFrameMotion>
                        <FolderIcon
                            style={{
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s',
                                color: theme.palette.primary.main,
                            }}
                        /> Portfolio
                    </IconWithFrameMotion>
                </Links>
            </Link>
            <Link href={'/blog'}>
                <Links theme={theme}>
                    <IconWithFrameMotion>
                        <PostAddIcon
                            style={{
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s',
                                color: theme.palette.primary.main,
                            }}
                        />  
                    </IconWithFrameMotion>
                </Links>
            </Link>
            <Link href={'/contact'}>
                <Links theme={theme}>
                    <IconWithFrameMotion>
                        <EmailIcon
                            style={{
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s',
                                color: theme.palette.primary.main,
                            }}
                        /> Contact
                    </IconWithFrameMotion>
                </Links>
            </Link>
        </NavBar>
    );
};

export default Navbar;
