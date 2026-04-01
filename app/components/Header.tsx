export default function Header() {
  return (
    <header style={{
      background: "#111",
      color: "#fff",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>🚗 OTO SHOP</h2>

      <nav style={{ display: "flex", gap: "25px" }}>
        <span>Trang chủ</span>
        <span>Mua xe</span>
        <span>Bán xe</span>
        <span>Tin tức</span>
      </nav>
    </header>
  );
}