import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  color: black;
  max-width: 1300px;
  margin: 2rem auto auto auto;
  padding: 3rem 2rem;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 0.4rem;
  background-color: #f2f2f2;
  border-radius: 0;
`;

const Bar = styled.div`
  width: 20%;
  height: 100%;
  background-color: #0099ff;
`;

type ICardWrapperProps = React.PropsWithChildren<{
  title: string;
}>;

export default function CardWrapper({ title, children }: ICardWrapperProps) {
  return (
    <Card>
      <h1>{title}</h1>
      <BarContainer>
        <Bar />
      </BarContainer>
      {children}
    </Card>
  );
}
