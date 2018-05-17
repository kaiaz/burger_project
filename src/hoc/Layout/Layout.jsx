import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux/Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import styles from './Layout.css';

class Layout extends Component  {
        state = {
                showSideDrawer: false
        };

        sideDrawerClosedHandler  =() => {
                this.setState({showSideDrawer: false})
        };

        sideDrawerToggleHandler  =() => {
                this.setState((prevState) => {
                  return {showSideDrawer: !prevState.showSideDrawer}
                });
        };

        render () {
           return (
               <Aux>
                   <Toolbar
                       isAuth={this.props.isAuthenticated}
                       drawerToggleClicked={this.sideDrawerToggleHandler}
                   />
                   <SideDrawer
                       isAuth={this.props.isAuthenticated}
                       open =  {this.state.showSideDrawer}
                       closed = {this.sideDrawerClosedHandler}
                   />
                   <div>Toolbar, SideDrawer, Backdrop</div>
                   <main className={styles.Content}>
                       {this.props.children}
                   </main>
               </Aux>
           )
        }
}

const mapStateToProps = state => {
    return {
         isAuthenticated: state.auth.token !== null
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         // methodName: (n) => dispatch({type: ACTION, payload: n})
//     };
// };

export default connect(mapStateToProps)(Layout);



