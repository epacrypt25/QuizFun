"use client";

import { ConnectButton } from "@/components/ui/ConnectButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full bg-white px-6">
        <div className="grid grid-cols-3 items-center py-4 max-w-5xl mx-auto">
          <div className="flex items-center">
            <div className="text-2xl font-extrabold tracking-tight">
              Edu<span className="text-black">Fun</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="#home"
              className="text-md font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-md font-medium transition-colors"
            >
              Courses
            </a>
            <a
              href="#about"
              className="text-md font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-md font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center justify-end">
            <ConnectButton />
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center px-6 py-20 text-gray-900">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center rounded-3xl p-8">
          <div className="flex flex-col md:w-[55%]">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
              Get Ready for a Fun Quiz!
            </h1>
            <p className="text-base text-gray-600 text-justify mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem laudantium asperiores exercitationem libero veniam molestias vero, offices alias eligendi natus eum architecto.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/quiz"
                className="bg-purple-600 text-sm text-white px-6 py-3.5 rounded-xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-600/20 transition-all text-center inline-block"
              >
                Get Started
              </a>
              <a
                href="/quiz"
                className="bg-yellow-400 text-sm shadow-lg shadow-yellow-600/20 text-gray-800 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-all text-center inline-block border border-gray-200"
              >
                View Leaderboard
              </a>
            </div>
          </div>

          <div className="md:w-[45%] w-full flex flex-col justify-center bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Join the community
            </h2>
            <p className="text-sm text-blue-700 leading-relaxed">
              Connect with thousands of learners worldwide, share your custom quizzes, and climb to the top of the leaderboard.
            </p>
          </div>
        </div>

        <div className="w-full max-w-5xl flex justify-start mt-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Explore Our Quiz Categories
          </h1>
        </div>

        <div className="max-w-5xl w-full flex flex-col md:flex-row bg-gray-100 rounded-3xl mt-8 p-8 md:p-12 items-center gap-8 shadow-xl shadow-purple-900/10">
          <div className="flex flex-col md:w-[40%] w-full">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Start Your Quiz Adventure
            </h1>
          </div>
          <div className="md:w-[60%] w-full flex flex-col items-start">
            <p className="text-base text-gray-600 mb-6 text-justify leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, ab? Sit libero perspiciatis debitis magni natus minima quia quo, esse vero ex consequatur veniam.
            </p>
            <a
              href="/quiz"
              className="w-fit bg-purple-500 text-sm rounded-xl text-black px-6 py-3 font-bold hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all text-center"
            >
              Go for started quiz
            </a>
          </div>
        </div>

        <div className="w-full max-w-5xl flex justify-start mt-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Our Milestones
          </h1>
        </div>

        <div className="max-w-5xl w-full flex flex-row mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Total Users
              </span>
              <span className="text-3xl font-extrabold text-blue-600">
                150,000+
              </span>
            </div>

            <div className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Quizzes Finished
              </span>
              <span className="text-3xl font-extrabold text-purple-600">
                480,000+
              </span>
            </div>

            <div className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Prizes Awarded
              </span>
              <span className="text-3xl font-extrabold text-green-600">
                Rp 500M+
              </span>
            </div>

            <div className="flex flex-col bg-white border border-gray-100 p-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">
                Total Funding
              </span>
              <span className="text-3xl font-extrabold text-indigo-600">
                $2.5M+
              </span>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
