import React from "react";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";
import { MiniMap, Controls, Background } from "reactflow";

const nodes = [
  { id: "1", position: { x: 250, y: 0 }, data: { label: "User Uploads a Document" }, type: "input" },
  { id: "2", position: { x: 250, y: 100 }, data: { label: "AI Processes the Document" } },
  { id: "3", position: { x: 250, y: 200 }, data: { label: "Extract Key Legal Issues" } },
  { id: "4a", position: { x: 100, y: 300 }, data: { label: "Provide Legal Advice" }, type: "output" },
  { id: "4b", position: { x: 400, y: 300 }, data: { label: "Request More Info" } },
  { id: "5", position: { x: 250, y: 400 }, data: { label: "User Accepts or Requests Clarification" }, type: "output" }
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4a", source: "3", target: "4a", label: "Issues Found" },
  { id: "e3-4b", source: "3", target: "4b", label: "No Issues" },
  { id: "e5b-5", source: "4b", target: "5" }
];

const FlowChart = () => {
  return (
    <div style={{ height: 800 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
