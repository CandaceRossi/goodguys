import React, { Component } from "react";
import classnames from "classnames";
import logo4 from "../images/logo4.png"


export default class TopNavComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <div>
           
                <nav className={classnames({
                    "topNav--hidden": !this.state.visible
                }, "topNav")}>
                 
                    <div className="navsort">
                      <a href="/" className="snortnav">
                           <img className="logoimg"  src={logo4} alt="logo"/>
                             </a>
                              <div className="spacer" />
                        {/* <p>Sign Up For Our Newsletter</p> */}
                        <p>Call (773)386-6868 </p>
                        <div><p>Schedule Now!</p></div>
                    </div>
                </nav>
            </div>
        );
    }
}

