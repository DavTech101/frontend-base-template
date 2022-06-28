import tw from 'twin.macro';

// MAIN INDENTATION
export const Indent = tw.div`mx-10`;

// BOX INDENTATION
export const BoxIndent = tw.div`m-10`;

// SECTION WITH INDENTATION
export const SectionWrapper = tw(
  Indent
)`flex flex-col items-start justify-center py-10`;

export default Indent;
