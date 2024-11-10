// src/Terminal.js
import React, { useState } from "react";
import "./Terminal.css";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to the React Linux Terminal!",
    "Type 'help' for a list of commands.",
  ]);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };

  const processCommand = (command) => {
    let newOutput = [...output];
    newOutput.push(`$ ${command}`);

    switch (command.trim()) {
      case "help":
        newOutput.push("Available commands: help, clear, echo [message]");
        break;
      case "clear":
        newOutput = [];
        break;
      default:
        if (command.startsWith("echo ")) {
          newOutput.push(command.slice(5));
        } else {
          newOutput.push(`Command not found: ${command}`);
        }
    }
    setOutput(newOutput);
  };

  return (
    <div
      className="terminal"
      onClick={() => document.getElementById("terminal-input").focus()}
    >
      <div className="output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="input-line">
        <span className="prompt">$ </span>
        <input
          id="terminal-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
