import { component$, useStore } from '@builder.io/qwik';

interface IntroState {
  userHasScrolled: boolean;
}

export const Intro = component$(() => {
  const intoTextOptions = [
    `Full Stack Software Engineer`,
    `I build modern web & mobile applications`,
  ];

  const initialState: IntroState = {
    userHasScrolled: false,
  };

  const state = useStore(initialState);

  return (
    <section
      window:onScroll$={() => (state.userHasScrolled = true)}
      className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen mx-auto font-semibold text-white animate-tracking-in-expand-fwd-top"
      id="home"
    >
      <div className="mt-auto">
        <p className="text-sm lg:text-lg">Hi, my name is</p>
        <h1 className="pb-4 text-5xl font-extrabold text-transparent bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 bg-clip-text sm:text-8xl">
          Taylor Engel
        </h1>
        <h2 className="lg:text-2xl">
          I build modern web & mobile applications
        </h2>
      </div>

      <div className="mt-auto animate-bounce">
        <div
          className={`flex flex-col items-center pb-3 ${
            state.userHasScrolled ? `hidden` : `visible`
          }`}
        >
          <div className="text-indigo-400">scroll down</div>
          <div className="text-xl text-indigo-300 ">&darr;</div>
        </div>
      </div>
    </section>
  );
});

export default Intro;
