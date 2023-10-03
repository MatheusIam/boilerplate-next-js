import * as S from './styles'

const Main = ({
  title = 'Nextzão de cria',
  description = 'Desenvolvido por Matheus Iam'
}) => (
  <S.Wrapper>
    <h1>React Avançado</h1>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
