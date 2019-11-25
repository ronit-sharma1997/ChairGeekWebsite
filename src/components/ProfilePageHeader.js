// import React from "react";

// // reactstrap components
// import { Container, Button } from "reactstrap";

// // core components

// function ProfilePageHeader() {
//   let pageHeader = React.createRef();

//   React.useEffect(() => {
//     if (window.innerWidth > 991) {
//       const updateScroll = () => {
//         let windowScrollTop = window.pageYOffset / 3;
//         pageHeader.current.style.transform =
//           "translate3d(0," + windowScrollTop + "px,0)";
//       };
//       window.addEventListener("scroll", updateScroll);
//       return function cleanup() {
//         window.removeEventListener("scroll", updateScroll);
//       };
//     }
//   });
//   return (
//       <div
//         className="page-header clear-filter page-header-small"
//         filter-color="blue"
//       >
//         <Container>
//           <div className="button-container">
//             <Button className="btn-neutral" color="default" outline type="button" size="lg">
//               <h2>Floor 1</h2>
//               <p>XX% Full</p>
//              </Button>
//           </div>
//           <div className="button-container">
//             <Button className="btn-neutral" color="default" outline type="button" size="lg">
//               <h2>Floor 2</h2>
//               <p>XX% Full</p>
//              </Button>
//           </div>    
//           <div className="button-container">
//             <Button className="btn-neutral" color="default" outline type="button" size="lg">
//               <h2>Floor 3</h2>
//               <p>XX% Full</p>
//              </Button>
//           </div>
//           <div className="button-container">
//             <Button className="btn-neutral" color="default" outline type="button" size="lg">
//               <h2>Floor 4</h2>
//               <p>XX% Full</p>
//              </Button>
//           </div>    
//         </Container>
//       </div>
//   );
// }

// export default ProfilePageHeader;
