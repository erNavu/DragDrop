import { BaseNode } from '../components/BaseNode';
import { Position } from 'reactflow';

export const Node1 = (props) => {
    const handles = [
        { type: 'source', position: Position.Right, id: 'output1' },
        { type: 'target', position: Position.Left, id: 'input1' }
    ];
    return (
        <BaseNode {...props} type="Node1" handles={handles}>
            <div>
                <span>{props?.id.replace('Node1-', 'Node1 component_')}</span>
            </div>
        </BaseNode>
    );
};

export const Node2 = (props) => {
    const handles = [
        { type: 'source', position: Position.Right, id: 'output1' },
        { type: 'target', position: Position.Left, id: 'input1' }
    ];
    return (
        <BaseNode {...props} type="Node2" handles={handles}>
            <div>
                <span>{props?.id.replace('Node2-', 'Node2 component_')}</span>
            </div>
        </BaseNode>
    );
};
export const Node3 = (props) => {
    const handles = [
        { type: 'source', position: Position.Right, id: 'output1' },
        { type: 'target', position: Position.Left, id: 'input1' }
    ];
    return (
        <BaseNode {...props} type="Node3" handles={handles}>
            <div>
                <span>{props?.id.replace('Node3-', 'Node3 component_')}</span>
            </div>
        </BaseNode>
    );
};

export const Node4 = (props) => {
    const handles = [
        { type: 'source', position: Position.Right, id: 'output1' },
        { type: 'target', position: Position.Left, id: 'input1' }
    ];
    return (
        <BaseNode {...props} type="Node4" handles={handles}>
            <div>
                <span>{props?.id.replace('Node4-', 'Node4 component_')}</span>
            </div>
        </BaseNode>
    );
};

export const Node5 = (props) => {
    const handles = [
        { type: 'source', position: Position.Right, id: 'output1' },
        { type: 'target', position: Position.Left, id: 'input1' }
    ];
    return (
        <BaseNode {...props} type="Node5" handles={handles}>
            <div>
                <span>{props?.id.replace('Node5-', 'Node5 component_')}</span>
            </div>
        </BaseNode>
    );
};

export const Node6 = (props) => {
    const handles = [
        { type: 'source', position: Position.Right, id: 'output1' },
        { type: 'target', position: Position.Left, id: 'input1' }
    ];
    return (
        <BaseNode {...props} type="Node6" handles={handles}>
            <div>
                <span>{props?.id.replace('Node6-', 'Node6 component_')}</span>
            </div>
        </BaseNode>
    );
};

export const Node7 = (props) => {
    const handles = [
        { type: 'source', position: Position.Right, id: 'output1' },
        { type: 'target', position: Position.Left, id: 'input1' }
    ];
    return (
        <BaseNode {...props} type="Node6" handles={handles}>
            <div>
                <span>{props?.id.replace('Node7-', 'Node7 component_')}</span>
            </div>
        </BaseNode>
    );
};

