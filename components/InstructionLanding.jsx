'use client'
import MainPage from "./MainPage"
import newMainImage from '../images/Floating_Devices_Collection e school.png'
import Image from "next/image"

const InstructionLanding = () => {
  return (
    <>
    <MainPage>
      <div className="instruction-main">
        <div className="container">
          <div className="affiliation-container" style={{height : '110vh'}}>
              <div className="rightRight">
                  <h2 className="secandryTitle" style={{fontSize : '60px'}}>ضوابط وتعليمات التسجيل</h2>
                  <div className="secInstructionDiv">
                    <div className="secInstructionDivOne">
                      <a href="#instructionTwoTwo">تحميل التطبيق</a>
                      <a href="#instructionOne">أرشادات عامة</a>
                    </div>
                    <div className="secInstructionDivOno">
                      <a href="#instructionTwo">ألانتساب</a>
                      <a href="#instructionThree">طريقة الدفع</a>
                    </div>
                  </div>
              </div>
              <div className="leftLeft">
                  <div className="newInfo">
                      <Image src={newMainImage} alt="Image Not Found" width={500} height={300}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </MainPage>
    </>
  )
}

export default InstructionLanding
