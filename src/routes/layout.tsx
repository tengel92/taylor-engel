import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main className="w-full bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-900">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
