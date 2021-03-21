import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
// import Breadcrumb from "../../../containers/navs/Breadcrumb";
 
export default class Start extends Component {
    render() {
        return (
            <Fragment>
            <Row>

            <div class="row w-100">
                <div class="col-12">

                    <h1>Dashboard</h1>
                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            {/* <li class="breadcrumb-item">
                                <a href="#">Library</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li> */}
                        </ol>
                    </nav>
                    <div class="separator mb-5"></div>
                </div>
            </div>


         
              


              <Colxx xxs="12">
                {/* <Breadcrumb heading="menu.start" match={this.props.match} />
                <Separator className="mb-5" /> */}
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <p>
                  {/* <IntlMessages id="menu.start"/> */}
                  
                  </p>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
