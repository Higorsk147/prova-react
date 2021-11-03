import React from 'react'
// import '../../../assets/css/style.css'
<link href="../../../assets/css/style.css" rel="stylesheet"/>

function Menu(props) {

    return (
        <>
            <body className="sidebar-menu-collapsed">
                {/* <!-- <div className="se-pre-con"></div> --> */}
                <section>
                {/* <!-- sidebar menu start --> */}
                <div className="sidebar-menu sticky-sidebar-menu">

                    {/* <!-- logo start --> */}
                    <div className="logo">
                        <h1><a href="index.html">Collective</a></h1>
                    </div>

                    {/* <!-- if logo is image enable this --> */}
                    {/* <!-- image logo  */}
                    {/* <div className="logo">
                        <a href="index.html">
                        <img src="image-path" alt="Your logo" title="Your logo" className="img-fluid" style="height:35px;" />
                        </a>
                    </div>--> */}
                    {/* <!-- //image logo --> */}

                    <div className="logo-icon text-center">
                        <a href="index.html" title="logo"><img src="../../" alt="logo-icon"></img>
                        </a>
                    </div>
                    {/* <!-- //logo end --> */}

                    <div className="sidebar-menu-inner">

                        {/* <!-- sidebar nav start --> */}
                        <div className="nav nav-pills nav-stacked custom-nav">
                            <li><a href="index.html"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
                            </li>
                            <li><a href="cards.html"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
                            <li><a href="pricing.html"><i className="fa fa-table"></i> <span>Pricing tables</span></a></li>
                            <li><a href="blocks.html"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
                            <li><a href="forms.html"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
                        </div>
                        {/* <!-- //sidebar nav end --> */}
                        {/* <!-- toggle button start --> */}
                        <a className="toggle-btn" onclick="toggleMenu()">
                            <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                            <i className="fa fa-angle-double-right menu-collapsed__right"></i>
                        </a>
                        {/* <!-- //toggle button end --> */}
                    </div>
                </div>
                </section>
                </body>
        </>
    )
}

export default Menu