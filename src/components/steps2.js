import React from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps2-text04 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps2-text05 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps2-text07 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps2-text08 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps2-text10 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps2-text11 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps2-text13 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps2-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description:
    'Establish project team, define goals, and set up initial project plan',
  step3Description:
    'Test prototypes, validate functionality, and ensure alignment with project objectives',
  step2Title: 'Research and Development',
  step2Description:
    'Conduct joint research activities, develop optical diagnostic solutions with AI support',
  step1Title: 'Project Initiation',
  step3Title: 'Testing and Validation',
  step4Description:
    'Manage public and private capital, allocate resources effectively for project duration',
  step4Title: 'Funding and Resource Allocation',
}

Steps2.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps2
