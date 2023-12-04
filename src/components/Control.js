import '../components/Style/Control.css';

import React from 'react';
import WaterLevel from './Assets/WaterLevel/Level';
import Table from './Assets/Table/Table';
import Task from './Assets/Task/Task';
// import ArduinoConnection from './Assets/ArduinoComponent/ArduinoConnection';


const Control = () => {
    return (
        <div className='control-container'>
            <div className='water-level'>
                <WaterLevel />
            </div >
            <div className='table-container'>
                <Table />
            </div>
            <div className='action-center'>
                <Task />
            </div>
        </div>
    );
}

export default Control;