import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Subtitle>TypeScript, ReactJS, NextJS e Styled Components</S.Subtitle>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main
