import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors.js';

function Banner() {
    return <StyledDiv className="kasa-banner">
        <StyleFigure>
            <img src={logo} alt='logo'></img>
            </StyleFigure>
        <StyleNav className='lien-pages-box'>
            <StyledLink to='/'>Accueil</StyledLink>
            <StyledLink to='/propos'>A Propos</StyledLink>
        </StyleNav>
    </StyledDiv>
}

export default Banner

//Style

const StyledLink = styled(Link)`
    color: ${colors.primary};
    font-size: 24px;
    text-decoration: none;
    font-weight: 500;
`

const StyledDiv = styled.div`
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 40px;
    display: flex;
`
const StyleFigure = styled.figure`
    flex-grow: 3;
`

const StyleNav = styled.nav`
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
`