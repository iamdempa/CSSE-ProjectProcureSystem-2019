import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import SectionContainer from "./pages/DropdownPage";

class App extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className="flyout">
          <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <Logo style={{ height: "2.5rem", width: "2.5rem" }} />
              <strong className="align-middle">Procurement System</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/css"
                  >
                    <strong>CSS</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/components"
                  >
                    <strong>Components</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/advanced"
                  >
                    <strong>Advanced</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/navigation"
                  >
                    <strong>Navigation</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/forms"
                  >
                    <strong>Forms</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/tables"
                  >
                    <strong>Tables</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/modals"
                  >
                    <strong>Modals</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/addons"
                  >
                    <strong>Addons</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/banuka"
                  >
                    <strong>Banuka</strong>
                  </MDBNavLink>
                </MDBNavItem>



                <MDBDropdown>
                  <MDBDropdownToggle caret color="primary">
                  Vihanga
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem className="success-color-dark">
                      <MDBNavItem >
                      <MDBNavLink
                          onClick={this.closeCollapse("mainNavbarCollapse")}
                          to="/orders/addorders"
                      >
                       <strong>Vihanga</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    </MDBDropdownItem>

                    <MDBDropdownItem className="success-color-dark">
                      <MDBNavItem>
                      <MDBNavLink
                          onClick={this.closeCollapse("mainNavbarCollapse")}
                          to="/edit/:id"
                      >
                        <strong>Edit Orders</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    </MDBDropdownItem>

                    <MDBDropdownItem className="success-color-dark">
                      <MDBNavItem>
                        <MDBNavLink
                            onClick={this.closeCollapse("mainNavbarCollapse")}
                            to="/index"
                        >
                          <strong>View Orders</strong>
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBDropdownItem>

                    <MDBDropdownItem className="success-color-dark">
                      <MDBNavItem>
                        <MDBNavLink
                            onClick={this.closeCollapse("mainNavbarCollapse")}
                            to="/orders/all"
                        >
                          <strong>View All Orders</strong>
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBDropdownItem>


                  </MDBDropdownMenu>
                </MDBDropdown>


                <MDBNavItem>
                  <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/v1"
                  >
                    <strong>Development</strong>
                  </MDBNavLink>
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <MDBFooter color="indigo">
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright:
              Procurement System | Contributors Asiri, Vihaga, Jananath and Chinthaka
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
