import React from "react";

export default function Blogs() {
  const handleLogout = () => {
    localStorage.removeItem("b3-blog-auth-token");
    window.location.href = "/login";
  };

  return (
    <div>
      BLOG
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
