import * as S from "./styles";

function Header() {
  return (
    <S.HeaderContainer>
      <S.Content>
        <S.LogoContainer>
        </S.LogoContainer>
        <S.StyledHyperlink href="#" target="_blank" rel="noopener noreferrer">
          Documentação
        </S.StyledHyperlink>
      </S.Content>
    </S.HeaderContainer>
  );
}

export default Header;
