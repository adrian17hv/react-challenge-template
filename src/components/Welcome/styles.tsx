import styled from 'styled-components'

export const LogoSection = styled.section`
  margin-bottom: 1rem;

  img {
    width: 70%;
    height: auto;
    max-width: 350px;
    min-width: 150px;
  }
`

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.lg};
  gap: 1rem;
  justify-content: center;

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.gray_400};
  }

  code {
    font-size: 0.85em;
    background-color: ${({ theme }) => theme.colors.gray_100};
    border-radius: 0.25em;
    padding-inline: 0.25em;
  }
`

export const Accent = styled.span`
  background: linear-gradient(10deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  background-clip: text;
  color: transparent;
  width: max-content;
`

export const Container = styled.article`
  display: grid;
  grid-template-columns: 60% 1fr;
  padding: 5rem 0 0 5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column-reverse;
    padding: 3rem;
    text-align: center;
  }
`

export const TagsList = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.3em 1em;
  border-radius: 5em;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.3rem;

  img {
    height: 0.85rem;
  }
`
