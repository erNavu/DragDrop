import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';
import { Position } from 'reactflow';

export const InputNode = (props) => {

    const [currName, setCurrName] = useState(props?.data?.inputName || props.id.replace('customInput-', 'input_'));
    const [inputType, setInputType] = useState(props?.data.inputType || 'Text');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };


    const handles = [
        { type: 'source', position: Position.Right, id: 'value' }
    ];

    return (
        <BaseNode {...props} type="Input" handles={handles}>
            <div>

                <input
                    type="text"
                    value={currName}
                    onChange={handleNameChange}
                />

                <select value={inputType} onChange={handleTypeChange}>
                    <option value="Text">Text</option>
                    <option value="File">File</option>
                </select>

            </div>
        </BaseNode>
    );
};