import { useState } from 'react'
import { logo } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  return (
    <div className='nav-bar px-3 py-3 d-flex align-items-center justify-content-between gap-3'>
      <Link to='/'>
        <img src={logo} alt="logo" style={{ width: '50px' }} />
      </Link>
      <div className='overflow-hidden rounded-pill' style={{ width: '400px' }}>
        <input type="text" className='bg-white px-3 py-2' style={{ width: '85%' }} placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
        <button className='search bg-white p-2' style={{ width: '15%' }} onClick={() => navigate(`videos/${searchTerm}`)}>
          <i class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </button>
      </div>
    </div>
  )
}

export default NavBar