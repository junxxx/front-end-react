export function Card({ title, command }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(command).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono shadow-lg border border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-500 uppercase">{title}</span>
        <button
          onClick={handleCopy}
          className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-white"
        >
          Copy
        </button>
      </div>
      <pre className="text-sm overflow-x-auto">
        <code>{command}</code>
      </pre>
    </div>
  );
}
