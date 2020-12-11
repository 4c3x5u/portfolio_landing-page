import React from 'react';
import './Head.css';
import './bg-pageHead.jpg';

const Head = () => ( 
  <section class="Head d-flex justify-content-center align-items-center">
    <article class="Main d-block text-center pb-5">

        <h1 class="FullName text-light d-sm-none d-block mb-0">
            Alican Demirtas
        </h1>
        <h1 class="FullName animated text-light d-none d-sm-block mb-0">
            Alican Demirtas
        </h1>

        <h2 class="Profession d-sm-none d-block text-light mt-0 pb-2">
            .NET Developer
        </h2>
        <h2 class="Profession animated d-none d-sm-block text-light mt-0 pb-2 ">
            .NET Developer
        </h2>

        <a class="AboutButton animated btn btn-outline-light py-2 px-3 d-sm-none" href="#About">
            <span class="Text h3">Who?!</span>
        </a>

        <div class="OuterAboutAnimation mt-5 d-none d-sm-block">
            <div class="InnerAboutAnimation">
                <a class="AboutButton animated btn btn-outline-light py-2 px-3" href="#About">
                    <span class="Text h3">Who?!</span>
                </a>
            </div>
        </div>

    </article>
  </section>
 );
 
export default Head;