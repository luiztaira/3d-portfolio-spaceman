import SpacemanCanvas from "./Spaceman";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <div className="flex-1 lg:mb-0">
          <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
            LUIZ TAIRA
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className="font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
            デジタル <br /> ワールド 大好き
          </div>
        </div>
      </div>
      <img
        className="parallax__stars"
        src="/3d-portfolio-spaceman/parallax/1Stars.svg"
        alt="stars"
      />
      <img
        className="parallax__planets"
        src="/3d-portfolio-spaceman/parallax/2Planets.svg"
        alt="planets"
      />
      <img
        className="parallax__mountain1"
        src="/3d-portfolio-spaceman/parallax/3Mountain.svg"
        alt="mountain"
      />
      <img
        className="parallax__mountain2"
        src="/3d-portfolio-spaceman/parallax/4Mountain.svg"
        alt="mountain"
      />
      <img
        className="parallax__crater"
        src="/3d-portfolio-spaceman/parallax/5Crater.svg"
        alt="crater"
      />
      <img
        className="parallax__sun"
        src="/3d-portfolio-spaceman/parallax/6Sun.svg"
        alt="sun"
      />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
