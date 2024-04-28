import localFont from 'next/font/local'
import "./globals.css";

const myFont = localFont({
  src: '../Font/Bahij_TheSansArabic-Plain.woff',
  display: 'swap',
})
export const metadata = {
  title: "المدرسة الحكومية الالكترونية",
  description: "المدرسة الحكومية الإلكترونية هي إحدى التطبيقات الحديثة للتعلم المبني على الإنترنت، وهي عبارة عن بيئة الكترونية تشتمل على اتصالات أو أماكن خاصة يتواجد فيها المتعلمون، ويرتبطون مع بعضهم بعضاً ومع المحاضر عن طريق الإنترنت، حيث يتم تقديم برامج تعليم عن بُعد ذات جودة أكاديمية، ونوعية متميزة.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
