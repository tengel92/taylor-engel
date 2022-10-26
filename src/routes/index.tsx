import { component$ } from '@builder.io/qwik';
import type { DocumentHead, DocumentMeta } from '@builder.io/qwik-city';
import About from '~/components/about/about';
import Intro from '~/components/intro/intro';
import Resume from '~/components/resume/resume';

export default component$(() => {
  return (
    <>
      <Intro></Intro>
      <About></About>
      <Resume></Resume>
    </>
  );
});

const meta: DocumentMeta = {
  name: 'description',
  content: 'Taylor Engel Website. Learn more about Taylor Engel his resume',
};

export const head: DocumentHead = {
  title: 'Taylor Engel - Home',
  meta: [meta],
};
