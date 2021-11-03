import React from 'react'
import { Row, Container, Nav, Card } from 'react-bootstrap'
<link rel="stylesheet" href="../assets/css/style.css"></link>


function Blocks(props) {

    return (
        <>
            <div className="main-content">

                {/* <!-- content --> */}
                <Container className="container-fluid content-top-gap">

                    {/* <!-- breadcrumbs --> */}
                    <Nav aria-label="breadcrumb" className="mb-4">
                        <ol className="breadcrumb my-breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Content Blocks</li>
                        </ol>
                    </Nav>
                    {/* <!-- //breadcrumbs --> */}

                    {/* <!-- card heading --> */}
                    <div className="cards__heading">
                        <h3>Content Blocks</h3>
                    </div>
                    {/* <!-- //card heading --> */}

                    {/* <!-- content block style 1--> */}
                    <Card className="card card_border p-lg-5 p-3 mb-4">
                        <div className="card-body py-3 p-0">
                            <Row>
                                <div className="col-lg-6 align-self pr-lg-4">
                                    <h3 className="block__title mb-lg-4">About Content Block</h3>
                                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                    neque sunt labore veritatis. </p>
                                    <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                    neque sunt
                                    praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                                    praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                                    <a href="#read" className="btn btn-style btn-primary"> Read More</a>
                                </div>
                                <div className="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
                                    <img src="assets/images/template2.jpg" alt="" className="img-fluid rounded" />
                                </div>
                            </Row>
                        </div>
                    </Card>
            

            {/* <!-- //content block style 1--> */}

            {/* <!-- content block style 2--> */}
            <div className="card card_border p-lg-5 p-3 mb-4">
                <div className="card-body py-3 p-0">
                    <Row>
                        <div className="col-lg-6 pr-lg-4">
                            <img src="../assets/images/template1.jpg" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-6 align-self pl-lg-4 mt-lg-0 mt-4">
                            <h3 className="block__title mb-lg-4">Content Block with 2 buttons</h3>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti neque
                            sunt
                            praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                            praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                            <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                            neque sunt labore veritatis.</p>
                            <a href="#read" className="btn btn-style btn-primary mr-2"> Read More</a>
                            <a href="#more" className="btn btn-style border-btn"> Contact Us</a>
                        </div>
                    </Row>
                </div>
                </div>
                </Container>
            </div>
        </>
    )
}

export default Blocks