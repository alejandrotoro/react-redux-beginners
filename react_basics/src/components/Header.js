import React from 'react';
// As we don't need state, refs and life cycle functions we can convert this into a Functional Component
// class Header extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>
//           This is the header
//         </h1>
//       </div>
//     );
//   }
// }

const Header = () => {
  return(
    <header>
      <p>This is the Header</p>
    </header>
  )
}

export default Header;