import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Head>
        <title>Khalid - Portfolio</title>
        <meta name="description" content="Portfolio of Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-8">
        <h1 className="text-4xl font-bold">KHALID BOUYCHOU</h1>
        <p className="mt-2 text-xl text-gray-700">
        I am a full-stack developer specializing in React and Django, dedicated to creating web applications that combine seamless
        user experiences with robust backend systems. Proficient in modern JavaScript and Python, I focus on delivering efficient
        and impactful digital solutions while staying updated on industry trends.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc pl-5">
          <li>
            <a href="#" className="text-blue-500 underline">Ft_Transcendence</a>: A brief description of your project.
          </li>
          <li>
            <a href="#" className="text-blue-500 underline">Incetion</a>: A brief description of your project.
          </li>
          <li>
            <a href="#" className="text-blue-500 underline">IRC</a>: A brief description of your project.
          </li>
        </ul>
      </section>

      <footer className="mt-8">
        <p>Connect with me on <a href="https://www.linkedin.com/in/khalidbouychou/" className="text-blue-500 underline">LinkedIn</a> or <a href="https://github.com/khalidbouychou/" className="text-blue-500 underline">GitHub</a>.</p>
      </footer>
    </div>
  );
}
