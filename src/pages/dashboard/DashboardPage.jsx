import { useUser } from "../../providers/AuthProvider";
import { auth } from "../../utils/firebase";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
}
