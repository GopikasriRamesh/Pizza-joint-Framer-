import { Link } from 'react-router-dom';
import React from 'react';
import { motion, useCycle, usedCycle} from 'framer-motion';

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
    },
    animateone:{
        y:[0,-40],
        x:0,
        transition:{
        y:{
            yoyo:Infinity,
            duration:0.25,
            ease:"easeOut"
        }
        }
    }
}

const Loader=()=>{
    const [animation,cycleanimation]=useCycle("animate","animationone")
    return(
    <>
    <motion.div className="Loader"
    variants={loadvar}
    animate={animation}
    >

    </motion.div>
    <div onClick={()=>cycleanimation()}>Cycle Loader</div>
    </>
    )
}

export default Loader