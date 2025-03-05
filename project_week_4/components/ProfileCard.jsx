
import "./ProfileCard.css"; // Import CSS

function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.xVDq5RxEg-PenIaQIZAVhgHaLH&w=474&h=474&c=7" // Thay ảnh của bạn vào đây
        alt="Profile"
        className="profile-image"
      />
      <div className="profile-content">
        <p className="profile-text">
          <strong>Emma Gonzalez</strong> is a deputy editor at Cheffly, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
        </p>
        <div className="profile-actions">
          <span className="subscribers">6.5k Subscribers</span>
          <button className="share-btn">Share ↗</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
