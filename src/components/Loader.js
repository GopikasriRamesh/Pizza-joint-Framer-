import { Link } from 'react-router-dom';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadvar={
    animate:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:'easeOut'
            }
        }
    }
}

const Loader=()=>{
    return(
    <>
    <motion.div className="Loader"
    variants={loadvar}
    animate="animate"
    >

    </motion.div>
    </>
    )
}

export default Loader