import "./App.css";

function App() {
  const logo = document.querySelectorAll('.logo path')
  for(let i =0;i<logo.length;i++){
console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
    }
  return (
    <div className="App">
      <svg
        className="logo"
        width="630"
        height="159"
        viewBox="0 0 630 159"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1_6_4"
          maskUnits="userSpaceOnUse"
          x="0.0880127"
          y="0.415985"
          width="630"
          height="159"
          fill="black"
        >
          <rect
            fill="white"
            x="0.0880127"
            y="0.415985"
            width="630"
            height="159"
          />
          <path d="M36.336 14.632C47.28 14.632 56.736 16.696 64.704 20.824C72.768 24.856 78.912 30.664 83.136 38.248C87.456 45.832 89.616 54.76 89.616 65.032C89.616 75.304 87.456 84.232 83.136 91.816C78.912 99.304 72.768 105.064 64.704 109.096C56.736 113.032 47.28 115 36.336 115H5.08801V14.632H36.336ZM36.336 104.2C49.296 104.2 59.184 100.792 66 93.976C72.816 87.064 76.224 77.416 76.224 65.032C76.224 52.552 72.768 42.808 65.856 35.8C59.04 28.792 49.2 25.288 36.336 25.288H18.192V104.2H36.336Z" />
          <path d="M178.901 72.52C178.901 75.016 178.757 77.656 178.469 80.44H115.397C115.877 88.216 118.517 94.312 123.317 98.728C128.213 103.048 134.117 105.208 141.029 105.208C146.693 105.208 151.397 103.912 155.141 101.32C158.981 98.632 161.669 95.08 163.205 90.664H177.317C175.205 98.248 170.981 104.44 164.645 109.24C158.309 113.944 150.437 116.296 141.029 116.296C133.541 116.296 126.821 114.616 120.869 111.256C115.013 107.896 110.405 103.144 107.045 97C103.685 90.76 102.005 83.56 102.005 75.4C102.005 67.24 103.637 60.088 106.901 53.944C110.165 47.8 114.725 43.096 120.581 39.832C126.533 36.472 133.349 34.792 141.029 34.792C148.517 34.792 155.141 36.424 160.901 39.688C166.661 42.952 171.077 47.464 174.149 53.224C177.317 58.888 178.901 65.32 178.901 72.52ZM165.365 69.784C165.365 64.792 164.261 60.52 162.053 56.968C159.845 53.32 156.821 50.584 152.981 48.76C149.237 46.84 145.061 45.88 140.453 45.88C133.829 45.88 128.165 47.992 123.461 52.216C118.853 56.44 116.213 62.296 115.541 69.784H165.365Z" />
          <path d="M224.133 116.296C218.085 116.296 212.661 115.288 207.861 113.272C203.061 111.16 199.269 108.28 196.485 104.632C193.701 100.888 192.165 96.616 191.877 91.816H205.413C205.797 95.752 207.621 98.968 210.885 101.464C214.245 103.96 218.613 105.208 223.989 105.208C228.981 105.208 232.917 104.104 235.797 101.896C238.677 99.688 240.117 96.904 240.117 93.544C240.117 90.088 238.581 87.544 235.509 85.912C232.437 84.184 227.685 82.504 221.253 80.872C215.397 79.336 210.597 77.8 206.853 76.264C203.205 74.632 200.037 72.28 197.349 69.208C194.757 66.04 193.461 61.912 193.461 56.824C193.461 52.792 194.661 49.096 197.061 45.736C199.461 42.376 202.869 39.736 207.285 37.816C211.701 35.8 216.741 34.792 222.405 34.792C231.141 34.792 238.197 37 243.573 41.416C248.949 45.832 251.829 51.88 252.213 59.56H239.109C238.821 55.432 237.141 52.12 234.069 49.624C231.093 47.128 227.061 45.88 221.973 45.88C217.269 45.88 213.525 46.888 210.741 48.904C207.957 50.92 206.565 53.56 206.565 56.824C206.565 59.416 207.381 61.576 209.013 63.304C210.741 64.936 212.853 66.28 215.349 67.336C217.941 68.296 221.493 69.4 226.005 70.648C231.669 72.184 236.277 73.72 239.829 75.256C243.381 76.696 246.405 78.904 248.901 81.88C251.493 84.856 252.837 88.744 252.933 93.544C252.933 97.864 251.733 101.752 249.333 105.208C246.933 108.664 243.525 111.4 239.109 113.416C234.789 115.336 229.797 116.296 224.133 116.296Z" />
          <path d="M278.2 23.272C275.704 23.272 273.592 22.408 271.864 20.68C270.136 18.952 269.272 16.84 269.272 14.344C269.272 11.848 270.136 9.73599 271.864 8.00799C273.592 6.27999 275.704 5.41599 278.2 5.41599C280.6 5.41599 282.616 6.27999 284.248 8.00799C285.976 9.73599 286.84 11.848 286.84 14.344C286.84 16.84 285.976 18.952 284.248 20.68C282.616 22.408 280.6 23.272 278.2 23.272ZM284.536 36.088V115H271.432V36.088H284.536Z" />
          <path d="M339.413 34.792C346.229 34.792 352.181 36.28 357.269 39.256C362.453 42.232 366.293 45.976 368.789 50.488V36.088H382.037V116.728C382.037 123.928 380.501 130.312 377.429 135.88C374.357 141.544 369.941 145.96 364.181 149.128C358.517 152.296 351.893 153.88 344.309 153.88C333.941 153.88 325.301 151.432 318.389 146.536C311.477 141.64 307.397 134.968 306.149 126.52H319.109C320.549 131.32 323.525 135.16 328.037 138.04C332.549 141.016 337.973 142.504 344.309 142.504C351.509 142.504 357.365 140.248 361.877 135.736C366.485 131.224 368.789 124.888 368.789 116.728V100.168C366.197 104.776 362.357 108.616 357.269 111.688C352.181 114.76 346.229 116.296 339.413 116.296C332.405 116.296 326.021 114.568 320.261 111.112C314.597 107.656 310.133 102.808 306.869 96.568C303.605 90.328 301.973 83.224 301.973 75.256C301.973 67.192 303.605 60.136 306.869 54.088C310.133 47.944 314.597 43.192 320.261 39.832C326.021 36.472 332.405 34.792 339.413 34.792ZM368.789 75.4C368.789 69.448 367.589 64.264 365.189 59.848C362.789 55.432 359.525 52.072 355.397 49.768C351.365 47.368 346.901 46.168 342.005 46.168C337.109 46.168 332.645 47.32 328.613 49.624C324.581 51.928 321.365 55.288 318.965 59.704C316.565 64.12 315.365 69.304 315.365 75.256C315.365 81.304 316.565 86.584 318.965 91.096C321.365 95.512 324.581 98.92 328.613 101.32C332.645 103.624 337.109 104.776 342.005 104.776C346.901 104.776 351.365 103.624 355.397 101.32C359.525 98.92 362.789 95.512 365.189 91.096C367.589 86.584 368.789 81.352 368.789 75.4Z" />
          <path d="M442.63 34.648C452.23 34.648 460.006 37.576 465.958 43.432C471.91 49.192 474.886 57.544 474.886 68.488V115H461.926V70.36C461.926 62.488 459.958 56.488 456.022 52.36C452.086 48.136 446.71 46.024 439.894 46.024C432.982 46.024 427.462 48.184 423.334 52.504C419.302 56.824 417.286 63.112 417.286 71.368V115H404.182V36.088H417.286V47.32C419.878 43.288 423.382 40.168 427.798 37.96C432.31 35.752 437.254 34.648 442.63 34.648Z" />
          <path d="M568.291 72.52C568.291 75.016 568.147 77.656 567.859 80.44H504.787C505.267 88.216 507.907 94.312 512.707 98.728C517.603 103.048 523.507 105.208 530.419 105.208C536.083 105.208 540.787 103.912 544.531 101.32C548.371 98.632 551.059 95.08 552.595 90.664H566.707C564.595 98.248 560.371 104.44 554.035 109.24C547.699 113.944 539.827 116.296 530.419 116.296C522.931 116.296 516.211 114.616 510.259 111.256C504.403 107.896 499.795 103.144 496.435 97C493.075 90.76 491.395 83.56 491.395 75.4C491.395 67.24 493.027 60.088 496.291 53.944C499.555 47.8 504.115 43.096 509.971 39.832C515.923 36.472 522.739 34.792 530.419 34.792C537.907 34.792 544.531 36.424 550.291 39.688C556.051 42.952 560.467 47.464 563.539 53.224C566.707 58.888 568.291 65.32 568.291 72.52ZM554.755 69.784C554.755 64.792 553.651 60.52 551.443 56.968C549.235 53.32 546.211 50.584 542.371 48.76C538.627 46.84 534.451 45.88 529.843 45.88C523.219 45.88 517.555 47.992 512.851 52.216C508.243 56.44 505.603 62.296 504.931 69.784H554.755Z" />
          <path d="M598.692 48.904C600.996 44.392 604.26 40.888 608.484 38.392C612.804 35.896 618.036 34.648 624.18 34.648V48.184H620.724C606.036 48.184 598.692 56.152 598.692 72.088V115H585.588V36.088H598.692V48.904Z" />
        </mask>
        <path
          d="M36.336 14.632C47.28 14.632 56.736 16.696 64.704 20.824C72.768 24.856 78.912 30.664 83.136 38.248C87.456 45.832 89.616 54.76 89.616 65.032C89.616 75.304 87.456 84.232 83.136 91.816C78.912 99.304 72.768 105.064 64.704 109.096C56.736 113.032 47.28 115 36.336 115H5.08801V14.632H36.336ZM36.336 104.2C49.296 104.2 59.184 100.792 66 93.976C72.816 87.064 76.224 77.416 76.224 65.032C76.224 52.552 72.768 42.808 65.856 35.8C59.04 28.792 49.2 25.288 36.336 25.288H18.192V104.2H36.336Z"
          stroke="#FFFBFB"
          strokeWidth="10"
          mask="url(#path-1-outside-1_6_4)"
        />
        <path
          d="M178.901 72.52C178.901 75.016 178.757 77.656 178.469 80.44H115.397C115.877 88.216 118.517 94.312 123.317 98.728C128.213 103.048 134.117 105.208 141.029 105.208C146.693 105.208 151.397 103.912 155.141 101.32C158.981 98.632 161.669 95.08 163.205 90.664H177.317C175.205 98.248 170.981 104.44 164.645 109.24C158.309 113.944 150.437 116.296 141.029 116.296C133.541 116.296 126.821 114.616 120.869 111.256C115.013 107.896 110.405 103.144 107.045 97C103.685 90.76 102.005 83.56 102.005 75.4C102.005 67.24 103.637 60.088 106.901 53.944C110.165 47.8 114.725 43.096 120.581 39.832C126.533 36.472 133.349 34.792 141.029 34.792C148.517 34.792 155.141 36.424 160.901 39.688C166.661 42.952 171.077 47.464 174.149 53.224C177.317 58.888 178.901 65.32 178.901 72.52ZM165.365 69.784C165.365 64.792 164.261 60.52 162.053 56.968C159.845 53.32 156.821 50.584 152.981 48.76C149.237 46.84 145.061 45.88 140.453 45.88C133.829 45.88 128.165 47.992 123.461 52.216C118.853 56.44 116.213 62.296 115.541 69.784H165.365Z"
          stroke="#FFFBFB"
          strokeWidth="10"
          mask="url(#path-1-outside-1_6_4)"
        />
        <path
          d="M224.133 116.296C218.085 116.296 212.661 115.288 207.861 113.272C203.061 111.16 199.269 108.28 196.485 104.632C193.701 100.888 192.165 96.616 191.877 91.816H205.413C205.797 95.752 207.621 98.968 210.885 101.464C214.245 103.96 218.613 105.208 223.989 105.208C228.981 105.208 232.917 104.104 235.797 101.896C238.677 99.688 240.117 96.904 240.117 93.544C240.117 90.088 238.581 87.544 235.509 85.912C232.437 84.184 227.685 82.504 221.253 80.872C215.397 79.336 210.597 77.8 206.853 76.264C203.205 74.632 200.037 72.28 197.349 69.208C194.757 66.04 193.461 61.912 193.461 56.824C193.461 52.792 194.661 49.096 197.061 45.736C199.461 42.376 202.869 39.736 207.285 37.816C211.701 35.8 216.741 34.792 222.405 34.792C231.141 34.792 238.197 37 243.573 41.416C248.949 45.832 251.829 51.88 252.213 59.56H239.109C238.821 55.432 237.141 52.12 234.069 49.624C231.093 47.128 227.061 45.88 221.973 45.88C217.269 45.88 213.525 46.888 210.741 48.904C207.957 50.92 206.565 53.56 206.565 56.824C206.565 59.416 207.381 61.576 209.013 63.304C210.741 64.936 212.853 66.28 215.349 67.336C217.941 68.296 221.493 69.4 226.005 70.648C231.669 72.184 236.277 73.72 239.829 75.256C243.381 76.696 246.405 78.904 248.901 81.88C251.493 84.856 252.837 88.744 252.933 93.544C252.933 97.864 251.733 101.752 249.333 105.208C246.933 108.664 243.525 111.4 239.109 113.416C234.789 115.336 229.797 116.296 224.133 116.296Z"
          stroke="#FFFBFB"
          strokeWidth="10"
          mask="url(#path-1-outside-1_6_4)"
        />
        <path
          d="M278.2 23.272C275.704 23.272 273.592 22.408 271.864 20.68C270.136 18.952 269.272 16.84 269.272 14.344C269.272 11.848 270.136 9.73599 271.864 8.00799C273.592 6.27999 275.704 5.41599 278.2 5.41599C280.6 5.41599 282.616 6.27999 284.248 8.00799C285.976 9.73599 286.84 11.848 286.84 14.344C286.84 16.84 285.976 18.952 284.248 20.68C282.616 22.408 280.6 23.272 278.2 23.272ZM284.536 36.088V115H271.432V36.088H284.536Z"
          stroke="#FFFBFB"
          strokeWidth="10"
          mask="url(#path-1-outside-1_6_4)"
        />
        <path
          d="M339.413 34.792C346.229 34.792 352.181 36.28 357.269 39.256C362.453 42.232 366.293 45.976 368.789 50.488V36.088H382.037V116.728C382.037 123.928 380.501 130.312 377.429 135.88C374.357 141.544 369.941 145.96 364.181 149.128C358.517 152.296 351.893 153.88 344.309 153.88C333.941 153.88 325.301 151.432 318.389 146.536C311.477 141.64 307.397 134.968 306.149 126.52H319.109C320.549 131.32 323.525 135.16 328.037 138.04C332.549 141.016 337.973 142.504 344.309 142.504C351.509 142.504 357.365 140.248 361.877 135.736C366.485 131.224 368.789 124.888 368.789 116.728V100.168C366.197 104.776 362.357 108.616 357.269 111.688C352.181 114.76 346.229 116.296 339.413 116.296C332.405 116.296 326.021 114.568 320.261 111.112C314.597 107.656 310.133 102.808 306.869 96.568C303.605 90.328 301.973 83.224 301.973 75.256C301.973 67.192 303.605 60.136 306.869 54.088C310.133 47.944 314.597 43.192 320.261 39.832C326.021 36.472 332.405 34.792 339.413 34.792ZM368.789 75.4C368.789 69.448 367.589 64.264 365.189 59.848C362.789 55.432 359.525 52.072 355.397 49.768C351.365 47.368 346.901 46.168 342.005 46.168C337.109 46.168 332.645 47.32 328.613 49.624C324.581 51.928 321.365 55.288 318.965 59.704C316.565 64.12 315.365 69.304 315.365 75.256C315.365 81.304 316.565 86.584 318.965 91.096C321.365 95.512 324.581 98.92 328.613 101.32C332.645 103.624 337.109 104.776 342.005 104.776C346.901 104.776 351.365 103.624 355.397 101.32C359.525 98.92 362.789 95.512 365.189 91.096C367.589 86.584 368.789 81.352 368.789 75.4Z"
          stroke="#FFFBFB"
          strokeWidth="10"
          mask="url(#path-1-outside-1_6_4)"
        />
        <path
          d="M442.63 34.648C452.23 34.648 460.006 37.576 465.958 43.432C471.91 49.192 474.886 57.544 474.886 68.488V115H461.926V70.36C461.926 62.488 459.958 56.488 456.022 52.36C452.086 48.136 446.71 46.024 439.894 46.024C432.982 46.024 427.462 48.184 423.334 52.504C419.302 56.824 417.286 63.112 417.286 71.368V115H404.182V36.088H417.286V47.32C419.878 43.288 423.382 40.168 427.798 37.96C432.31 35.752 437.254 34.648 442.63 34.648Z"
          stroke="#FFFBFB"
          strokeWidth="10"
          mask="url(#path-1-outside-1_6_4)"
        />
        <path
          d="M568.291 72.52C568.291 75.016 568.147 77.656 567.859 80.44H504.787C505.267 88.216 507.907 94.312 512.707 98.728C517.603 103.048 523.507 105.208 530.419 105.208C536.083 105.208 540.787 103.912 544.531 101.32C548.371 98.632 551.059 95.08 552.595 90.664H566.707C564.595 98.248 560.371 104.44 554.035 109.24C547.699 113.944 539.827 116.296 530.419 116.296C522.931 116.296 516.211 114.616 510.259 111.256C504.403 107.896 499.795 103.144 496.435 97C493.075 90.76 491.395 83.56 491.395 75.4C491.395 67.24 493.027 60.088 496.291 53.944C499.555 47.8 504.115 43.096 509.971 39.832C515.923 36.472 522.739 34.792 530.419 34.792C537.907 34.792 544.531 36.424 550.291 39.688C556.051 42.952 560.467 47.464 563.539 53.224C566.707 58.888 568.291 65.32 568.291 72.52ZM554.755 69.784C554.755 64.792 553.651 60.52 551.443 56.968C549.235 53.32 546.211 50.584 542.371 48.76C538.627 46.84 534.451 45.88 529.843 45.88C523.219 45.88 517.555 47.992 512.851 52.216C508.243 56.44 505.603 62.296 504.931 69.784H554.755Z"
          stroke="#FFFBFB"
          strokeWidth="10"
          mask="url(#path-1-outside-1_6_4)"
        />
        <path
          d="M598.692 48.904C600.996 44.392 604.26 40.888 608.484 38.392C612.804 35.896 618.036 34.648 624.18 34.648V48.184H620.724C606.036 48.184 598.692 56.152 598.692 72.088V115H585.588V36.088H598.692V48.904Z"
          stroke="#FFFBFB"
          strokeWidth="10"
          mask="url(#path-1-outside-1_6_4)"
        />
      </svg>
    </div>
  );
}

export default App;
