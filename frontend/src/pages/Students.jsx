import { useState } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Sharma", class: "Class 1", section: "A" },
    { id: 2, name: "Riya Verma", class: "Class 2", section: "B" },
  ]);

  const [formData, setFormData] = useState({ name: "", class: "", section: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addStudent = () => {
    if (!formData.name || !formData.class || !formData.section) return;

    const newStudent = {
      id: students.length + 1,
      name: formData.name,
      class: formData.class,
      section: formData.section,
    };

    setStudents([...students, newStudent]);
    setFormData({ name: "", class: "", section: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Students Management</h1>

      {/* Add Student Form */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 max-w-md">
        <h2 className="text-xl font-semibold mb-3">Add New Student</h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Student Name"
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          name="class"
          value={formData.class}
          onChange={handleChange}
          placeholder="Class (e.g., Class 1)"
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          name="section"
          value={formData.section}
          onChange={handleChange}
          placeholder="Section (e.g., A)"
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <button
          onClick={addStudent}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Add Student
        </button>
      </div>

      {/* Students Table */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Students List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Class</th>
              <th className="p-2">Section</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{s.id}</td>
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.class}</td>
                <td className="p-2">{s.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
