import HeroIntro from "@/app/components/HeroIntro";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Articles from "./components/Articles";
import GithubRepos from "./components/GithubRepos";
import SpotifyPlaylist from "./components/SpotifyPlaylist";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <HeroIntro />
      <About />
      <Skills />
      <WorkExperience />
      <Articles/>
      <GithubRepos />
    </main>
  )
}