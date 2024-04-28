import MainPage from "@/components/MainPage";
import Goals from "@/components/Goals";
import HomeContent from "@/components/HomeContent";
import Footer from "@/components/Footer";
import HomeFAQ from "@/components/HomeFAQ";
import Header from "@/components/Header";
import HomeLanding from "@/components/HomeLanding";
import HomeMsg from "@/components/HomeMsg";

export default function Home() {
  return (
    <div>
      <MainPage>
        <Header/>
        <HomeLanding/>
      </MainPage>
      <Goals/>
      <HomeMsg/>
      <HomeContent/>
      <HomeFAQ/>
      <Footer/>
    </div>
  );
}
