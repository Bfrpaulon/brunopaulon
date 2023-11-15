import { ChakraProvider } from "@chakra-ui/react";
import theme from '../utils/theme';
import Navbar from '../components/Navbar/Navbar';
export default function App({ Component, pageProps }) {
    return (

        <ChakraProvider theme={theme}>
            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}