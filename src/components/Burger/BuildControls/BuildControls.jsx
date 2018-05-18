import React from 'react';

import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
];




const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map( (ctrl) => {
          return  <BuildControl
              key={ctrl.label}
              label={ctrl.label}
              added={() => props.ingredientAdded(ctrl.type)}
              remove = {() => props.ingredientRemove(ctrl.type)}
              disabled = {props.disabled[ctrl.type]}
          />
        })}
        <button
            className={styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >
            {props.isAuth ? 'Order Now' : 'Signup to Order'}
        </button>
    </div>
);

export default buildControls;