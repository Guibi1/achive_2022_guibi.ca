import { createTheme } from '@material-ui/core/styles'

export default function Theme()
{
    return createTheme({
        props: {
            MuiTypography: {
                variantMapping: {
                    h3: 'h1',
                    h5: 'h2',
                    h6: 'h3',
                    },
                },
            },
        typography: {
            fontFamily: [ 'Open Sans'],
            fontSize: 16,
        },
        palette: {
            primary: { main: "#8a1fff" },
            secondary: { main: "#b36bff" },
            },
        });
}