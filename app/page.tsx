export default function Home() {
  return (
    <main style={{ fontFamily: "Arial" }}>
      
      {/* HEADER */}
      <header style={{
        background: "#111",
        color: "#fff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2>🚗 CAR SHOP</h2>

        <nav style={{ display: "flex", gap: "20px" }}>
          <span>Trang chủ</span>
          <span>Mua xe</span>
          <span>Bán xe</span>
          <span>Tin tức</span>
        </nav>
      </header>

      {/* SEARCH */}
      <div style={{
        background: "#f5f5f5",
        padding: "20px",
        display: "flex",
        justifyContent: "center"
      }}>
        <input
          placeholder="Tìm xe theo hãng, giá..."
          style={{
            width: "60%",
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* BANNER */}
      <div style={{
        margin: "20px",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </div>

      {/* LAYOUT */}
      <div style={{ display: "flex", padding: "20px" }}>
        
        {/* SIDEBAR */}
        <div style={{ width: "20%" }}>
          <h3>Hãng xe</h3>
          <ul>
            <li>Toyota</li>
            <li>Honda</li>
            <li>BMW</li>
            <li>Mercedes</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div style={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}>
          
          {/* CARD */}
          {[
            { name: "Toyota Camry", price: "1 tỷ" },
            { name: "Honda Civic", price: "800 triệu" },
            { name: "BMW X5", price: "3 tỷ" },
          ].map((car, index) => (
            <div key={index} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px"
            }}>
              <img
                src="https://via.placeholder.com/300"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h4>{car.name}</h4>
              <p>{car.price}</p>
              <button style={{
                background: "black",
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px"
              }}>
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>

      </div>

    </main>
  );
}