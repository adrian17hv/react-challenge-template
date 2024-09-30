import { LogoSection, Container, Tag, TagsList, TextSection, Accent } from './styles.tsx'
import HVLogo from '../../assets/logos/hv.svg'
import ReactLogo from '../../assets/logos/react.svg'
import ViteLogo from '../../assets/logos/vite.svg'

const Welcome = () => (
  <Container>
    <TextSection>
      <div>
        <h1>
          <Accent>HomeVision</Accent>
        </h1>
        <h2>Challenge Template</h2>
      </div>
      <p>This template is provided to help you get started quickly with the challenge. You can use it as is, or customize it to suit your needs.</p>
      <p>
        If unsure where to begin take a look at <code>src/pages/app.tsx</code>
      </p>
      <TagsList data-testid="tags">
        {tags.map((tag) => (
          <Tag key={tag.name} role="listitem">
            {tag.logo && <img src={tag.logo} alt={`${tag.name} Logo`} />}
            <span>{tag.name}</span>
          </Tag>
        ))}
      </TagsList>
    </TextSection>
    <LogoSection>
      <img src={HVLogo} alt="HomeVision Logo" />
    </LogoSection>
  </Container>
)

const tags = [
  { name: 'React', logo: ReactLogo },
  { name: 'Vite', logo: ViteLogo },
  { name: 'Typescript' },
  { name: 'Styled Components' },
  { name: 'Eslint' },
  { name: 'Prettier' },
  { name: 'Vitest' },
]

export default Welcome
