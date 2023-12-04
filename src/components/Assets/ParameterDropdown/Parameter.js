import './Parameter.css';

const Parameter = () => {
    return(
        <div className='dropdown'>
            <div className='dropdown-btn'>
                <p>Parameter</p>
            <div className='dropdown-arrow'></div>
            </div>

            <div className='dropdown-content'>
                <div className='dropdown-item'>Temprature</div>
                <div className='dropdown-item'>Ph Level</div>
                <div className='dropdown-item'>Amonia</div>
                <div className='dropdown-item'>Dissolved O2</div>
            </div>
        </div>
    );
}
export default Parameter;