export default function PageNotFound() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <div className="s3:flex items-center text-center s3:text-left transition-all">
            <p className="text-[24px] s3:text-[30px] font-semibold transition-all">404</p>
            <div className="w-full s3:h-[60px] border-t h-[2px] s3:w-[2px] s3:border-l my-3 s3:my-0 s3:mx-5 transition-all"></div>
            <p className="text-[16px] s3:text-[20px] text-black/70 font-semibold transition-all">This page could not be found.</p>
        </div>
    </div>
  )
}