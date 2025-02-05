import logo from "../../assets/logo-light.svg";
import * as S from "./styles";

function Header() {
  return (
    <S.HeaderContainer>
      <S.Content>
        <S.LogoContainer>
          <S.Logo src={logo} alt="Books & Authors" />
        </S.LogoContainer>
        <S.StyledHyperlink href="#" target="_blank" rel="noopener noreferrer">
          Documentação
        </S.StyledHyperlink>
      </S.Content>
    </S.HeaderContainer>
  );
}

export default Header;
