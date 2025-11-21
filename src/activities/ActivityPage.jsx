import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteActivity, getActivities } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      const all = await getActivities();
      const found = all.find((a) => a.id === Number(id));
      setActivity(found);
    }
    load();
  }, [id]);

  const tryDelete = async () => {
    setError(null);
    try {
      await deleteActivity(token, id);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!activity) return <p>Loading...</p>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>Created by: {activity.creatorName}</p>

      {token && activity.creatorId === token.userId && (
        <button onClick={tryDelete}>Delete Activity</button>
      )}

      {error && <p role="alert">{error}</p>}
    </>
  );
}
