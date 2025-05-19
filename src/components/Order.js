import React from 'react';
import { motion } from 'framer-motion';

const contvar = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass:0.4,
      damping:8,
      when:"beforeChildren",
      staggerChildren:0.4
    }
  }
};

const childVar={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}
const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={contvar}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVar}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVar}>
      {pizza.toppings.map(topping => <motion.div 
      variants={childVar}
      key={topping}>{topping}</motion.div>)}
      </motion.div>
    </motion.div>
  );
}

export default Order;
