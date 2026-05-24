export default function Light() {
  console.log("[Light] rendered");

  return (
    <div className="p-10">
      <h2>Light component</h2>
      <p>This component is small and always included in the initial bundle.</p>
    </div>
  );
}
