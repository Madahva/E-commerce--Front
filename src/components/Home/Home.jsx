import Banner from "../Banner/Banner";
import MosaicCategories from "../MosaicCategories/MosaicCategories";
import Container from "@mui/material/Container";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  const categoriesExample1 = [
    {
      title: "SmartPhones",
      img: "https://images.samsung.com/is/image/samsung/assets/co/smartphones/galaxy-z-flip3-5g/buy/ZFlip3_Carousel_FoldUnfoldCombo_Lavender_MO.jpg",
    },
    {
      title: "televisions",
      img: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
    },
    {
      title: "refrigerators",
      img: "https://www.lg.com/co/images/neveras/md07538746/gallery/GB37WPT_1100-10.jpg",
    },
  ];
  const categoriesExample2 = [
    {
      title: "SmartPhones2",
      img: "https://images.samsung.com/is/image/samsung/assets/co/smartphones/galaxy-z-flip3-5g/buy/ZFlip3_Carousel_FoldUnfoldCombo_Lavender_MO.jpg",
    },
    {
      title: "televisions2",
      img: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
    },
    {
      title: "refrigerators2",
      img: "https://www.lg.com/co/images/neveras/md07538746/gallery/GB37WPT_1100-10.jpg",
    },
    {
      title: "SmartPhones2.2",
      img: "https://images.samsung.com/is/image/samsung/assets/co/smartphones/galaxy-z-flip3-5g/buy/ZFlip3_Carousel_FoldUnfoldCombo_Lavender_MO.jpg",
    },
    {
      title: "televisions2.2",
      img: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
    },
    {
      title: "refrigerators2.2",
      img: "https://www.lg.com/co/images/neveras/md07538746/gallery/GB37WPT_1100-10.jpg",
    },
    {
      title: "SmartPhones2.2.2",
      img: "https://images.samsung.com/is/image/samsung/assets/co/smartphones/galaxy-z-flip3-5g/buy/ZFlip3_Carousel_FoldUnfoldCombo_Lavender_MO.jpg",
    },
    {
      title: "televisions2.2.2",
      img: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
    },
    {
      title: "refrigerators2.2.2",
      img: "https://www.lg.com/co/images/neveras/md07538746/gallery/GB37WPT_1100-10.jpg",
    },
  ];
  return (
    <>
      <Container fixed>
        <div>---Home---</div>
        <Banner></Banner>
        <MosaicCategories categories={categoriesExample1} />
        <Carousel></Carousel>
        <MosaicCategories categories={categoriesExample2} />
      </Container>
    </>
  );
};

export default Home;
