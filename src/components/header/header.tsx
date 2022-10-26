import { $, component$, useClientEffect$, useStore } from '@builder.io/qwik';
import logo from '../../assets/logo512.png';

interface NavigationItems {
  id: number;
  name: string;
  href: string;
  logo?: string;
}

interface NavigationState {
  menuIsOpen: boolean;
  isLargeScreen: boolean;
  navigationItems: NavigationItems[];
}

export const Navbar = component$(() => {
  const initialState: NavigationState = {
    menuIsOpen: false,
    isLargeScreen: true,
    navigationItems: [
      { id: 1, name: 'Home', href: 'home', logo },
      { id: 2, name: 'About', href: 'about' },
      { id: 3, name: 'Résumé', href: 'resume' },
      // { id: 4, name: 'Contact', href: 'contact' },
    ],
  };

  const state = useStore(initialState);

  useClientEffect$(({ track }) => {
    track(() => state.menuIsOpen);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          // Firefox implements `contentBoxSize` as a single content rect, rather than an array
          const contentBoxSize: ResizeObserverSize = Array.isArray(
            entry.contentBoxSize
          )
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;

          state.isLargeScreen = contentBoxSize.inlineSize >= 1024;

          if (state.menuIsOpen && state.isLargeScreen) {
            state.menuIsOpen = false;
          }
        }
      }
    });

    resizeObserver.observe(document.body);

    document.body.style.overflow = state.menuIsOpen ? 'hidden' : 'visible';
  });

  return (
    <nav
      className={`fixed z-10 flex w-full animate-slide-top-down animate-fade-in flex-wrap items-start justify-end p-6 lg:p-0  ${
        state.menuIsOpen
          ? `scroll-lock max-h-screen min-h-screen bg-indigo-50/10 backdrop-blur-2xl transition duration-500 ease-in-out`
          : `transition duration-1000 ease-in-out`
      }`}
    >
      <div className="block animate-slide-top-down animate-fade-in lg:hidden">
        <button
          onClick$={() => (state.menuIsOpen = !state.menuIsOpen)}
          className="relative w-10 h-10 text-indigo-900 bg-white rounded-full focus:outline-none"
        >
          <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 w-5 transform bg-current transition-all duration-500 ease-in-out ${
                state.menuIsOpen ? 'rotate-45 ' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 w-5 transform bg-current transition-all duration-500 ease-in-out ${
                state.menuIsOpen ? 'opacity-0 ' : ''
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 w-5 transform bg-current transition-all duration-500 ease-in-out ${
                state.menuIsOpen ? '-rotate-45 ' : 'translate-y-1.5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      <div
        className={`w-full flex-grow animate-slide-top-down animate-fade-in lg:flex lg:w-auto lg:items-center ${
          state.menuIsOpen ? '' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center justify-end flex-1 list-reset lg:flex-row lg:bg-indigo-50/10 lg:backdrop-blur-2xl">
          {state.navigationItems.map((navItem: NavigationItems) => {
            return <NavItem detail={navItem} state={state}></NavItem>;
          })}
        </ul>
      </div>
    </nav>
  );
});

export const NavItem = component$(
  (props: { detail: NavigationItems; state: NavigationState }) => {
    const scrollTo = $((href: string) => {
      const element = document.getElementById(href);
      if (element) {
        const yOffset = props?.state?.isLargeScreen ? -80 : 0;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        if (!props?.state?.isLargeScreen) {
          props.state.menuIsOpen = false;
        }
      }
    });

    const isLogo = props.detail.logo;

    const classes = `w-full text-2xl font-semibold tracking-wider text-center text-white uppercase cursor-pointer bg-indigo-50/10 hover:bg-indigo-900/60 hover:text-indigo-100 my-2 lg:my-0 ${
      isLogo ? `flex items-center justify-center p-1` : `p-5`
    }`;

    return (
      <li
        key={props.detail.id}
        className={`${classes}`}
        onClick$={() => scrollTo(props.detail.href)}
      >
        {isLogo ? (
          <img src={logo} className="w-16 h-16" alt="Taylor Engel logo" />
        ) : (
          <span>{props.detail.name}</span>
        )}
      </li>
    );
  }
);

export default Navbar;
