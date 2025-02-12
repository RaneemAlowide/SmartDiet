import logo from "@/Assets/Logo.png"
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 ">
     <aside className="">
       <Image alt="Smart Diet" src={logo} className="h-40 w-auto p-0 m-0"/>
        <p>
       سمارت دايت 
        <br />
        Providing reliable tech since 2025
        </p>
    </aside>
    <nav>
        <h6 className="footer-title">الخدمات</h6>
        <a className="link link-hover">مانقدمة</a>
        <a className="link link-hover">خدمات اونلاين</a>
        <a className="link link-hover">خدمات حضورية</a>
    </nav>
    <nav>
        <h6 className="footer-title">عن المركز</h6>
        <a className="link link-hover">نبذة عننا</a>
        <a className="link link-hover">عن الأخصائية</a>
        <a className="link link-hover">طرق التواصل</a>
      
    </nav>
    {/* <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
    </nav> */}
    </footer>
  )
}

export default Footer
