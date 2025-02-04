'use client'

export default function Video({ handelVideo }) {
  return (
    <div className="watchVideo">
      <span className="closeNewVideo" onClick={() => handelVideo()}>X</span>
      <h2>برعاية معالي وزير التربية الدكتور ابراهيم نامس الجبوري وبأشراف مباشر من مديرية التلفزيون التربوي . تربية نينوى تعلن جاهزيتها لاستلام طلبات المتقدمين للمدرسة</h2>
      <video width="520" height="440" controls preload="none">
        <source src="/Videos/newVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
