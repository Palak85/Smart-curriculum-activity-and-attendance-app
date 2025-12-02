import React, { useState } from 'react'
import { Plus, Edit, Trash } from 'lucide-react'

// Classes & Sections Page Component
// Tailwind + React (Single file, easy to plug into your dashboard)

export default function ClassesSections() {
  const [classes, setClasses] = useState([
    { id: 1, className: "Class 1", sections: ["A", "B"] },
    { id: 2, className: "Class 2", sections: ["A"] },
    { id: 3, className: "Class 3", sections: ["A", "B", "C"] },
  ]);

  const [newClass, setNewClass] = useState("");
  const [newSection, setNewSection] = useState("");

  const addClass = () => {
    if (!newClass.trim()) return;
    setClasses([...classes, { id: Date.now(), className: newClass, sections: [] }]);
    setNewClass("");
  };

  const addSection = (classId) => {
    if (!newSection.trim()) return;
    setClasses(classes.map(cls =>
      cls.id === classId
        ? { ...cls, sections: [...cls.sections, newSection] }
        : cls
    ));
    setNewSection("");
  };

  const deleteSection = (classId, sec) => {
    setClasses(classes.map(cls =>
      cls.id === classId
        ? { ...cls, sections: cls.sections.filter(s => s !== sec) }
        : cls
    ));
  };

  const deleteClass = (classId) => {
    setClasses(classes.filter(c => c.id !== classId));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Classes & Sections</h2>

      {/* Add Class */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Enter Class Name (e.g. Class 4)"
          className="border px-3 py-2 rounded w-full"
          value={newClass}
          onChange={(e) => setNewClass(e.target.value)}
        />
        <button
          onClick={addClass}
          className="bg-indigo-600 text-white px-4 rounded flex items-center gap-2"
        >
          <Plus size={18} /> Add
        </button>
      </div>

      {/* Class List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cls) => (
          <div key={cls.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">{cls.className}</h3>
              <button
                onClick={() => deleteClass(cls.id)}
                className="text-red-500 hover:bg-red-50 p-2 rounded"
              >
                <Trash size={16} />
              </button>
            </div>

            {/* Existing Sections */}
            <div className="mb-3">
              <p className="text-sm text-gray-500 mb-2">Sections:</p>
              <div className="flex flex-wrap gap-2">
                {cls.sections.map(sec => (
                  <div
                    key={sec}
                    className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {sec}
                    <button
                      onClick={() => deleteSection(cls.id, sec)}
                      className="text-red-500"
                    >
                      <Trash size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Section */}
            <div className="flex gap-2 mt-3">
              <input
                type="text"
                placeholder="Add Section (e.g. D)"
                className="border px-3 py-1 rounded w-full"
                value={newSection}
                onChange={(e) => setNewSection(e.target.value)}
              />
              <button
                onClick={() => addSection(cls.id)}
                className="bg-green-600 text-white px-3 rounded"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
