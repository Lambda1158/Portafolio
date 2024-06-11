import Landing from "./landing";
import Header from "./components/header/header";
import TextAnimation from "./motion/textAnimated";
import Wrapper from "./components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <section key="home" className="bg-background  min-h-screen">
        <div className=" mx-auto max-w-[1285px] px-3">
          <Header />
          <div className="mx-auto py-10 px-5">
            <TextAnimation>
              <Landing />
            </TextAnimation>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
