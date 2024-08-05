import Categories from "../../components/Categories/Categories";
import Courses from "../../components/Courses/Courses";
import Logos from "../../components/Logos/Logos";
import Questions from "../../components/Questions/Questions";
import Reviews from "../../components/Reviews/Reviews";
import Statistics from "../../components/Statistics/Statistics";
import Hero from './../../components/Hero/Hero'
export default function Home() {
  return (
    <>
     
      <Hero />
      <Statistics />
      <Categories />
      <Courses />
      <Questions />
      <Reviews />
      <Logos />
    </>
  );
}
