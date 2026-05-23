export default function NonVirtualList({ users }) {
  return (
    <div className="h-150 overflow-auto border border-solid border-color-[#ddd]">
      {users.map((user) => (
        //We reuse Item visual, but each receives no style height optimisation
        <div
          key={user.id}
          className="p-0 border-b borer-solid border-color-[#eee]"
        >
          <div className="font-bold">{user.name}</div>
          <div className="text-[12px] text-[#666]">{user.email}</div>
          <div className="text-[12px]">{user.bio}</div>
        </div>
      ))}
    </div>
  );
}
