export default function CarCard({ car }: any) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      transition: "0.3s",
      cursor: "pointer"
    }}>
      <img
        src="https://via.placeholder.com/300x200"
        style={{ width: "100%" }}
      />

      <div style={{ padding: "15px" }}>
        <h4>{car.name}</h4>
        <p style={{ color: "red", fontWeight: "bold" }}>
          {car.price}
        </p>

        <button style={{
          background: "#000",
          color: "#fff",
          padding: "8px 15px",
          borderRadius: "6px",
          border: "none"
        }}>
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}