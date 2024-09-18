import React from 'react';
import { useStore } from './store';
import "./index.css";

const Submission = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);
    const resetStore = useStore((state) => state.resetStore);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });
            const data = await response.json();
            alert(`Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
        } catch (error) {
            console.error(error);
        }
    }

    const handleReset = () => {
        resetStore();
    }

    return (
        <div className="submit_container">
            <button
                onClick={handleSubmit}
                disabled={!(nodes.length || edges.length)}
                type="submit">Submit</button>
            <button
                onClick={handleReset}
                disabled={!(nodes.length || edges.length)}
                type="submit">Reset</button>
        </div>
    );
}

export default Submission