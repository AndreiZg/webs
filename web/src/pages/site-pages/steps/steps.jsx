import './steps.css';

const Steps = () => {
    return(
        <>
            <div className="steps">
                <div className="title-container">
                    <h1>You left the application, what next?</h1>
                    <h3>The sequence of creating a website and clearly working out the stages is the key to the success of the entire project.</h3>
                </div>
                <div className="steps-container">
                    <div className="step-wrapper">
                        <div className="steps-upper__side">
                            <h1 className='number'>1</h1>
                            <h3>Coordination and development of strategy</h3>
                        </div>
                        <ul className='steps-lower__side'>
                            <li>project analysis</li>
                            <li>commercial offer</li>
                        </ul>
                    </div>
                    <div className="step-wrapper">
                        <div className="steps-upper__side">
                            <h1 className='number'>2</h1>
                            <h3>Start of work. UI/UX Design</h3>
                        </div>
                        <ul className='steps-lower__side'>
                            <li>creation of a site prototype </li>
                            <li>pc version design development</li>
                            <li>adaptation of the mobile version</li>
                            <li>approval of the final version of the design</li>
                        </ul>
                    </div>
                    <div className="step-wrapper">
                        <div className="steps-upper__side">
                            <h1 className='number'>3</h1>
                            <h3>Backend частина</h3>
                        </div>
                        <ul className='steps-lower__side'>
                            <li>html layout with adaptive</li>
                            <li>CMS programming</li>
                            <li>crm integration*</li>
                            <li>connection of payment gateways and payments*</li>
                        </ul>
                    </div>
                    <div className="step-wrapper">
                        <div className="steps-upper__side">
                            <h1 className='number'>4</h1>
                            <h3>project release, support, promotion</h3>
                        </div>
                        <ul className='steps-lower__side'>
                            <li>launch of the project</li>
                            <li>promotion</li>
                            <li>crm integration*</li>
                            <li>support</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Steps;