import { Handle } from 'reactflow';
import '../index.css';

export const BaseNode = ({ id, type, handles, children }) => {

    return (
        <div className='baseNode' >
            {handles.map((handle, index) => (
                <Handle
                    key={index}
                    type={handle.type}
                    position={handle.position}
                    id={`${id}-${handle.id}`}
                    style={handle.style}
                />
            ))}
            <div className="type_heading">
                <span>{type}</span>
            </div>
            <div className='type_body'>
                {children}
            </div>
        </div>
    );
};