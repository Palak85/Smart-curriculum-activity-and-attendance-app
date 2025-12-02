import { useState } from "react";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Priya Singh", subject: "Mathematics", class: "Class 1" },
    { id: 2, name: "Rajesh Kumar", subject: "English", class: "Class 2" },
  ]);

  const [formData, setFormData] = useState({ name: "", subject: "", class: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addTeacher = () => {
    if (!formData.name || !formData.subject || !formData.class) return;

    const newTeacher = {
      id: teachers.length + 1,
      name: formData.name,
      subject: formData.subject,
      class: formData.class,
    };

    setTeachers([...teachers, newTeacher]);
    setFormData({ name: "", subject: "", class: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teachers Management</h1>

      {/* Add Teacher Form */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 max-w-md">
        <h2 className="text-xl font-semibold mb-3">Add New Teacher</h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Teacher Name"
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject (e.g., Mathematics)"
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          name="class"
          value={formData.class}
          onChange={handleChange}
          placeholder="Class (e.g., Class 1)"
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <button
          onClick={addTeacher}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Add Teacher
        </button>
      </div>

      {/* Teachers Table */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Teachers List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Class</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{t.id}</td>
                <td className="p-2">{t.name}</td>
                <td className="p-2">{t.subject}</td>
                <td className="p-2">{t.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
