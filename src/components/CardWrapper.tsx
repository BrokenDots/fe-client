import styled from "styled-components";

const Card = styled.div`
  background-color: var(--card-background-color);
  color: var(--text-color);
  max-width: 1300px;
  margin: 2rem auto auto auto;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 0.4rem;
  background-color: var(--background-color);
  border-radius: 0;
`;

const Bar = styled.div`
  width: 35%;
  height: 100%;
  background-color: var(--accent-color);
`;

const StyledTitle = styled.div`
  font-family: var(--title-font);
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

type ICardWrapperProps = React.PropsWithChildren<{
  title: string;
}>;

export default function CardWrapper({ title, children }: ICardWrapperProps) {
  return (
    <Card>
      <StyledTitle>{title}</StyledTitle>
      <BarContainer>
        <Bar />
      </BarContainer>
      {children}
    </Card>
  );
}
