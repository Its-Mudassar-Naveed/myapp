import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    profileImage:
      "https://mofa.gov.pk/wp-content/uploads/2019/11/Imran-Khan-Full-Image-33@2x.png",
    userName: "Imran Khan",
    desc: "Some Description here",
    pic: "",
    likeIcon: "",
    commentIcon: "",
    postDesc: "",
    navLink: "",
    time: "",
  };
  render() {
    return (
      <div className="container">
        <div className="">
          <img
            style={{ height: 100, width: 100, borderRadius: 50 }}
            src={this.state.profileImage}
          />
          <span>{this.state.userName}</span>
        </div>
      </div>
    );
  }
}
export default Header;
