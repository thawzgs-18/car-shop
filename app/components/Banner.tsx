export default function Banner() {
  return (
    <div style={{
      margin: "20px",
      borderRadius: "12px",
      overflow: "hidden"
    }}>
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
    </div>
  );
}