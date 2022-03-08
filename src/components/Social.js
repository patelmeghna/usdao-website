import React from 'react';
import './social.scss';
import { Col, Row } from "react-bootstrap";

const Social = (props) => {
  return (
    <>
      <div className="social">
        <p className="title-line text-center mb-5">
          <span>{props.socialHighlight}</span> {props.socialTitle}
        </p>

        <Row className="gy-5">
          <Col md={3} className="mb-5">
            <a href="/" target="_blank" className="social-wrap">
              <div className="social-link">
                <svg
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.179 0.694139L2.07669 12.3047C0.0221543 13.129 0.0343396 14.2749 1.7022 14.7859L9.20981 17.1292L12.0824 25.9363C12.4316 26.9002 12.2595 27.2825 13.2717 27.2825C14.0529 27.2825 14.3994 26.9264 14.8345 26.5014C15.1112 26.2306 16.7539 24.6335 18.5881 22.8502L26.3974 28.6201C27.8344 29.4129 28.872 29.0022 29.2298 27.2855L34.3561 3.12875C34.8809 1.02458 33.5539 0.0701444 32.179 0.694139ZM10.388 16.5908L27.3102 5.91448C28.155 5.40216 28.9296 5.6776 28.2936 6.24212L13.8038 19.3156L13.2396 25.3331L10.388 16.5908Z"
                    fill="#F87A11"
                  />
                </svg>
                Telegram
              </div>
            </a>
          </Col>

          <Col md={3}>
            <a href="/" target="_blank" className="social-wrap">
              <div className="social-link">
                <svg
                  width="35"
                  height="40"
                  viewBox="0 0 35 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.8854 39.8338L30.6313 36.0838L28.2334 33.8546L25.6979 31.5004L26.7396 35.165H4.30628C2.05964 35.157 0.244264 33.3304 0.250014 31.0838V4.32751C0.246566 2.0825 2.06127 0.258467 4.30628 0.250427H30.8292C33.0742 0.258467 34.8889 2.0825 34.8854 4.32751V39.8338ZM25.4584 22.1421C24.5799 23.3203 23.3152 24.1521 21.8854 24.4921C22.4729 25.2421 23.1813 26.09 23.1875 26.0983C25.5773 26.1489 27.8402 25.0249 29.2438 23.09C29.1719 19.079 28.1978 15.1356 26.3938 11.5525C24.8055 10.3062 22.8722 9.57883 20.8563 9.46918H20.8334L20.5563 9.78584C22.3569 10.2695 24.0361 11.1254 25.4854 12.2983C23.6413 11.2846 21.6176 10.6393 19.5271 10.3983C18.1984 10.2508 16.8568 10.2641 15.5313 10.4379C15.4376 10.4398 15.3442 10.4495 15.2521 10.4671H15.1938C13.6403 10.646 12.1246 11.0678 10.7021 11.7171C9.98961 12.0442 9.55211 12.2817 9.53336 12.29C9.51461 12.2983 9.53336 12.29 9.53336 12.2754C11.0706 11.0664 12.8441 10.1927 14.7396 9.71084L14.5313 9.47334H14.5188C12.5029 9.58326 10.5697 10.3106 8.98128 11.5567C7.17066 15.1374 6.1962 19.0823 6.13128 23.0942C7.51739 25.0418 9.78336 26.1701 12.1729 26.1025C12.1729 26.1025 12.9188 25.1942 13.5 24.4588C12.1063 24.1085 10.8782 23.2834 10.0271 22.1254C10.0417 22.1358 10.2479 22.2754 10.5813 22.4588C10.6037 22.4851 10.6314 22.5064 10.6625 22.5213C10.6889 22.5395 10.7168 22.5556 10.7459 22.5692C10.7788 22.5841 10.8102 22.6023 10.8396 22.6233C11.3044 22.8796 11.7869 23.1023 12.2834 23.29C13.2273 23.6638 14.2036 23.9497 15.2 24.1442C16.0724 24.3087 16.9581 24.3923 17.8459 24.3942C18.6782 24.3941 19.5088 24.3174 20.3271 24.165C21.3126 23.992 22.2751 23.7068 23.1959 23.315C23.9912 23.0091 24.75 22.6157 25.4584 22.1421ZM21.2125 21.2525C20.3061 21.3316 19.4442 20.8461 19.0419 20.03C18.6397 19.2139 18.7797 18.2346 19.3945 17.5639C20.0092 16.8931 20.9727 16.6686 21.8206 16.9984C22.6686 17.3282 23.2271 18.1448 23.2271 19.0546C23.273 20.2169 22.3724 21.1985 21.2104 21.2525H21.2125ZM13.9875 21.2525C12.8476 21.1532 11.9729 20.1988 11.9729 19.0546C11.9729 17.9104 12.8476 16.956 13.9875 16.8567C14.5126 16.8583 15.0147 17.0725 15.3792 17.4504C15.7928 17.8798 16.0178 18.4565 16.0042 19.0525C16.0524 20.2168 15.1496 21.2007 13.9854 21.2525H13.9875Z"
                    fill="#F87A11"
                  />
                </svg>
                Discord
              </div>
            </a>
          </Col>

          <Col md={3}>
            <a href="/" target="_blank" className="social-wrap">
              <div className="social-link">
                <svg
                  width="42"
                  height="41"
                  viewBox="0 0 42 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0534 0.167115C10.8595 0.165805 2.16967 7.55875 0.537551 17.6211C-1.09456 27.6835 4.81296 37.4441 14.4846 40.665C15.5263 40.8525 15.8992 40.2129 15.8992 39.6629C15.8992 39.1692 15.8826 37.8609 15.8763 36.1213C10.0951 37.3713 8.87422 33.3338 8.87422 33.3338C8.49363 32.0774 7.67542 30.9991 6.56797 30.2942C4.69297 29.0046 6.71172 29.0338 6.71172 29.0338C8.04646 29.2168 9.2212 30.0076 9.89297 31.1754C10.4616 32.2093 11.4195 32.9733 12.554 33.2976C13.6885 33.6219 14.9055 33.4797 15.9346 32.9025C16.0313 31.8484 16.5003 30.8631 17.2576 30.1234C12.6451 29.6004 7.79505 27.8171 7.79505 19.8525C7.76945 17.7925 8.53443 15.8011 9.93255 14.2879C9.29995 12.4948 9.37445 10.5281 10.1409 8.78795C10.1409 8.78795 11.8846 8.22753 15.8534 10.915C19.2572 9.98171 22.8495 9.98171 26.2534 10.915C30.2242 8.22545 31.9659 8.78795 31.9659 8.78795C32.7359 10.5272 32.8104 12.4954 32.1742 14.2879C33.5775 15.8009 34.3418 17.7976 34.3076 19.8609C34.3076 27.8463 29.4534 29.6004 24.8242 30.115C25.8228 31.136 26.3349 32.5366 26.2305 33.9609C26.2305 36.74 26.2055 38.9817 26.2055 39.6629C26.2055 40.2192 26.5763 40.865 27.6367 40.6609C37.3044 37.4345 43.2056 27.6733 41.5701 17.6136C39.9346 7.55389 31.2452 0.164783 21.0534 0.167115Z"
                    fill="#F87A11"
                  />
                </svg>
                Github
              </div>
            </a>
          </Col>

          <Col md={3}>
            <a href="/" target="_blank" className="social-wrap">
              <div className="social-link">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9994 41.8338C9.49342 41.8338 0.166016 32.5064 0.166016 21.0005C0.166016 9.49452 9.49342 0.167114 20.9994 0.167114C32.5053 0.167114 41.8327 9.49452 41.8327 21.0005C41.8201 32.5011 32.5 41.8212 20.9994 41.8338ZM10.1806 17.965C8.93398 17.9657 7.81398 18.727 7.35464 19.8859C6.8953 21.0449 7.18962 22.3667 8.09727 23.2213C8.3372 23.4485 8.61316 23.6344 8.91393 23.7713C8.88777 24.0756 8.88777 24.3816 8.91393 24.6859C8.91393 29.3525 14.3618 33.1484 21.0577 33.1484C27.7535 33.1484 33.2035 29.3525 33.2035 24.6859C33.2278 24.3815 33.2278 24.0757 33.2035 23.7713C34.468 23.1569 35.1368 21.7474 34.8129 20.3794C34.489 19.0114 33.2592 18.0514 31.8535 18.0692H31.7431C30.9968 18.0968 30.2869 18.3987 29.7494 18.9171C27.3796 17.3057 24.5936 16.4156 21.7285 16.3546L23.0827 9.85462L27.5369 10.7921C27.6516 11.8485 28.543 12.6492 29.6056 12.6504C29.6815 12.6504 29.7573 12.6462 29.8327 12.6379C30.9373 12.5271 31.7609 11.5695 31.7053 10.4607C31.6498 9.35197 30.7345 8.4817 29.6244 8.4817C29.5456 8.48359 29.467 8.48985 29.3889 8.50045C28.7286 8.57059 28.1413 8.95131 27.8077 9.52545L22.7077 8.50045C22.6625 8.49076 22.6164 8.48587 22.5702 8.48586C22.269 8.48945 22.01 8.70008 21.9452 8.9942L20.3869 16.2296C17.4865 16.2707 14.6617 17.1608 12.2619 18.79C11.6994 18.2586 10.9544 17.9633 10.1806 17.965ZM21.3744 30.4254C21.2577 30.4254 21.1389 30.4254 21.0223 30.4254C20.9056 30.4254 20.7868 30.4254 20.6702 30.4254C18.9412 30.4189 17.2605 29.854 15.8785 28.815C15.7832 28.7 15.7378 28.5518 15.7523 28.4032C15.7667 28.2545 15.8399 28.1178 15.9556 28.0234C16.0564 27.9416 16.1821 27.8968 16.3118 27.8963C16.4417 27.8963 16.5676 27.9412 16.6681 28.0234C17.836 28.8791 19.2473 29.3384 20.6952 29.3338C20.7966 29.3338 20.898 29.3338 20.9994 29.3338C21.1223 29.3338 21.2473 29.3338 21.3702 29.3338C22.7993 29.3362 24.193 28.8886 25.3535 28.0546C25.4632 27.9426 25.6134 27.8795 25.7702 27.8795C25.927 27.8795 26.0771 27.9426 26.1868 28.0546C26.4128 28.2881 26.4081 28.6602 26.1764 28.888V28.8046C24.7937 29.8507 23.1082 30.4189 21.3744 30.4234V30.4254ZM25.8056 25.3338H25.7723L25.7889 25.2525C24.8725 25.19 24.1231 24.4983 23.9874 23.5898C23.8517 22.6814 24.3663 21.8009 25.2244 21.4732C26.0826 21.1456 27.053 21.4591 27.5573 22.2269C28.0616 22.9946 27.9638 24.0097 27.3223 24.6671C26.9493 25.0743 26.4283 25.3145 25.8764 25.3338H25.8035H25.8056ZM16.1452 25.1671C14.9946 25.1671 14.0619 24.2344 14.0619 23.0838C14.0619 21.9332 14.9946 21.0005 16.1452 21.0005C17.2958 21.0005 18.2285 21.9332 18.2285 23.0838C18.2285 24.2344 17.2958 25.1671 16.1452 25.1671Z"
                    fill="#F87A11"
                  />
                </svg>
                Reddit
              </div>
            </a>
          </Col>

          <Col md={3}>
            <a href="/" target="_blank" className="social-wrap">
              <div className="social-link">
                <svg
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.3222 7.15264C28.3339 7.45244 28.3377 7.75212 28.3377 8.05193C28.3377 17.1414 21.9437 27.6347 10.2513 27.6347C6.65957 27.6347 3.3198 26.49 0.505859 24.5412C1.00327 24.5957 1.50844 24.6367 2.02136 24.6367C4.99938 24.6367 7.74225 23.5327 9.91795 21.6793C7.13631 21.6385 4.7875 19.6352 3.97743 16.9097C4.36632 16.9915 4.7668 17.0325 5.17636 17.0325C5.75388 17.0325 6.31459 16.9508 6.85206 16.7873C3.94122 16.1605 1.74875 13.3805 1.74875 10.0418C1.74875 10.0009 1.74875 9.98722 1.74875 9.95996C2.60663 10.4642 3.58852 10.7774 4.63115 10.8183C2.92315 9.57824 1.8004 7.46604 1.8004 5.08124C1.8004 3.82752 2.11306 2.64188 2.66345 1.61983C5.7978 5.78982 10.4838 8.52897 15.7668 8.81514C15.6582 8.31093 15.6027 7.77959 15.6027 7.24812C15.6027 3.44607 18.4489 0.366211 21.9605 0.366211C23.7886 0.366211 25.4398 1.1976 26.5987 2.53309C28.0496 2.23329 29.4088 1.66098 30.6387 0.870585C30.162 2.47862 29.1555 3.82745 27.8403 4.67235C29.1271 4.50883 30.3545 4.14116 31.4928 3.59607C30.6388 4.97244 29.5638 6.18509 28.3222 7.15264Z"
                    fill="#F87A11"
                  />
                </svg>
                Twitter
              </div>
            </a>
          </Col>

          <Col md={3}>
            <a href="/" target="_blank" className="social-wrap">
              <div className="social-link">
                <svg
                  width="42"
                  height="24"
                  viewBox="0 0 42 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6685 12.0002C23.6685 18.5347 18.4073 23.8322 11.917 23.8322C5.42682 23.8322 0.166016 18.5363 0.166016 12.0002C0.166016 5.4641 5.42722 0.168579 11.917 0.168579C18.4069 0.168579 23.6685 5.4657 23.6685 12.0002ZM36.5599 12.0002C36.5599 18.1516 33.9291 23.1379 30.6842 23.1379C27.4393 23.1379 24.8085 18.15 24.8085 12.0002C24.8085 5.85036 27.4393 0.862492 30.6842 0.862492C33.9291 0.862492 36.5599 5.85036 36.5599 12.0002ZM41.8327 12.0002C41.8327 17.5116 40.9073 21.9791 39.7661 21.9791C38.6249 21.9791 37.6995 17.51 37.6995 12.0002C37.6995 6.49041 38.6249 2.02127 39.7665 2.02127C40.9081 2.02127 41.8327 6.48921 41.8327 12.0002Z"
                    fill="#F87A11"
                  />
                </svg>
                Medium
              </div>
            </a>
          </Col>

          <Col md={3}>
            <a href="/" target="_blank" className="social-wrap">
              <div className="social-link">
                <svg
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.179 0.694139L2.07669 12.3047C0.0221543 13.129 0.0343396 14.2749 1.7022 14.7859L9.20981 17.1292L12.0824 25.9363C12.4316 26.9002 12.2595 27.2825 13.2717 27.2825C14.0529 27.2825 14.3994 26.9264 14.8345 26.5014C15.1112 26.2306 16.7539 24.6335 18.5881 22.8502L26.3974 28.6201C27.8344 29.4129 28.872 29.0022 29.2298 27.2855L34.3561 3.12875C34.8809 1.02458 33.5539 0.0701444 32.179 0.694139ZM10.388 16.5908L27.3102 5.91448C28.155 5.40216 28.9296 5.6776 28.2936 6.24212L13.8038 19.3156L13.2396 25.3331L10.388 16.5908Z"
                    fill="#F87A11"
                  />
                </svg>
                Facebook
              </div>
            </a>
          </Col>

          <Col md={3}>
            <a href="/" target="_blank" className="social-wrap">
              <div className="social-link">
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.64906 7.54189C6.69458 7.54189 8.3528 5.88367 8.3528 3.83814C8.3528 1.79262 6.69458 0.134399 4.64906 0.134399C2.60354 0.134399 0.945312 1.79262 0.945312 3.83814C0.945312 5.88367 2.60354 7.54189 4.64906 7.54189Z"
                    fill="#F87A11"
                  />
                  <path
                    d="M11.7448 10.2791H17.8831V13.0911C17.8831 13.0911 19.5488 9.75967 24.081 9.75967C28.1239 9.75967 31.4729 11.7513 31.4729 17.8219V30.6231H25.1119V19.3731C25.1119 15.792 23.2001 15.3981 21.7432 15.3981C18.7197 15.3981 18.2021 18.006 18.2021 19.8402V30.6231H11.7448V10.2791Z"
                    fill="#F87A11"
                  />
                  <path
                    d="M1.42041 10.279H7.87771V30.623H1.42041V10.279Z"
                    fill="#F87A11"
                  />
                </svg>
                LinkedIn
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Social