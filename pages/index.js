import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";

import Link from "next/link";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Home({ data }) {
  return (
    <Layout>
      <Header />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <div className="mx-auto w-full h-[100vh] md:px-8">
            <div className="bg-image h-full pt-[4rem]">
              <m.article variants={fade}>
                <div className="logo spin">
                  <img className="logo-img" src="uefalogo.png" />
                </div>

                <h1 className="mb-4 text-[#222] text-5xl text-center font-bold md:text-[120px] uppercase">
                  <span className="text-[80px]">2022</span> <br />
                  Champions League
                </h1>
              </m.article>
            </div>
          </div>

          <section className="py-10">
            <div className="container-lg">
              <div className="heading">
                <div className="content">
                  <h3 className="text-5xl">Top Scorers</h3>
                </div>
              </div>
              <div className="section">
                <div className="m-auto row flex-col gray text-black scorers w-2/3 light-gradient">
                  <div className="row-item">
                    img
                    <p className="text-2xl">Mbappe</p>
                    <div className="border-2 border-black px-4 py-2 text-center rounded-xl">
                      <span className="text-3xl font-bold">7</span>
                      <br />
                      <span className="uppercase">goals</span>
                    </div>
                  </div>
                  <div className="row-item">
                    img
                    <p className="text-2xl">Salah</p>
                    <div className="border-2 border-black px-4 py-2 text-center rounded-xl">
                      <span className="text-3xl font-bold">7</span>
                      <br />
                      <span className="uppercase">goals</span>
                    </div>
                  </div>
                  <div className="row-item">
                    {" "}
                    img
                    <p className="text-2xl">Someone</p>
                    <div className="border-2 border-black px-4 py-2 text-center rounded-xl">
                      <span className="text-3xl font-bold">7</span>
                      <br />
                      <span className="uppercase">goals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="divider-line">
            <div className="border-t border-[#ebebeb]"></div>
          </div>

          <section className="relative py-16">
            <div class="c-dQGayJ">
              <svg
                fill="none"
                height="1260"
                viewBox="0 0 1145 1260"
                width="1145"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <g clip-path="url(#clip0_1_2)">
                  <g filter="url(#filter0_f_1_2)" opacity="0.9">
                    <path
                      d="M268.827 1330C521.125 1330 725.653 1126.07 725.653 874.5C725.653 622.934 521.125 419 268.827 419C16.5283 419 -188 622.934 -188 874.5C-188 1126.07 16.5283 1330 268.827 1330Z"
                      fill="url(#paint0_linear_1_2)"
                    ></path>
                  </g>
                </g>
                <defs>
                  <filter
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="1511"
                    id="filter0_f_1_2"
                    width="1513.65"
                    x="-488"
                    y="119"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      result="effect1_foregroundBlur_1_2"
                      stdDeviation="100"
                    ></feGaussianBlur>
                  </filter>

                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_1_2"
                    x1="268.827"
                    x2="-42.0632"
                    y1="419"
                    y2="1198.21"
                  >
                    <stop stop-color="#53C1DE"></stop>
                    <stop
                      offset="1"
                      stop-color="#8F6FDB"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clip0_1_2">
                    <rect fill="white" height="1260" width="1145"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="container-lg">
              <div className="heading">
                <div className="content">
                  <h3 className="text-5xl">Round of 16</h3>
                  <div className="button text-lg rounded-xl border-2 px-4 py-2">
                    First Leg
                  </div>
                </div>
              </div>
              <div className="section py-10">
                <div className="card-container w-1/4">
                  <div className="card card-black">
                    <div className="card-header font-bold">
                      <p>Feb 14</p>
                    </div>

                    <div className="flex flex-row  w-full flex-wrap justify-center items-center">
                      <div className="match-wrapper border-r border-gray flex-1">
                        <div className="team">Milan</div>
                        <div className="team">Tottenham</div>
                      </div>
                      <div className="time-wrapper mx-5">15:00</div>
                    </div>
                    <div className="flex flex-row w-full flex-wrap justify-center items-center my-10">
                      <div className="match-wrapper  border-r border-gray flex-1">
                        <div className="team">PSG</div>
                        <div className="team">Bayern Munich</div>
                      </div>
                      <div className="time-wrapper mx-5 ">15:00</div>
                    </div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card card-black">
                    <div className="card-header">
                      <p>Feb 15</p>
                    </div>

                    <div className="flex flex-row  w-full flex-wrap justify-center items-center">
                      <div className="match-wrapper border-r border-gray flex-1">
                        <div className="team">Club Brugge</div>
                        <div className="team">Benfica</div>
                      </div>
                      <div className="time-wrapper mx-5">15:00</div>
                    </div>
                    <div className="flex flex-row w-full flex-wrap justify-center items-center my-10">
                      <div className="match-wrapper  border-r border-gray flex-1">
                        <div className="team">Borussia Dortmund</div>
                        <div className="team">Chelsea</div>
                      </div>
                      <div className="time-wrapper mx-5 ">15:00</div>
                    </div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card card-black">
                    <div className="card-header">
                      <p>Feb 21</p>
                    </div>

                    <div className="flex flex-row  w-full flex-wrap justify-center items-center">
                      <div className="match-wrapper border-r border-gray flex-1">
                        <div className="team">Liverpool</div>
                        <div className="team">Real Madrid</div>
                      </div>
                      <div className="time-wrapper mx-5">15:00</div>
                    </div>
                    <div className="flex flex-row w-full flex-wrap justify-center items-center my-10">
                      <div className="match-wrapper  border-r border-gray flex-1">
                        <div className="team">Eintracht Frankfurt</div>
                        <div className="team">Napoli</div>
                      </div>
                      <div className="time-wrapper mx-5 ">15:00</div>
                    </div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card card-black">
                    <div className="card-header">
                      <p>Feb 22</p>
                    </div>

                    <div className="flex flex-row  w-full flex-wrap justify-center items-center">
                      <div className="match-wrapper border-r border-gray flex-1">
                        <div className="team">RB Leipzig</div>
                        <div className="team">Manchester City</div>
                      </div>
                      <div className="time-wrapper mx-5">15:00</div>
                    </div>
                    <div className="flex flex-row w-full flex-wrap justify-center items-center my-10">
                      <div className="match-wrapper  border-r border-gray flex-1">
                        <div className="team">Inter</div>
                        <div className="team">FC Porto</div>
                      </div>
                      <div className="time-wrapper mx-5 ">15:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="divider-line">
            <div className="border-t border-[#ebebeb]"></div>
          </div>

          <section className="relative py-16">
            <div className="container-lg">
              <div className="heading">
                <div className="content">
                  <h3 className="text-5xl">Group Stage</h3>
                  <p className="text-lg">Dates</p>
                </div>
              </div>
              <div className="section">
                <div className="card-container w-1/4">
                  <div className="card light-gradient">
                    <div className="card-header">Group A</div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card light-gradient">
                    <div className="card-header">Group B</div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card light-gradient">
                    <div className="card-header">Group C</div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card light-gradient">
                    <div className="card-header">Group D</div>
                  </div>
                </div>
              </div>
              <div className="section md:my-10">
                <div className="card-container w-1/4">
                  <div className="card light-gradient">
                    <div className="card-header">Group A</div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card llightgradient">
                    <div className="card-header">Group B</div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card llightgradient">
                    <div className="card-header">Group C</div>
                  </div>
                </div>
                <div className="card-container w-1/4">
                  <div className="card llightgradient">
                    <div className="card-header">Group D</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-iMCULe">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                opacity={0.3}
              >
                <defs>
                  <filter
                    id="a"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feGaussianBlur
                      stdDeviation={70}
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                      in="SourceGraphic"
                      result="blur"
                    />
                  </filter>
                </defs>
                <g filter="url(#a)">
                  <ellipse
                    rx={177.5}
                    ry={182}
                    cx={347.747}
                    cy={316.764}
                    fill="hsla(128, 93%, 54%, 1)"
                  />
                  <ellipse
                    rx={177.5}
                    ry={182}
                    cx={391.436}
                    cy={512.457}
                    fill="hsla(150, 69%, 15%, 1)"
                  />
                </g>
              </svg>
            </div>
          </section>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const headers = {
//     "Content-Type": "application/json",
//     "X-Auth-Token": "a4c42739440343e38f96e46f5f8de9df",
//   };

//   const res = await fetch(
//     "https://api.football-data.org/v4/competitions/CL/standings",
//     { method: "GET", headers: headers }
//   );
//   const data = await res.json();
//   console.log(data);

//   return { props: { data } };
// }
