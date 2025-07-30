'use client';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';

export default function GitHubContributions() {
  return (
    <div className="p-4 text-black max-w-[100vw] overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>

      <div className="w-[max-content] min-w-[640px] sm:min-w-[unset]">
        <GitHubCalendar username="Vijendra2016" />
      </div>

      <div className="mt-6 flex items-center gap-2">
        <FaGithub className="text-2xl" />
        <a
          href="https://github.com/Vijendra2016"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium hover:underline"
        >
          github.com/Vijendra2016
        </a>
      </div>
    </div>
  );
}
