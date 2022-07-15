import styled from "styled-components";
import AboutSection from "./Components/AboutSection";
import BlogsSection from "./Components/BlogsSection";
import FooterSection from "./Components/FooterSection";
import Header from "./Components/Header";
import LatestSection from "./Components/LatestSection";
import ReccomendationsSection from "./Components/ReccomendationsSection";
import ServicesSection from "./Components/ServicesSection";
import themes from "./context/theme";
import { useTheme, useUpdateTheme } from "./context/themeContext";

function App() {

  const theme = useTheme()
  const setTheme = useUpdateTheme()
  return (
    <AppStyled theme={theme} >
      <Header />
      <main>
        <AboutSection />
        <ServicesSection />
        <ReccomendationsSection />
        <LatestSection />
        <BlogsSection />
      </main>
      <FooterSection />
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="theme-switcher">
        {
          themes.map((theme, i) => {
            return <button key={i} style={{ background: theme.colorBg }} onClick={() => setTheme(i)}></button>
          })
        }
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 5;
  background-color: ${props => props.theme.colorBg};
  color: ${props => props.theme.colorWhite};
  a{
    color: ${props => props.theme.colorWhite};
  }
  p{
    color: ${props => props.theme.colorFont};
  }
  .active-menu{
    border-radius: 30px;
    background: ${props => props.theme.colorGradientPrimary2};
  }

  .lines{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;
    .line{
      min-height: 100%;
      width: 1px;
      background-color: ${props => props.theme.colorGrey9};
    }
  }

  .theme-switcher{
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    button{
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10%;
      outline: none;
      border: 2px solid ${props => props.theme.colorAccent};
      &:last-child{
        margin-top: 10px;
      }
    }
  }
`;

export default App;
