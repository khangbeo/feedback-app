import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const res = await fetch(`${API_BASE_URL}/feedback?_sort=id&order=desc`);
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };
  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // update feedback item
  const updateFeedback = async (id, updatedItem) => {
    const res = await fetch(`${API_BASE_URL}/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await res.json();
    setFeedback(feedback.map((item) => (item.id === id ? data : item)));
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`${API_BASE_URL}/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const res = await fetch(${`${API_BASE_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    setFeedback([data, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
