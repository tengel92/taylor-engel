import { component$ } from '@builder.io/qwik';
import introPicture from '../../assets/intro-picture.jpg';

export const About = component$(() => {
  return (
    <section
      id="about"
      className="max-w-screen-md min-h-screen mx-auto text-white animate-fade-in"
    >
      <h1 className="p-4 text-3xl font-extrabold text-indigo-200 sm:text-5xl">
        About Me
      </h1>

      <div className="flex flex-col items-center lg:flex-row">
        <div className="p-4 basis-3/5">
          <p className="pt-4 text-sm lg:text-lg">
            I am a senior full-stack software engineer working at PwC. I
            currently spend more time on front-end development and lead a small
            team of software engineers. We build, maintain and improve features
            for an AI driven, voice enabled, virtual assistant.{' '}
          </p>
          <p className="pt-4 text-sm lg:text-lg">
            Outside of work my hobbies include traveling. I even completed my
            private pilot license so I can accomplish even more traveling and
            new adventures. I have been to countries as exotic as South Africa
            and Iceland, both of which rank up there as my favorite destinations
            I’ve ever been. I also enjoy traveling to visit friends and family
            located all over United States and world.
          </p>
        </div>
        <div className="group flex h-1/2 w-1/2 basis-2/5 justify-center overflow-hidden rounded-3xl border-2 border-indigo-900 shadow-[2px_4px_4px_4px_rgba(49,46,129,1)]  lg:h-full lg:w-full">
          <img
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            src={introPicture}
            alt="Taylor Engel"
          />
        </div>
      </div>
    </section>
  );
});

export default About;
