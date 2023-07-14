import { styled } from "styled-components";

const Container = styled.div`
  width: 40%;
  height: inherit;
  padding: 50px 0;
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 700px;
`;

const ProductOption = ({ option }) => {
  return (
    <Container>
      <OptionContainer>{option}</OptionContainer>
    </Container>
  );
};

export default ProductOption;
