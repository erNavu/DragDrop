import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import Submission from './submission';

function App() {
  return (
    <div style={{ backgroundColor: "#1e0d4c", minHeight: "100vh" }}>
      <PipelineToolbar />
      <PipelineUI />
      <Submission />
    </div >
  );
}

export default App;

