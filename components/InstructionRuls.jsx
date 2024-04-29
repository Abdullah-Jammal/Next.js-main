'use client'

import voucherImage from '../images/payment/1689268017116.jpg'
import zainCashImage from '../images/payment/download.jpg'
import visaCardImage from '../images/payment/visa-mastercard-icon-8.jpg'
import { useState } from 'react'
import Image from 'next/image'

const data = [
{
    'title' : 'أولا',
    'des' : 'أفتح التطبيق ثم ادخل رقم الهاتف'
},
{
    'title' : 'ثانيا',
    'des' : 'اقرئ الشروط وتاكد من الموافقه عليها'
},
{
    'title' : 'ثالثا',
    'des' : 'ادخل الرمز الذي ستتلقاه عبر الرقم المدخل'
},
{
    'title' : 'رابعا',
    'des' : 'انشأ كلمة سر خاصه بك'
},
{
    'title' : 'خامسا',
    'des' : 'تم انشاء حسابك بنجاح'
},
]

const dataTwo = [
{
    'title' : 'أولا',
    'des' : 'اختر خانة الانتساب'
},
{
    'title' : 'ثانيا',
    'des' : 'اختر المديريه الخاصه بك ثم أختر المرحلة المراد تقديم عليها'
},
{
    'title' : 'ثالثا',
    'des' : 'أدخل معلوماتك الشخصية'
},
{
    'title' : 'رابعا',
    'des' : 'أدخل معلومات البطاقة الوطنية الخاصة بك وتاريخ ميلادك وتاريخ اصدار الهوية'
},
{
    'title' : 'خامسا',
    'des' : 'أدخل العنوان الصحيح او أقرب نقة داله'
},
{
    'title' : 'سادسا',
    'des' : 'أختر مدرستك السابقة (أكتب أسم المدرسة يدويا في حال لم تجدها)'
},
{
    'title' : 'سابعا',
    'des' : 'أرفق صورة واضحة لك بخلفية بيضاء'
}
]

const dataThree = [
{
    'title' : 'أولا',
    'des' : 'Voucher',
    'img' : {voucherImage}.voucherImage
},
{
    'title' : 'ثانيا',
    'des' : 'Zain Cash',
    'img' : {zainCashImage}.zainCashImage
},
{
    'title' : 'ثالثا',
    'des' : 'Master Card / Visa Card',
    'img' : {visaCardImage}.visaCardImage
}
]


const InstructionRuls = () => {

const [myData, setMyData] = useState(data)
const [index, setIndex] = useState(0)


const [myDataTwo, setMyMyDataTwo] = useState(dataTwo)
const [indexTwo, setIndexTwo] = useState(0)

const [myDataThree, setMyDataThree] = useState(dataThree)
const [indexThree, setIndexThree] = useState(0)

function next() {
    if (index >= 4) return
    setIndex(e => e + 1)
}
function previous() {
    if (index === 0) return
    setIndex(e => e - 1)
}

function nextTwo() {
    if (indexTwo >= 6) return
    setIndexTwo(e => e + 1)
}
function previousTwo() {
    if (indexTwo === 0) return
    setIndexTwo(e => e - 1)
}

function nextThree() {
    if (indexThree >= 2) return
    setIndexThree(e => e + 1)
}
function previousThree() {
    if (indexThree === 0) return
    setIndexThree(e => e - 1)
}

const newStyle = {
    fontSize : '30px'
}

return (
<>
    <div className="container">
    <div className="instruction-container">
    <div className="one" id="instructionTwoTwo">
            <div className="right">
                <h2>تحميل التطبيق</h2>
                <p className="newParagraphTwo" style={{width : '400px'}}>يرجى أتباع الخطوات التالية</p>
            </div>
            <div className="left">
            <video width="400" height="600" controls preload="true" style={{borderRadius : '20px'}}>
                <source src="/Videos/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
        <div className="one" id="instructionOne">
            <div className="left">
                <video width="400" height="600" controls preload="true" style={{borderRadius : '20px'}}>
                    <source src="/Videos/2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="right">
                <h2>أرشادات عامة</h2>
                <div className="oneOne">
                    <div className="next" onClick={() => previous()}>&lt;</div>
                    <div className="information">
                        <h4 className="h4Information" style={newStyle}>{myData[index].title}</h4>
                        <p>- {myData[index].des}</p>
                    </div>
                    <div className="previous" onClick={() => next()}>&gt;</div>
                </div>
            </div>
        </div>
        <div className="one" id="instructionTwo">
            <div className="right">
                <h2>الانتساب</h2>
                <p className="newParagraphTwo">يرجى أتباع الخطوات وملئ الاستمارة بمعلومات حقيقية</p>
                <div className="oneOne">
                    <div className="next" onClick={() => previousTwo()}>&lt;</div>
                    <div className="information">
                        <h4 style={newStyle}>{myDataTwo[indexTwo].title}</h4>
                        <p>- {myDataTwo[indexTwo].des}</p>
                        <p>- نسخ من المستمسكات</p>
                        <p>- البطاقة الموحدة وبطاقة السكن</p>
                    </div>
                    <div className="previous" onClick={() => nextTwo()}>&gt;</div>
                </div>
            </div>
            <div className="left">
            <video width="400" height="600" controls preload="true" style={{borderRadius : '20px'}}>
                <source src="/Videos/3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
        <div className="one" id="instructionThree">
            <div className="left">
            <video width="400" height="600" controls preload="true" style={{borderRadius : '20px'}}>
                <source src="/Videos/4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="right">
            <h2>طريقة الدفع</h2>
            <h5>لا يحق للطالب أسترداد رسوم التسجيل بعد ان يتم الموافقة على طلبة بالتسجيل والانضمام الى المدرسة الحكومية الالكترونية</h5>
                <div className="oneOne">
                    <div className="next" onClick={() => previousThree()}>&lt;</div>
                    <div className="information">
                        <h4 style={newStyle}>{myDataThree[indexThree].title}</h4>
                        <p>- {myDataThree[indexThree].des}</p>
                        <Image src={myDataThree[indexThree].img} alt='Image Not Found' height={180} width = {'auto'} />
                    </div>
                    <div className="previous" onClick={() => nextThree()}>&gt;</div>
                </div>
            </div>
        </div>
        <div className="one">
            <div className="right">
                <h2>طباعة الاستمارة</h2>
                <h4>يرجى طباعة الاستمارة بحذر واتباع الخطوات بحذافيرها وحفظ نسخه من الاستماره في حال حدوث خطأ</h4>
            </div>
            <div className="left">
                <video width="400" height="600" controls preload="true"  style={{borderRadius : '20px'}}>
                <source src="/Videos/5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default InstructionRuls
