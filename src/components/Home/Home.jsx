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
  const categoriesExample2 = [
    {
      title: "SmartPhones",
      img:
        "https://images.samsung.com/is/image/samsung/assets/co/smartphones/galaxy-z-flip3-5g/buy/ZFlip3_Carousel_FoldUnfoldCombo_Lavender_MO.jpg",
    },
    {
      title: "televisions",
      img: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
    },
    {
      title: "computers",
      img: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-171890_823x.jpg?v=1660440284",
    },
    {
      title: "videoGames",
      img: "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.jpg",
    },
    {
      title: "washing machines",
      img:
        "https://exitocol.vtexassets.com/arquivos/ids/16359240/Lavadora-Secadora-LG-16-KG-35-Lbs-WD16EG256-1777261_c.jpg?v=638104331806530000",
    },
    {
      title: "refrigerators",
      img: "https://www.lg.com/co/images/neveras/md07538746/gallery/GB37WPT_1100-10.jpg",
    },
    {
      title: "audio",
      img:
        "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_revolve_ii/product_silo_images/SoundLink_Revolve_II_Black_Ecom_1.png/_jcr_content/renditions/cq5dam.web.320.320.png",
    },
    {
      title: "air conditioners",
      img: "https://www.lg.com/mx/images/aire-acondicionado-residencial/md05806549/Gallery/D_01.jpg",
    },
    {
      title: "kitchen",
      img:
        "https://images.samsung.com/is/image/samsung/co-microwave-oven-ms23j5133ag-ms23j5133ag-ap-frontblack-135501501?$650_519_PNG$",
    },
  ];
  return (
    <>
      <Banner></Banner>
      <Container fixed>
        <Box sx={{ width: "100%" }}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={6}>
            <div>---Home---</div>
            <Carousel></Carousel>
            <MosaicCategories categories={categoriesExample2} />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Home;
