import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const OutputNode = (props) => {

    const [currName, setCurrName] = useState(props?.data?.outputName || props?.id.replace('customOutput-', 'output_'));
    const [outputType, setOutputType] = useState(props?.data.outputType || 'Text');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setOutputType(e.target.value);
    };

    const handles = [
        { type: 'target', position: Position.Left, id: 'value' }
    ];

    return (
        <BaseNode {...props} type="Output" handles={handles}>
            <div>
                <input
                    type="text"
                    value={currName}
                    onChange={handleNameChange}
                />
                <select value={outputType} onChange={handleTypeChange}>
                    <option value="Text">Text</option>
                    <option value="File">Image</option>
                </select>
            </div>
        </BaseNode>
    );
};