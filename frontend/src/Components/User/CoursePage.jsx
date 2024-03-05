import React from 'react';

function CoursePage() {
  const certifications = [
    {
      title: 'Web Development Certification',
      image: '/src/Images/vbg.jpg',
      description: 'Become a master in web development with our comprehensive certification program. Learn HTML, CSS, JavaScript, and more.',
      enrolled: '5000+ Enrolled',
    },
    {
      title: 'Data Science Certification',
      image: '/src/Images/vbg.jpg',
      description: 'Unlock the power of data with our data science certification. Learn machine learning, data analysis, and visualization techniques.',
      enrolled: '3000+ Enrolled',
    },
    {
      title: 'Digital Marketing Certification',
      image: '/src/Images/vbg.jpg',
      description: 'Drive business growth with our digital marketing certification. Master SEO, SEM, social media marketing, and more.',
      enrolled: '4000+ Enrolled',
    },
    {
      title: 'Graphic Design Certification',
      image: '/src/Images/vbg.jpg',
      description: 'Unleash your creativity with our graphic design certification. Learn Adobe Photoshop, Illustrator, and InDesign.',
      enrolled: '2500+ Enrolled',
    },
    {
      title: 'Python Programming Certification',
      image: '/src/Images/vbg.jpg',
      description: 'Become proficient in Python programming with our certification program. Learn Python syntax, data structures, and algorithms.',
      enrolled: '6000+ Enrolled',
    },
    {
      title: 'Machine Learning Certification',
      image: '/src/Images/vbg.jpg',
      description: 'Dive into the world of machine learning with our certification program. Learn supervised and unsupervised learning algorithms.',
      enrolled: '3500+ Enrolled',
    },
  ];

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 320px)', // Fixed card size
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '18px',
    color: '#333',
    marginBottom: '5px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.4',
  };

  const enrolledStyle = {
    fontSize: '14px',
    color: '#555',
    fontWeight: 'bold', // Make enrolled text bold
  };

  return (
    <div style={containerStyle}>
      {certifications.map((certification, index) => (
        <div key={index} style={{ ...cardStyle, ...(index % 2 === 0 && cardHoverStyle) }}>
          <img src={certification.image} alt={certification.title} style={imageStyle} />
          <div>
            <h3 style={titleStyle}>{certification.title}</h3>
            <p style={descriptionStyle}>{certification.description}</p>
            <p style={enrolledStyle}>{certification.enrolled}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursePage;
