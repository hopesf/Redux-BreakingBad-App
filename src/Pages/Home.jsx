import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';
import PopularCharacters from '../components/Characters/PopularCharacters';
import AboutBrBa from '../components/AboutBrBa';
import Navbar from '../components/Navbar';
import Stars from '../components/Stars';
import WalterWhite from '../components/Characters/WalterWhite';
import JessiePinkman from '../components/Characters/JessiePinkman';
import SkylerWhite from '../components/Characters/SkylerWhite';
import JuniorWhite from '../components/Characters/JuniorWhite';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const Home = () => {
  return (
    <>
      <Stars />
      <Navbar />
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <PopularCharacters />
            <AboutBrBa />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <WalterWhite />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(MoveIn(-1000, 0), Sticky(), Fade())}>
            <JessiePinkman />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(MoveIn(1000, 0), Sticky(), Fade())}>
            <SkylerWhite />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <JuniorWhite />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className="w-full flex flex-col justify-center items-center space-y-10">
              <span className="text-white font-extrabold tracking-widest text-7xl">Thanks For Visit!</span>
              <span className="text-white tracking-widest text-5xl">
                Created By{' '}
                <a href="https://github.com/hopesf" className="underline">
                  @Hopesf
                </a>
              </span>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};
export default Home;
