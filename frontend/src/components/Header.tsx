
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { useState } from 'react';

const user ={_id:"123",role:"admin"}

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
   <div className='flex justify-end space-x-6 p-3 font-poppins'>
        <div><Link to="/">Home</Link></div>
        <div> <Link to="/search"><FaSearch /></Link></div>
        <div><Link to="/cart"><FaShoppingCart /></Link></div>
        {user?._id?
        <div>
            {/* it means user is login */}
            <div>
                <button onClick={()=>setIsOpen((prev)=>!prev)}><FaUser /></button>
            </div>
            
            {isOpen?
            <div>
                <div>
                    {user.role==="admin" && 
                        ( <Link to="/admin/dashboard">Admin</Link>)
                    }
                </div>
                <div>
                    <Link to="/order">Order</Link>
                </div>
                <div>
                    <button>
                       Logout <span className=' inline-block'><IoMdLogOut/></span>
                    </button>
                </div>
            </div>
            :null}
            
           
            
        </div>:
        <>
            {/* it means user is logout */}
            <Link to="/login"><IoMdLogIn /></Link>
             
        </>}
   </div>
  )
}

export default Header