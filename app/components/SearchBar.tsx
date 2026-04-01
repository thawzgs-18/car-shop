export default function SearchBar() {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <input
        placeholder="Tìm xe theo hãng, giá..."
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "25px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
}