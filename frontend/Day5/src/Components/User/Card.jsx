const Card = () => {
  const cards = [
    {
      imageUrl: "/src/Images/listening.jpg",
      name: "Learn British English through Listening",
      description:
        "Utilise your listening skills to enhance your English Language",
        description:
      "Duration:6hours",
      description:
      "Cost:2000",
      buttonText: "Make Payment ",
      link: "/learn-more",
    },
    {
      imageUrl: "/src/Images/pronunciation.jpg",
      name: "British English Pronunciation",
      description:
        "Learn the pronunciation of basic British English through these 100 phrases",
        description:
      "Duration:3hours",
      description:
      "Cost:5000",
      buttonText: "Make Payment ",
      link: "/learn-more",
    },
    {
      imageUrl: "/src/Images/vbg.jpg",
      name: "Creative Writing in British English",
      description:
        "Learn to write in better English through these learning exercises",
      description:
      "Duration:4hours",
      description:
      "Cost:3000",
      buttonText: "Make Payment ",
    },
    
  ];

  return (
    <div
      className="card-container"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        padding: "50px",
        background:
          "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url('/src/Image/logo.jpg')", // Apply background image here
        backgroundSize: "cover",
        paddingTop: "7rem",
      }}
    >
      {cards.map((card, index) => (
        <a
          key={index}
          href={card.link}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              position: "relative",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "white",
              height: "100%",
            }}
          >
            <img
              src={card.imageUrl}
              alt={card.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                {card.name}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  marginBottom: "20px",
                }}
              >
                {card.description}
              </p>
              <button
                style={{
                  border: "none",
                  color: "black",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  margin: "4px 2px",
                  cursor: "pointer",
                }}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
