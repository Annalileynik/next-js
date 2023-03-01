import Head from 'next/head';

import Counter from "./Counter";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
          <Counter/>
      </main>
    </div>
  )
}
