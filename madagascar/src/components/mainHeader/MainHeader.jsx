import React from 'react';
import './mainHeader.css'


const MainHeader = () => {
    return (
        <body>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <label class="logo">Madagascar</label>
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>
    <section></section>
  </body>
    )
}

export default MainHeader;