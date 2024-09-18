### **How to run this project**
- You can run the frontend code by navigating to the `/frontend directory` and running
(1) `npm i `and (2) `npm start`.

- You can run the backend code by navigating to the
`/backend directory` and running `uvicorn main:app --reload`.


### 1. **Introduction**

**Objective:** Briefly introduce the project and its purpose.

- **Introduction:** “Welcome!, I’ll demonstrate the enhancements made to our application, including node abstraction, styling improvements, text node logic, and backend integration.”
- **Overview:** “We’ve revamped the node system, applied a unified design, improved text node functionality, and integrated with a FastAPI backend.”

### 2. **Node Abstraction**

**Objective:** Showcase how node abstraction simplifies the creation and management of nodes.

- **Base Node Component:**
  - **Navigate to Code:** Show the implementation of the `BaseNode` component.
  - **Explanation:** “Here’s our base node component that encapsulates common logic and styling. This allows us to manage shared functionality in one place.”

- **Creating Specific Nodes:**
  - **Navigate to Node Files:** Display the new node files that extend the `BaseNode` component.
  - **Explanation:** “These are our specific node types, such as inputs, outputs, and text nodes, each extending from the base node. This approach minimizes code duplication and simplifies maintenance.”

- **Adding New Nodes:**
  - **Demonstration:** Create a few new nodes using the abstraction.
  - **Explanation:** “I’ll now add a new type of node. Notice how quickly and easily we can create nodes by extending the base component.”

### 3. **Styling**

**Objective:** Highlight the unified design and styling applied to the application.

- **Navigate to Styled Components:**
  - **Showcase:** Open different parts of the application to show the applied styles.
  - **Explanation:** “We’ve applied a consistent design across the application. Here’s how the nodes, connections, and overall layout look with the new styling.”

- **Design Choices:**
  - **Highlight Features:** Point out key design elements, like color schemes, fonts, and layout.
  - **Explanation:** “We aimed for a clean, modern look with a cohesive color scheme and responsive design elements.”

### 4. **Text Node Logic**

**Objective:** Demonstrate the enhanced functionality of the text node.

- **Auto-Resizing Text Node:**
  - **Navigate to Text Node:** Show the text node in the application.
  - **Explanation:** “As you can see, the text node automatically resizes based on the amount of text entered, improving readability.”

- **Variable Handling:**
  - **Demonstration:** Enter a variable surrounded by double curly brackets (e.g., `{{input}}`).
  - **Explanation:** “When a variable is entered, a new handle is created on the left side of the node. This allows for dynamic and flexible connections.”

### 5. **Backend Integration**

**Objective:** Showcase how the frontend interacts with the backend and how the application responds.

- **Submit Pipeline:**
  - **Navigate to Submit Feature:** Show the button that sends data to the backend.
  - **Demonstration:** Create a sample pipeline and click the submit button.
  - **Explanation:** “When submitting a pipeline, the frontend sends the nodes and edges to our FastAPI backend for processing.”

- **Backend Response:**
  - **Show Alert:** Display the alert with the number of nodes, edges, and whether the graph is a DAG.
  - **Explanation:** “The backend calculates the number of nodes and edges and checks if the graph is a DAG. This information is then displayed in the alert.”

### 6. **Conclusion**

**Objective:** Summarize the walkthrough and highlight key takeaways.

- **Summary:** “In this walkthrough, we’ve covered the new node abstraction, the updated design, improved text node functionality, and backend integration.”
- **Call to Action:** “Feel free to explore these features further and let us know if you have any questions or feedback.”