import React from 'react'
import "./Feature.css"

function FeaturesPage() {
  return (
    <div className='feature-container'>

      <div className='feature-content'><p> FEATURES</p></div>
      <div className='feature-box'>
        <div >

          <div className='feature-icon'>
            <img src="https://fitnessfactorymaine.com/wp-content/uploads/2019/01/weightlifter-silhouette-100x100.png" alt="" />
            <h3>Weight Training</h3>
          </div>
          <p>From bodybuilding to powerlifting and everything in between, the Fitness Factory has the equipment to help you reach your goals. With dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2 competition benches, and a variety of plate loaded and pin loaded machines, we have everything you need.</p>
        </div>

        <div>
          <div className='feature-icon'>
            <img src="https://fitnessfactorymaine.com/wp-content/uploads/2019/01/exercise-100x100.png" alt="" />
            <h3>General Fitness</h3>
            </div>
          <p>If your goals are to improve your overall health and wellness, we have everything you need.  We have cardio equipment spanning two floors including 8 stepmills, 15+ treadmills, row machines, exercise bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s Ladder. In addition to cardio equipment, we have stretching areas with mats, foam rollers, bands, light weights, and much more.</p>
        </div>

        <div>
          <div className='feature-icon'>
          <img src="https://fitnessfactorymaine.com/wp-content/uploads/2019/01/weightlifting-100x100.png" alt="" />
            <h3>Functional Training</h3>
            </div>
          <p>With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, squat racks, and deadlift platforms our functional training room has all the equipment you need to take your training to the next level.</p>
        </div>

      </div>
    </div>
  )
}

export default FeaturesPage