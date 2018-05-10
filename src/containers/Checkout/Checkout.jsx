import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';

import ContactData from './ContactData/ContactData';
import * as actions from '../../store/actions/index'

class Checkout extends Component {



    checkoutCancelHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        let summary = <Redirect to="/"/>

        const purchasedRedirect = this.props.purchased ? <Redirect to='/'/> : null;

        if ( this.props.ings) {
            summary = (
              <div>
                  {purchasedRedirect}
                  <CheckoutSummary
                      ingredients={this.props.ings}
                      checkoutCancelled={this.checkoutCancelHandler}
                      checkoutContinued={this.checkoutContinuedHandler}
                  />
                  <Route
                      path={this.props.match.path + '/contact-data'}
                      component={ContactData}

                  />
              </div>

            )
        }
        return(
            <div>
                {summary}

            </div>
        );
    }
}





const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};



export default connect(mapStateToProps)(Checkout);