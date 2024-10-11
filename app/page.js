import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Portfolio of Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-8">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="mt-2 text-xl text-gray-700">A brief description about yourself.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc pl-5">
          <li>
            <a href="#" className="text-blue-500 underline">Project 1</a>: A brief description of your project.
          </li>
          <li>
            <a href="#" className="text-blue-500 underline">Project 2</a>: A brief description of your project.
          </li>
          <li>
            <a href="#" className="text-blue-500 underline">Project 3</a>: A brief description of your project.
          </li>
        </ul>
      </section>

      <footer className="mt-8">
        <p>Connect with me on <a href="#" className="text-blue-500 underline">LinkedIn</a> or <a href="#" className="text-blue-500 underline">GitHub</a>.</p>
      </footer>
    </div>
  );
}
