import React from "react";
import ReactFlow, { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { MiniMap, Controls, Background } from "reactflow";

const CustomNode = ({ data, id }) => {
    let backgroundColor = "#fff";
  
    if (data.type === "input") {
      backgroundColor = "blue";
    } else if (data.type === "decision") {
      backgroundColor = "yellow";
    } else if (data.type === "output") {
      backgroundColor = "orange";
    } else {
      backgroundColor = 'lightgreen'; 
    }
  
    return (
      <div style={{ padding: 10, borderRadius: 5, backgroundColor }}>
        <strong>{data.label}</strong>
        <Handle type="source" position={Position.Bottom} id="a" style={{ background: "red" }} />
        <Handle type="target" position={Position.Top} id="b" style={{ background: "red" }} />
      </div>
    );
  };
  
  const nodeTypes = {
    custom: CustomNode,
  };

const nodes = [
  { id: "1", position: { x: 250, y: 0 }, data: { label: "User Uploads a Document", type: "input" }, type: "custom" },
  { id: "2", position: { x: 250, y: 100 }, data: { label: "AI Processes the Document", type: "default" }, type: "custom" },
  { id: "3", position: { x: 250, y: 200 }, data: { label: "Extract Key Legal Issues", type: "decision" }, type: "custom" },
  { id: "4a", position: { x: 100, y: 300 }, data: { label: "Provide Legal Advice", type: "output" }, type: "custom" },
  { id: "4b", position: { x: 400, y: 300 }, data: { label: "Request More Info", type: "default" }, type: "custom" },
  { id: "5", position: { x: 250, y: 400 }, data: { label: "User Accepts or Requests Clarification", type: "output" }, type: "custom" }
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
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
