import {Button} from "@/components/ui/button"
import logo from "@/Assets/Logo.png"
import Image from 'next/image';
export default function Navbar() {
    return (
      <div className="navbar bg-white shadow-lg px-8 w">
        {/* Left: Big Button */}
        <div className="flex-1">
          <Button>Book Appointment</Button>
        </div>
  
        {/* Center: 4 Buttons */}
        <div className="flex-none hidden md:flex gap-4">
          <button className="btn btn-ghost">Home</button>
          <button className="btn btn-ghost">Services</button>
          <button className="btn btn-ghost">About</button>
          <button className="btn btn-ghost">Contact</button>
        </div>
  
        {/* Right: Logo */}
        <div className="flex-1 flex justify-end p-0 m-0">
          <Image
            src={logo} 
            alt="logo"
            className="h-20 w-auto p-0 m-0"
            style={{ padding: 0, margin: 0 }} 
          />
        </div>
      </div>
    );
  }