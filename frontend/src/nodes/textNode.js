import { useState, useEffect, useRef } from 'react';
import { BaseNode } from '../components/BaseNode';
import { Position } from 'reactflow';

/**
 * 
 * @param {Object} props - Component props
 * @param {string} props.data.text - Initial text value
 * @param {string} props.id - Node ID
 * @returns {JSX.Element} TextNode component
 */
export const TextNode = (props) => {
    const initialValue = props?.data?.text || props?.id.replace('text-', 'text_');
    const [inputValue, setInputValue] = useState(initialValue);
    const [handles, setHandles] = useState([{ type: 'source', position: Position.Right, id: 'output' }]);
    const inputRef = useRef(null);

    useEffect(() => {
        const adjustInputSize = () => {
            if (inputRef.current) {
                const inputElement = inputRef.current;
                inputElement.style.height = 'auto';
                inputElement.style.height = `${inputElement.scrollHeight}px`;
                inputElement.style.width = 'auto';
                inputElement.style.width = `${inputElement.scrollWidth}px`;
            }
        }
        adjustInputSize()
    }, [inputValue]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Find variables in the format {{variable}}
        const variablePattern = /\{\{(\w+)\}\}/g;
        const variables = [...value.matchAll(variablePattern)].map(match => match[1]);

        // Create handles for each variable
        const newHandles = variables.map(variable => ({
            type: 'target',
            position: Position.Left,
            id: `input-${variable}`
        }));

        // Add the default output handle
        newHandles.push({ type: 'source', position: Position.Right, id: 'output' });

        setHandles(newHandles);
    };

    return (
        <BaseNode {...props} type="Text" handles={handles}>
            <div>
                <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ resize: 'none', overflow: 'hidden' }}
                />
            </div>
        </BaseNode>
    );
};