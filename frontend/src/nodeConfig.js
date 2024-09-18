import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { CheckBoxNode } from './nodes/checkBoxNode';
import { Node1, Node2, Node3, Node4, Node5, Node6, Node7 } from './nodes/CustomNodes';

export const NODE_CONFIG = [
    { type: 'customInput', label: 'Input', component: InputNode },
    { type: 'llm', label: 'LLM', component: LLMNode },
    { type: 'customOutput', label: 'Output', component: OutputNode },
    { type: 'text', label: 'Text', component: TextNode },
    { type: 'checkBoxNode', label: 'CheckBox', component: CheckBoxNode },
    { type: 'Node1', label: 'Node 1', component: Node1 },
    { type: 'Node2', label: 'Node 2', component: Node2 },
    { type: 'Node3', label: 'Node 3', component: Node3 },
    { type: 'Node4', label: 'Node 4', component: Node4 },
    { type: 'Node5', label: 'Node 5', component: Node5 },
    { type: 'Node6', label: 'Node 6', component: Node6 },
    { type: 'Node7', label: 'Node 7', component: Node7 },
];

export const generateNodeTypes = (config) => {
    const nodeTypes = {};
    config.forEach((node) => {
        nodeTypes[node.type] = node.component;
    });
    return nodeTypes;
};