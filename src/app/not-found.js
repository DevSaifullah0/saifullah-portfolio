import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-600">
          Error 404
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold md:text-5xl">
          Page not
          <span className="text-gray-500"> found.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. You can return home or explore my React Native frontend
          projects.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-gray-700 px-7 py-4 font-semibold text-white transition hover:border-white"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}