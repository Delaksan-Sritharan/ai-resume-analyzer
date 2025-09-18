import type { Route } from "./+types/home";
import NavBar from "~/components/ NavBar";
import {resumes} from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DelaProof" },
    { name: "description", content: "Built by Dela, built for your career" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <NavBar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    </section>

    {resumes.map((resume)=>(
        <div>
          <h1>{resume.jobTitle}</h1>
        </div>
    ))}
  </main>;
}
