import React, { useEffect, useState } from "react";

const Geekosophers = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      window.open("https://www.geekosophers.com/", "_blank");
    }
  });

  return (
    <div style={{ cursor: "pointer" }} onClick={() => setClicked(true)}>
      <svg
        width="225"
        height="35"
        viewBox="0 0 225 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.8987 16.062V25.4153C21.5847 26.345 20.1838 27.0579 18.6962 27.5537C17.2086 28.0496 15.5351 28.2975 13.6756 28.2975C11.5929 28.2975 9.72105 27.9814 8.05989 27.3492C6.39874 26.7045 4.97932 25.7996 3.80164 24.6343C2.63635 23.4566 1.7376 22.0372 1.10537 20.376C0.485532 18.7149 0.175615 16.8678 0.175615 14.8347C0.175615 12.8017 0.479333 10.9608 1.08677 9.31203C1.7066 7.65087 2.58677 6.23765 3.72726 5.07237C4.88015 3.89468 6.26858 2.98972 7.89254 2.35749C9.5165 1.71287 11.345 1.39055 13.3781 1.39055C14.3822 1.39055 15.3057 1.45874 16.1487 1.5951C17.0041 1.73146 17.7975 1.93601 18.5289 2.20873C19.2603 2.46906 19.9421 2.79758 20.5743 3.19427C21.2066 3.57857 21.814 4.02485 22.3966 4.53311L21.876 5.35129C21.7024 5.64881 21.4421 5.71699 21.095 5.55584C20.909 5.48145 20.6425 5.3079 20.2954 5.03518C19.9483 4.76245 19.471 4.47732 18.8636 4.17981C18.2562 3.88228 17.5 3.61576 16.595 3.38022C15.7024 3.14468 14.6115 3.02691 13.3223 3.02691C11.6115 3.02691 10.062 3.29964 8.67353 3.8451C7.2975 4.39055 6.11982 5.17154 5.14048 6.18806C4.17354 7.20459 3.42354 8.44426 2.89049 9.90706C2.36983 11.3699 2.1095 13.0124 2.1095 14.8347C2.1095 16.6818 2.36983 18.343 2.89049 19.8182C3.42354 21.2934 4.18594 22.5455 5.17767 23.5744C6.1818 24.6033 7.39667 25.3905 8.82229 25.936C10.2479 26.4814 11.8533 26.7541 13.6384 26.7541C14.4194 26.7541 15.1384 26.7045 15.7954 26.6054C16.4648 26.5062 17.0971 26.3698 17.6921 26.1963C18.2995 26.0103 18.8822 25.7872 19.44 25.5269C20.0103 25.2541 20.5867 24.9504 21.1694 24.6157V17.531H16.1301C15.9938 17.531 15.876 17.4876 15.7768 17.4008C15.69 17.3141 15.6467 17.2149 15.6467 17.1033V16.062H22.8987ZM41.1224 16.8802C41.1224 15.8885 40.9798 15.0021 40.6947 14.2211C40.422 13.4277 40.0315 12.7583 39.5232 12.2128C39.015 11.6674 38.4075 11.2521 37.7009 10.967C37.0067 10.6695 36.2381 10.5207 35.3951 10.5207C34.4406 10.5207 33.5852 10.6695 32.829 10.967C32.0728 11.2645 31.4158 11.6922 30.8579 12.25C30.3125 12.8079 29.8724 13.4773 29.5377 14.2583C29.203 15.0393 28.9798 15.9132 28.8683 16.8802H41.1224ZM28.7753 18.0145V18.3678C28.7753 19.7562 28.9365 20.9773 29.2588 22.031C29.5811 23.0847 30.0398 23.9711 30.6348 24.6901C31.2298 25.3967 31.9489 25.9298 32.7918 26.2893C33.6348 26.6488 34.5769 26.8285 35.6183 26.8285C36.548 26.8285 37.3538 26.7293 38.0356 26.531C38.7174 26.3203 39.2877 26.0909 39.7464 25.843C40.2174 25.5826 40.5893 25.3533 40.8621 25.155C41.1348 24.9442 41.3331 24.8389 41.4571 24.8389C41.6183 24.8389 41.7422 24.9008 41.829 25.0248L42.3125 25.6198C42.0149 25.9917 41.6183 26.3388 41.1224 26.6612C40.6389 26.9835 40.0935 27.2624 39.486 27.4979C38.891 27.7211 38.2464 27.9008 37.5521 28.0372C36.8703 28.1736 36.1823 28.2417 35.4881 28.2417C34.2236 28.2417 33.0707 28.0248 32.0294 27.5909C30.9881 27.1446 30.0955 26.5 29.3517 25.657C28.6079 24.8141 28.0315 23.7851 27.6224 22.5703C27.2257 21.343 27.0274 19.9422 27.0274 18.3678C27.0274 17.0413 27.2133 15.8203 27.5852 14.7046C27.9695 13.5765 28.515 12.6095 29.2216 11.8038C29.9406 10.9856 30.8146 10.3471 31.8435 9.88847C32.8848 9.42979 34.0625 9.20046 35.3765 9.20046C36.4178 9.20046 37.3848 9.38021 38.2773 9.73971C39.1699 10.0992 39.9447 10.6261 40.6017 11.3203C41.2587 12.0021 41.7732 12.8451 42.1451 13.8492C42.5294 14.8533 42.7216 16.0062 42.7216 17.3079C42.7216 17.5806 42.6844 17.7666 42.61 17.8657C42.5356 17.9649 42.4116 18.0145 42.2381 18.0145H28.7753ZM60.5164 16.8802C60.5164 15.8885 60.3738 15.0021 60.0887 14.2211C59.816 13.4277 59.4255 12.7583 58.9172 12.2128C58.409 11.6674 57.8015 11.2521 57.0949 10.967C56.4007 10.6695 55.6321 10.5207 54.7891 10.5207C53.8346 10.5207 52.9792 10.6695 52.223 10.967C51.4668 11.2645 50.8098 11.6922 50.2519 12.25C49.7065 12.8079 49.2664 13.4773 48.9317 14.2583C48.597 15.0393 48.3739 15.9132 48.2623 16.8802H60.5164ZM48.1693 18.0145V18.3678C48.1693 19.7562 48.3305 20.9773 48.6528 22.031C48.9751 23.0847 49.4338 23.9711 50.0288 24.6901C50.6238 25.3967 51.3429 25.9298 52.1858 26.2893C53.0288 26.6488 53.9709 26.8285 55.0123 26.8285C55.942 26.8285 56.7478 26.7293 57.4296 26.531C58.1114 26.3203 58.6817 26.0909 59.1404 25.843C59.6114 25.5826 59.9833 25.3533 60.2561 25.155C60.5288 24.9442 60.7271 24.8389 60.8511 24.8389C61.0123 24.8389 61.1362 24.9008 61.223 25.0248L61.7065 25.6198C61.4089 25.9917 61.0123 26.3388 60.5164 26.6612C60.0329 26.9835 59.4875 27.2624 58.88 27.4979C58.285 27.7211 57.6404 27.9008 56.9461 28.0372C56.2643 28.1736 55.5763 28.2417 54.8821 28.2417C53.6176 28.2417 52.4648 28.0248 51.4234 27.5909C50.3821 27.1446 49.4896 26.5 48.7458 25.657C48.002 24.8141 47.4255 23.7851 47.0164 22.5703C46.6197 21.343 46.4214 19.9422 46.4214 18.3678C46.4214 17.0413 46.6073 15.8203 46.9792 14.7046C47.3635 13.5765 47.909 12.6095 48.6156 11.8038C49.3346 10.9856 50.2086 10.3471 51.2375 9.88847C52.2788 9.42979 53.4565 9.20046 54.7705 9.20046C55.8119 9.20046 56.7788 9.38021 57.6714 9.73971C58.5639 10.0992 59.3387 10.6261 59.9957 11.3203C60.6527 12.0021 61.1672 12.8451 61.5391 13.8492C61.9234 14.8533 62.1156 16.0062 62.1156 17.3079C62.1156 17.5806 62.0784 17.7666 62.004 17.8657C61.9296 17.9649 61.8056 18.0145 61.6321 18.0145H48.1693ZM68.7162 0.944275V17.438H69.5716C69.7451 17.438 69.9063 17.4132 70.055 17.3637C70.2162 17.3141 70.3898 17.1963 70.5757 17.0104L77.9951 9.96285C78.1191 9.81409 78.2554 9.70252 78.4042 9.62814C78.553 9.54136 78.7389 9.49797 78.962 9.49797H80.524L72.3608 17.2521C72.1377 17.5124 71.8959 17.717 71.6356 17.8657C71.834 17.9649 72.0013 18.0827 72.1377 18.219C72.2864 18.343 72.429 18.4918 72.5654 18.6653L81.1377 28H79.5943C79.4207 28 79.2596 27.9752 79.1108 27.9256C78.9744 27.8636 78.8443 27.7459 78.7203 27.5723L70.9476 19.2418C70.8484 19.1302 70.7493 19.0372 70.6501 18.9628C70.5633 18.8884 70.4703 18.8327 70.3712 18.7955C70.272 18.7459 70.1542 18.7149 70.0179 18.7025C69.8939 18.6777 69.7389 18.6653 69.553 18.6653H68.7162V28H66.9311V0.944275H68.7162ZM90.746 9.20046C92.0725 9.20046 93.2564 9.42979 94.2977 9.88847C95.3514 10.3348 96.2378 10.9732 96.9568 11.8038C97.6758 12.6343 98.2212 13.6385 98.5931 14.8161C98.9774 15.9814 99.1696 17.2893 99.1696 18.7397C99.1696 20.1901 98.9774 21.4979 98.5931 22.6632C98.2212 23.8285 97.6758 24.8265 96.9568 25.657C96.2378 26.4876 95.3514 27.126 94.2977 27.5723C93.2564 28.0186 92.0725 28.2417 90.746 28.2417C89.4196 28.2417 88.2295 28.0186 87.1758 27.5723C86.1345 27.126 85.2481 26.4876 84.5167 25.657C83.7977 24.8265 83.2461 23.8285 82.8618 22.6632C82.4899 21.4979 82.3039 20.1901 82.3039 18.7397C82.3039 17.2893 82.4899 15.9814 82.8618 14.8161C83.2461 13.6385 83.7977 12.6343 84.5167 11.8038C85.2481 10.9732 86.1345 10.3348 87.1758 9.88847C88.2295 9.42979 89.4196 9.20046 90.746 9.20046ZM90.746 26.8471C91.8493 26.8471 92.8101 26.6612 93.6283 26.2893C94.4588 25.905 95.1469 25.3595 95.6923 24.6529C96.2502 23.9463 96.6655 23.0971 96.9382 22.1054C97.2109 21.1013 97.3473 19.9794 97.3473 18.7397C97.3473 17.5124 97.2109 16.3967 96.9382 15.3926C96.6655 14.3885 96.2502 13.5331 95.6923 12.8265C95.1469 12.1075 94.4588 11.5558 93.6283 11.1715C92.8101 10.7872 91.8493 10.5951 90.746 10.5951C89.6427 10.5951 88.6758 10.7872 87.8452 11.1715C87.027 11.5558 86.339 12.1075 85.7812 12.8265C85.2357 13.5331 84.8204 14.3885 84.5353 15.3926C84.2626 16.3967 84.1262 17.5124 84.1262 18.7397C84.1262 19.9794 84.2626 21.1013 84.5353 22.1054C84.8204 23.0971 85.2357 23.9463 85.7812 24.6529C86.339 25.3595 87.027 25.905 87.8452 26.2893C88.6758 26.6612 89.6427 26.8471 90.746 26.8471Z"
          fill="#DB93B0"
        />
        <path
          d="M114.329 11.7852C114.23 11.9587 114.087 12.0455 113.901 12.0455C113.765 12.0455 113.591 11.9711 113.381 11.8223C113.17 11.6612 112.885 11.4876 112.525 11.3017C112.178 11.1033 111.744 10.9298 111.223 10.781C110.703 10.6199 110.071 10.5393 109.327 10.5393C108.657 10.5393 108.044 10.6385 107.486 10.8368C106.94 11.0228 106.469 11.2769 106.073 11.5992C105.688 11.9215 105.391 12.2996 105.18 12.7335C104.969 13.155 104.864 13.6013 104.864 14.0723C104.864 14.655 105.013 15.1385 105.31 15.5228C105.608 15.9071 105.992 16.2356 106.463 16.5083C106.947 16.781 107.498 17.0166 108.118 17.2149C108.738 17.4132 109.364 17.6116 109.996 17.8099C110.641 18.0083 111.273 18.2314 111.893 18.4794C112.513 18.7149 113.058 19.0124 113.529 19.3719C114.013 19.7314 114.403 20.1715 114.701 20.6922C114.998 21.2128 115.147 21.8451 115.147 22.5889C115.147 23.3946 115.004 24.1446 114.719 24.8389C114.434 25.5331 114.013 26.1343 113.455 26.6426C112.909 27.1508 112.234 27.5537 111.428 27.8512C110.622 28.1488 109.699 28.2975 108.657 28.2975C107.356 28.2975 106.234 28.093 105.292 27.6839C104.35 27.2624 103.507 26.7169 102.763 26.0475L103.172 25.4153C103.234 25.3161 103.302 25.2417 103.376 25.1922C103.463 25.1426 103.575 25.1178 103.711 25.1178C103.872 25.1178 104.064 25.2169 104.288 25.4153C104.523 25.6136 104.833 25.8306 105.217 26.0661C105.602 26.2893 106.073 26.5 106.631 26.6984C107.201 26.8967 107.901 26.9959 108.732 26.9959C109.513 26.9959 110.201 26.8905 110.796 26.6798C111.391 26.4566 111.887 26.1591 112.283 25.7872C112.68 25.4153 112.978 24.9814 113.176 24.4855C113.387 23.9773 113.492 23.4442 113.492 22.8864C113.492 22.2665 113.343 21.7521 113.046 21.343C112.748 20.9339 112.358 20.5868 111.874 20.3017C111.391 20.0165 110.839 19.7748 110.219 19.5765C109.612 19.3781 108.986 19.1798 108.341 18.9814C107.697 18.7831 107.064 18.5661 106.445 18.3306C105.837 18.0951 105.292 17.7975 104.808 17.438C104.325 17.0785 103.934 16.6447 103.637 16.1364C103.339 15.6157 103.19 14.9711 103.19 14.2025C103.19 13.5455 103.333 12.9133 103.618 12.3058C103.903 11.6984 104.306 11.1653 104.827 10.7066C105.36 10.248 106.005 9.88227 106.761 9.60955C107.517 9.33682 108.366 9.20046 109.308 9.20046C110.436 9.20046 111.434 9.36161 112.302 9.68392C113.182 10.0062 113.982 10.5021 114.701 11.1715L114.329 11.7852ZM127.282 9.20046C128.609 9.20046 129.793 9.42979 130.834 9.88847C131.888 10.3348 132.774 10.9732 133.493 11.8038C134.212 12.6343 134.758 13.6385 135.129 14.8161C135.514 15.9814 135.706 17.2893 135.706 18.7397C135.706 20.1901 135.514 21.4979 135.129 22.6632C134.758 23.8285 134.212 24.8265 133.493 25.657C132.774 26.4876 131.888 27.126 130.834 27.5723C129.793 28.0186 128.609 28.2417 127.282 28.2417C125.956 28.2417 124.766 28.0186 123.712 27.5723C122.671 27.126 121.784 26.4876 121.053 25.657C120.334 24.8265 119.782 23.8285 119.398 22.6632C119.026 21.4979 118.84 20.1901 118.84 18.7397C118.84 17.2893 119.026 15.9814 119.398 14.8161C119.782 13.6385 120.334 12.6343 121.053 11.8038C121.784 10.9732 122.671 10.3348 123.712 9.88847C124.766 9.42979 125.956 9.20046 127.282 9.20046ZM127.282 26.8471C128.386 26.8471 129.346 26.6612 130.165 26.2893C130.995 25.905 131.683 25.3595 132.229 24.6529C132.786 23.9463 133.202 23.0971 133.474 22.1054C133.747 21.1013 133.884 19.9794 133.884 18.7397C133.884 17.5124 133.747 16.3967 133.474 15.3926C133.202 14.3885 132.786 13.5331 132.229 12.8265C131.683 12.1075 130.995 11.5558 130.165 11.1715C129.346 10.7872 128.386 10.5951 127.282 10.5951C126.179 10.5951 125.212 10.7872 124.381 11.1715C123.563 11.5558 122.875 12.1075 122.317 12.8265C121.772 13.5331 121.357 14.3885 121.072 15.3926C120.799 16.3967 120.662 17.5124 120.662 18.7397C120.662 19.9794 120.799 21.1013 121.072 22.1054C121.357 23.0971 121.772 23.9463 122.317 24.6529C122.875 25.3595 123.563 25.905 124.381 26.2893C125.212 26.6612 126.179 26.8471 127.282 26.8471ZM142.479 23.9649C142.838 24.4979 143.21 24.9504 143.594 25.3223C143.991 25.6818 144.406 25.9793 144.84 26.2149C145.274 26.438 145.733 26.5992 146.216 26.6984C146.712 26.7975 147.233 26.8471 147.778 26.8471C148.869 26.8471 149.824 26.6488 150.642 26.2521C151.46 25.8554 152.142 25.2975 152.687 24.5785C153.245 23.8471 153.661 22.9793 153.933 21.9752C154.218 20.9587 154.361 19.843 154.361 18.6281C154.361 15.8761 153.853 13.8554 152.836 12.5661C151.82 11.2645 150.363 10.6137 148.466 10.6137C147.239 10.6137 146.13 10.9298 145.138 11.562C144.146 12.1942 143.26 13.0744 142.479 14.2025V23.9649ZM142.404 12.8265C143.223 11.7108 144.177 10.8244 145.268 10.1674C146.371 9.51037 147.605 9.18186 148.968 9.18186C151.237 9.18186 153.004 9.96905 154.268 11.5434C155.545 13.1178 156.183 15.4794 156.183 18.6281C156.183 19.9794 156.004 21.2438 155.644 22.4215C155.297 23.5868 154.776 24.6033 154.082 25.4711C153.4 26.3264 152.557 27.0021 151.553 27.4979C150.561 27.9938 149.415 28.2417 148.113 28.2417C146.861 28.2417 145.776 28.0124 144.859 27.5537C143.942 27.095 143.148 26.4194 142.479 25.5269V34.5454H140.694V9.49797H141.679C141.989 9.49797 142.169 9.65293 142.218 9.96285L142.404 12.8265ZM162.999 12.6219C163.854 11.5806 164.827 10.75 165.918 10.1302C167.021 9.51037 168.255 9.20046 169.618 9.20046C170.635 9.20046 171.528 9.36161 172.296 9.68392C173.077 10.0062 173.722 10.4711 174.23 11.0786C174.738 11.686 175.123 12.4174 175.383 13.2728C175.643 14.1281 175.773 15.0951 175.773 16.1736V28H173.988V16.1736C173.988 14.438 173.592 13.0806 172.798 12.1013C172.005 11.1095 170.796 10.6137 169.172 10.6137C167.97 10.6137 166.842 10.9236 165.788 11.5434C164.747 12.1509 163.817 13 162.999 14.0909V28H161.214V0.944275H162.999V12.6219ZM194.64 16.8802C194.64 15.8885 194.498 15.0021 194.212 14.2211C193.94 13.4277 193.549 12.7583 193.041 12.2128C192.533 11.6674 191.925 11.2521 191.219 10.967C190.524 10.6695 189.756 10.5207 188.913 10.5207C187.958 10.5207 187.103 10.6695 186.347 10.967C185.591 11.2645 184.933 11.6922 184.376 12.25C183.83 12.8079 183.39 13.4773 183.055 14.2583C182.721 15.0393 182.498 15.9132 182.386 16.8802H194.64ZM182.293 18.0145V18.3678C182.293 19.7562 182.454 20.9773 182.776 22.031C183.099 23.0847 183.557 23.9711 184.153 24.6901C184.748 25.3967 185.467 25.9298 186.31 26.2893C187.152 26.6488 188.095 26.8285 189.136 26.8285C190.066 26.8285 190.871 26.7293 191.553 26.531C192.235 26.3203 192.805 26.0909 193.264 25.843C193.735 25.5826 194.107 25.3533 194.38 25.155C194.652 24.9442 194.851 24.8389 194.975 24.8389C195.136 24.8389 195.26 24.9008 195.347 25.0248L195.83 25.6198C195.533 25.9917 195.136 26.3388 194.64 26.6612C194.157 26.9835 193.611 27.2624 193.004 27.4979C192.409 27.7211 191.764 27.9008 191.07 28.0372C190.388 28.1736 189.7 28.2417 189.006 28.2417C187.741 28.2417 186.588 28.0248 185.547 27.5909C184.506 27.1446 183.613 26.5 182.869 25.657C182.126 24.8141 181.549 23.7851 181.14 22.5703C180.743 21.343 180.545 19.9422 180.545 18.3678C180.545 17.0413 180.731 15.8203 181.103 14.7046C181.487 13.5765 182.033 12.6095 182.739 11.8038C183.458 10.9856 184.332 10.3471 185.361 9.88847C186.402 9.42979 187.58 9.20046 188.894 9.20046C189.936 9.20046 190.902 9.38021 191.795 9.73971C192.688 10.0992 193.462 10.6261 194.119 11.3203C194.776 12.0021 195.291 12.8451 195.663 13.8492C196.047 14.8533 196.239 16.0062 196.239 17.3079C196.239 17.5806 196.202 17.7666 196.128 17.8657C196.053 17.9649 195.929 18.0145 195.756 18.0145H182.293ZM202.747 13.9608C203.032 13.2046 203.354 12.5352 203.714 11.9525C204.086 11.3575 204.507 10.8554 204.978 10.4463C205.462 10.0372 205.995 9.72731 206.577 9.51657C207.173 9.29343 207.83 9.18186 208.549 9.18186C208.933 9.18186 209.311 9.21905 209.683 9.29343C210.055 9.35541 210.383 9.47318 210.668 9.64673L210.52 10.874C210.458 11.0724 210.34 11.1715 210.166 11.1715C210.018 11.1715 209.788 11.1281 209.478 11.0414C209.181 10.9546 208.784 10.9112 208.288 10.9112C207.569 10.9112 206.931 11.0228 206.373 11.2459C205.827 11.4566 205.332 11.779 204.885 12.2128C204.451 12.6467 204.067 13.186 203.732 13.8306C203.41 14.4628 203.113 15.1942 202.84 16.0248V28H201.055V9.49797H202.003C202.214 9.49797 202.363 9.54136 202.449 9.62814C202.536 9.71492 202.592 9.86368 202.617 10.0744L202.747 13.9608ZM224.156 11.7852C224.056 11.9587 223.914 12.0455 223.728 12.0455C223.592 12.0455 223.418 11.9711 223.207 11.8223C222.996 11.6612 222.711 11.4876 222.352 11.3017C222.005 11.1033 221.571 10.9298 221.05 10.781C220.53 10.6199 219.897 10.5393 219.154 10.5393C218.484 10.5393 217.87 10.6385 217.313 10.8368C216.767 11.0228 216.296 11.2769 215.899 11.5992C215.515 11.9215 215.218 12.2996 215.007 12.7335C214.796 13.155 214.691 13.6013 214.691 14.0723C214.691 14.655 214.839 15.1385 215.137 15.5228C215.435 15.9071 215.819 16.2356 216.29 16.5083C216.773 16.781 217.325 17.0166 217.945 17.2149C218.565 17.4132 219.191 17.6116 219.823 17.8099C220.468 18.0083 221.1 18.2314 221.72 18.4794C222.339 18.7149 222.885 19.0124 223.356 19.3719C223.839 19.7314 224.23 20.1715 224.527 20.6922C224.825 21.2128 224.974 21.8451 224.974 22.5889C224.974 23.3946 224.831 24.1446 224.546 24.8389C224.261 25.5331 223.839 26.1343 223.282 26.6426C222.736 27.1508 222.061 27.5537 221.255 27.8512C220.449 28.1488 219.525 28.2975 218.484 28.2975C217.182 28.2975 216.061 28.093 215.118 27.6839C214.176 27.2624 213.333 26.7169 212.589 26.0475L212.999 25.4153C213.061 25.3161 213.129 25.2417 213.203 25.1922C213.29 25.1426 213.401 25.1178 213.538 25.1178C213.699 25.1178 213.891 25.2169 214.114 25.4153C214.35 25.6136 214.66 25.8306 215.044 26.0661C215.428 26.2893 215.899 26.5 216.457 26.6984C217.027 26.8967 217.728 26.9959 218.558 26.9959C219.339 26.9959 220.027 26.8905 220.623 26.6798C221.218 26.4566 221.713 26.1591 222.11 25.7872C222.507 25.4153 222.804 24.9814 223.003 24.4855C223.213 23.9773 223.319 23.4442 223.319 22.8864C223.319 22.2665 223.17 21.7521 222.873 21.343C222.575 20.9339 222.184 20.5868 221.701 20.3017C221.218 20.0165 220.666 19.7748 220.046 19.5765C219.439 19.3781 218.813 19.1798 218.168 18.9814C217.523 18.7831 216.891 18.5661 216.271 18.3306C215.664 18.0951 215.118 17.7975 214.635 17.438C214.151 17.0785 213.761 16.6447 213.463 16.1364C213.166 15.6157 213.017 14.9711 213.017 14.2025C213.017 13.5455 213.16 12.9133 213.445 12.3058C213.73 11.6984 214.133 11.1653 214.654 10.7066C215.187 10.248 215.831 9.88227 216.587 9.60955C217.344 9.33682 218.193 9.20046 219.135 9.20046C220.263 9.20046 221.261 9.36161 222.129 9.68392C223.009 10.0062 223.808 10.5021 224.527 11.1715L224.156 11.7852Z"
          fill="#787D9B"
        />
      </svg>
    </div>
  );
};

export default Geekosophers;
