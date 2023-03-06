//Returns the html template consisting of the html, css
export const getNeonTemplate = (data) => `
    <style>
      .neon {
        color: #fff;
        text-shadow:
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 20px #fff,
          0 0 40px #0ff,
          0 0 80px #0ff,
          0 0 90px #0ff,
          0 0 100px #0ff,
          0 0 150px #0ff;
      }
      /* general styling */
      :root {
        font-size: calc(1vw + 1vh + 1.5vmin);
      }

      html, body {
        height: 100%;
        margin: 0;
      }

      .container {
        margin: 0 auto;
      }

      body {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #010a00;
        background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-family: -apple-system, 
          BlinkMacSystemFont, 
          "Segoe UI", 
          Roboto, 
          Oxygen-Sans, 
          Ubuntu, 
          Cantarell, 
          "Helvetica Neue", 
          sans-serif;
        font-size: 1rem;
      }

      h1 {
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
      }
      </style>
      <div class="container">
         <h1 class="neon">${data}</h1>
      </div>
`;
