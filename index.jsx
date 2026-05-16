import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { Card } from "./components/card.jsx";
import { initialCommands } from "./src/data.js";

const App = () => {
  const [commands, setCommands] = useState(initialCommands);
  const [showForm, setShowForm] = useState(false);
  const [newCmd, setNewCmd] = useState({ title: "", command: "" });

  const handleSave = () => {
    if (newCmd.title && newCmd.command) {
      setCommands([...commands, { id: Date.now(), ...newCmd }]);
      setNewCmd({ title: "", command: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 p-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Command Cheat Sheet</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white"
        >
          {showForm ? "Cancel" : "New"}
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-700 p-6 rounded-lg mb-8">
          <input
            placeholder="Title"
            className="block w-full mb-2 p-2 rounded bg-gray-600 text-white"
            value={newCmd.title}
            onChange={(e) => setNewCmd({ ...newCmd, title: e.target.value })}
          />
          <textarea
            placeholder="Command"
            className="block w-full mb-2 p-2 rounded bg-gray-600 text-white"
            value={newCmd.command}
            onChange={(e) => setNewCmd({ ...newCmd, command: e.target.value })}
          />
          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-white"
          >
            Save
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {commands.map((cmd) => (
          <Card key={cmd.id} title={cmd.title} command={cmd.command} />
        ))}
      </div>
    </div>
  );
};

ReactDom.createRoot(document.getElementById("root")).render(<App />);
