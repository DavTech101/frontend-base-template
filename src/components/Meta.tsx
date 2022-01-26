import Head from 'next/head';

type Props = {
  description: string;
  keywords: string;
  title: string;
} & typeof defaultProps;

const defaultProps = {
  title: 'Esi Views',
  keywords: 'Salons, booking, beauty',
  description: 'Find and book local salons',
};

const Meta = ({ description, keywords, title }: Props) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link rel='icon' href='../favicon.ico' />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = defaultProps;

export default Meta;