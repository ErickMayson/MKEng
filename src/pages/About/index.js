import {
  ContentContainer, PageContainer, Title, TitleContainer,
} from './styles';
import blueprint from '../../assets/images/blueprint.png';

export default function About() {
  return (
    <div>
      <PageContainer>
        <TitleContainer>
          <Title>YABADABA DOOOOOOOOOOOO </Title>
        </TitleContainer>
        <ContentContainer>
          <div className="contenttext">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae commodi qui dignissimos doloremque iure debitis,
            eos aspernatur explicabo quisquam. Deleniti,
            quaerat similique dolores quae minima error repellat ullam pariatur aspernatur?
          </div>
          <img src={blueprint} alt="MyContacts" />
        </ContentContainer>
      </PageContainer>
    </div>
  );
}
