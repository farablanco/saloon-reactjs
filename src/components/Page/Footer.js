import React from 'react'
import { Link } from 'react-router-dom'
import StickyFooter from 'react-sticky-footer';

const Footer = () => (

    <StickyFooter
    bottomThreshold={50}
    stickAtThreshold={1}
    normalStyles={{
    padding: "0.5rem"
    }}
    stickyStyles={{
    padding: "1rem"
    }}
    >
    <div className="container" style={{textAlign:"center"}}>
      <Link to="/" className="logo-font">Reward Pts Admin</Link>
      <span className="attribution">
        &nbsp;App developed by <a href="https://kennethphang.asia">kenken64</a>.
      </span>
    </div>
    </StickyFooter>

)

export default Footer