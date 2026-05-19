import { useState, useRef, useMemo, useCallback, memo, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useThrottle } from "./hooks/useThrottle";

// Generate 2000 mock users
const generateUsers = () => {
  const firstNames = [
    "John",
    "Jane",
    "Michael",
    "Sarah",
    "David",
    "Emma",
    "James",
    "Olivia",
    "Robert",
    "Ava",
    "William",
    "Sophia",
    "Richard",
    "Isabella",
    "Joseph",
    "Mia",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
  ];

  return Array.from({ length: 2000 }, (_, i) => ({
    id: i + 1,
    name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}${i}`,
    email: `user${i + 1}@example.com`,
    department: ["Engineering", "Sales", "HR", "Marketing", "Finance"][i % 5],
  }));
};

// Memoized user item component
const UserItem = memo(({ user }) => (
  <div className="border rounded p-2 mb-2 hover:bg-gray-100">
    <div className="font-semibold">{user.name}</div>
    <div className="text-sm text-gray-600">{user.email}</div>
    <div className="text-xs text-gray-500">{user.department}</div>
  </div>
));

UserItem.displayName = "UserItem";

const Searchbox = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);
  const [users] = useState(generateUsers());
  const [scrollPos, setScrollPos] = useState(0);

  // Throttle scroll position updates
  const throttledScrollPos = useThrottle(scrollPos, 200);

  // Compute filtered users directly during render with useMemo
  // NO derived state - filtering happens here, not stored
  const filteredUsers = useMemo(() => {
    if (!debouncedQuery.trim()) return users;

    const lowerQuery = debouncedQuery.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerQuery) ||
        user.email.toLowerCase().includes(lowerQuery) ||
        user.department.toLowerCase().includes(lowerQuery),
    );
  }, [debouncedQuery, users]);

  // Memoized handler to prevent unnecessary re-renders
  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const scrollContent = useRef();

  // Track scroll position
  const handleScroll = useCallback((e) => {
    setScrollPos(e.target.scrollTop);
    console.log(`${e.target.scrollTop}px`);
  }, []);

  // Attach scroll listener
  useEffect(() => {
    const container = scrollContent.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="mt-4 p-4 max-w-2xl">
      <h3 className="text-2xl font-bold mb-4">
        Search Users ({filteredUsers.length} of {users.length})
      </h3>

      <input
        type="text"
        value={query}
        placeholder="Search by name, email, or department..."
        onChange={handleSearch}
        className="w-full border rounded p-2 mb-4 text-lg"
      />

      <div className="mb-2 text-sm text-gray-600">
        Scroll Position:{" "}
        <span className="font-semibold">{throttledScrollPos}px</span>
      </div>

      <div
        ref={scrollContent}
        className="max-h-96 overflow-y-auto border rounded p-2 bg-gray-50"
      >
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserItem key={user.id} user={user} />)
        ) : (
          <div className="p-4 text-center text-gray-500">No users found</div>
        )}
      </div>
    </div>
  );
};

export default Searchbox;
