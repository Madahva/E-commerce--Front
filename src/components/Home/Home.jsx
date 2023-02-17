import Banner from "../Banner/Banner";
import MosaicCategories from "../MosaicCategories/MosaicCategories";
import Container from "@mui/material/Container";
import Carousel from "../Carousel/Carousel";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

const Home = () => {
  /*const categoriesExample1 = [
    {
      title: "SmartPhones en descuento!!!",
      img: "https://images.samsung.com/is/image/samsung/assets/co/smartphones/galaxy-z-flip3-5g/buy/ZFlip3_Carousel_FoldUnfoldCombo_Lavender_MO.jpg",
    },
    {
      title: "televisions 30%",
      img: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
    },
    {
      title: "refrigerators solo hoy",
      img: "https://www.lg.com/co/images/neveras/md07538746/gallery/GB37WPT_1100-10.jpg",
    },
  ];*/

  return (
    <>
      <Banner></Banner>
      <Container fixed>
        <Box sx={{ width: "100%" }}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={6}>

            <Carousel></Carousel>
            <MosaicCategories />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Home;
