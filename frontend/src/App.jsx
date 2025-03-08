import React, { useEffect, useState } from "react";
import {
  getActions,
  addAction,
  updateAction,
  deleteAction,
} from "./services/api";
import { Leaf, Calendar, Trophy, Pencil, Trash2, Plus } from "lucide-react";
import "./App.css";

function App() {
  const [actions, setActions] = useState([]);
  const [action, setAction] = useState("");
  const [date, setDate] = useState("");
  const [points, setPoints] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchActions();
  }, []);

  const fetchActions = async () => {
    try {
      const response = await getActions();
      setActions(response.data);
    } catch (error) {
      console.error("Error fetching actions:", error);
    }
  };

  const handleAdd = async () => {
    const newAction = { action, date, points: parseInt(points) };
    try {
      if (editId) {
        await updateAction(editId, newAction);
        setEditId(null);
      } else {
        await addAction(newAction);
      }
      fetchActions();
      setAction("");
      setDate("");
      setPoints("");
    } catch (error) {
      console.error("Error adding/updating action:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAction(id);
      fetchActions();
    } catch (error) {
      console.error("Error deleting action:", error);
    }
  };

  const handleEdit = (act) => {
    setEditId(act.id);
    setAction(act.action);
    setDate(act.date);
    setPoints(act.points);
  };

  const totalPoints = actions.reduce((sum, act) => sum + act.points, 0);

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="header">
          <div className="header-title">
            <Leaf className="icon" />
            <h1 className="title">Sustainability Actions</h1>
          </div>
          <div className="points-card">
            <div className="points-display">
              <Trophy className="icon trophy" />
              <span className="points-text">Total Points: {totalPoints}</span>
            </div>
          </div>
        </div>

        <div className="form-container">
          <h2 className="form-title">
            {editId ? "Update Action" : "Add New Action"}
          </h2>
          <div className="form-fields">
            <div className="input-group">
              <Leaf className="input-icon" />
              <input
                type="text"
                placeholder="Enter your sustainable action"
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="input-group">
              <Calendar className="input-icon" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="input-group">
              <Trophy className="input-icon" />
              <input
                type="number"
                placeholder="Points"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                className="form-input"
              />
            </div>
            <button onClick={handleAdd} className="submit-button">
              {editId ? (
                <Pencil className="button-icon" />
              ) : (
                <Plus className="button-icon" />
              )}
              {editId ? "Update Action" : "Add Action"}
            </button>
          </div>
        </div>

        <div className="table-container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Date</th>
                  <th>Points</th>
                  <th className="actions-header">Actions</th>
                </tr>
              </thead>
              <tbody>
                {actions.map((act) => (
                  <tr key={act.id}>
                    <td>
                      <div className="action-cell">
                        <Leaf className="icon leaf" />
                        <span>{act.action}</span>
                      </div>
                    </td>
                    <td>{act.date}</td>
                    <td>
                      <span className="points-badge">
                        <Trophy className="icon small" />
                        {act.points}
                      </span>
                    </td>
                    <td className="actions-cell">
                      <button
                        onClick={() => handleEdit(act)}
                        className="edit-button"
                      >
                        <Pencil className="icon" />
                      </button>
                      <button
                        onClick={() => handleDelete(act.id)}
                        className="delete-button"
                      >
                        <Trash2 className="icon" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
