'use client'
import TopSection from "./TopSection"
const MainPage = ({children}) => {
  return (
    <div className="main-page">
      <TopSection/>
        {children}
    </div>
  )
}

export default MainPage
