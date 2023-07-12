import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";
import ProductGrid from "../organisms/ProductGrid";
import Carousel from "../organisms/Carousel";
import Footer from "../molecules/Footer";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 80px;
`;

const HomeTemplate = () => {
  return (
    <>
      <GlobalNavBar />
      <Carousel />
      <Container>
        <ProductGrid />
      </Container>
      <Footer />
    </>
  );
};

export default HomeTemplate;
