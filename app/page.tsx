import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000814, #001d3d)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        <Image
          src="/profile.jpg"
          alt="Nawab"
          width={140}
          height={140}
          style={{
            borderRadius: "50%",
            boxShadow: "0 0 40px #FFD700",
            margin: "0 auto 20px",
            animation: "float 2s ease-in-out infinite",
          }}
        />

        <h1
          style={{
            color: "#FFD700",
            fontSize: "70px",
            fontWeight: "bold",
            lineHeight: "1",
            marginBottom: "20px",
          }}
        >
         EARN WITH <br /> AYUSH
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#ddd",
            marginBottom: "5px",
          }}
        >
          DAILY LIVE SURESHOT
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#fff",
            animation: "float 2s ease-in-out infinite",
          }}
        >
          JOIN TELEGRAM
        </p>

        <a
          href="https://telegram.me/+qoMN0U59qthkOTU1"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "22px 70px",
            borderRadius: "50px",
            background:
              "linear-gradient(to right, #FFD700, #FFF5B7, #A7D8F5)",
            color: "#000",
            fontSize: "22px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 0 40px rgba(255,215,0,0.8)",
          }}
        >
          JOIN TELEGRAM
        </a>

        <p
          style={{
            marginTop: "40px",
            color: "#888",
          }}
        >
          © 2025 @Ayush TG. All rights reserved.
        </p>

        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}</style>
      </div>
    </div>
  );
}