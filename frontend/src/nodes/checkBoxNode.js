import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const CheckBoxNode = (props) => {
    const [checkboxes, setCheckboxes] = useState({
        workDone: props?.data.workDone || false,
        goingForWalk: props?.data.goingForWalk || false,
    });

    const handleCheckboxChange = (label) => {
        setCheckboxes((prevCheckboxes) => ({ ...prevCheckboxes, [label]: !prevCheckboxes[label] }));
    }

    const handles = [
        { type: 'source', position: Position.Right, id: 'output1' },
        { type: 'target', position: Position.Left, id: 'input1' }
    ];

    return (
        <BaseNode {...props} type="CheckBox" handles={handles}>
            <div>
                <div className='sub_heading' >{props?.id.replace('checkBoxNode-', 'CheckBox_')}</div>
                {['HTML', 'CSS5'].map((label, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <span>{label} :</span>
                        <input
                            type="checkbox"
                            checked={checkboxes[label.toLowerCase().replace(' ', '')]}
                            onChange={() => handleCheckboxChange(label.toLowerCase().replace(' ', ''))}
                        />
                    </div>
                ))}
            </div>
        </BaseNode >
    );
};