import React from 'react'
import { Link } from 'react-router-dom'

export default function Information() {
    return (
        <div className='info'>
            <div className='contentbtns'>
                <button><Link to={'/'}>Dashboard</Link></button>
                <button><Link to={'/programs'}>Programs</Link></button>
                <button><Link to={'/nutrition'}>Nutrition</Link></button>
            </div>
            <div className='content'>
                <div className='leftinfo'>
                    <h2>Fitness</h2>
                    <p>
                        Fitness should be something that you adopt into your lifestyle. People who exercise regularly gain a multitude of benefits that can last a lifetime. 
                        Understanding where you currently stand with your fitness and where you want to go will help you choose a direction.
                    </p>
                    <h2>Programs</h2>
                    <p>
                        Whether your goal is to lose weight, improve your health, get in better shape, or all of the above, 
                        the main components to a good exercise program are weight training, cardio, and proper stretching. 
                        A workout program should be based around your goals and abilities.
                    </p>
                    <h2>Nutrition</h2>
                    <p>
                        Calories are the overall energy that a food is going to provide. It is what's going to fuel your body. 
                        Calories are going to be the main factor when it comes to gaining or losing weight.
                    </p>
                    <p>
                        Macronutrients, or Macros, are nutrients your body needs to function. 
                        The three main macros are carbohydrates, protein, and fat.
                        A quick idea of their function is carbs are the main energy source, proteins help build and repair tissues, and fats insulate organs and make up cell membranes. 
                    </p>
                </div>
                <div className='rightinfo'>
                    <h2>Resources</h2>
                    <div>
                        <a href="https://www.omnicalculator.com/health/rmr">Check your Resting Metabloic Rate</a>
                    </div>
                    <div>
                        <a href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates">Find your average target heart rate</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
