import Header from "@/components/Header"
import MainPage from "@/components/MainPage"
import RulsLanding from "@/components/RulsLanding"
import Title from "@/components/Title"
import RulsItems from "@/components/RulsItems"
import Footer from "@/components/Footer"

const Ruls = () => {
  return (
    <div>
      <Header/>
      <MainPage>
        <RulsLanding/>
      </MainPage>
      <Title>
          ما هي الية التسجيل في نضام الانتساب للسنة الدراسية 2025/2024
      </Title>
      <RulsItems/>
      <Footer/>
    </div>
  )
}

export default Ruls
