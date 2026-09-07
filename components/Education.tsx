import { FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const qualifications = [
  { title: "Higher National Diploma in Computer Engineering", school: "Yaba College of Technology", location: "Lagos, Nigeria" },
  { title: "National Diploma in Electrical Engineering", school: "The Polytechnic Ibadan", location: "Ibadan, Nigeria" },
];

const credentials = [
  { title: "AWS Certified DevOps Engineer – Professional", issuer: "AWS", href: "https://www.credly.com/badges/29d1e5f0-fda6-41d5-949b-aeaf9b3bbc34/public_url" },
  { title: "Azure Administrator Associate", issuer: "Microsoft", href: "https://learn.microsoft.com/api/credentials/share/en-us/AhmedFatiu-0665/2440FA2EDC21B3AE?sharingId=5F82683ABF6A34CF" },
  { title: "AWS Certified Solutions Architect – Associate", issuer: "AWS", href: "https://www.credly.com/badges/48703549-83ed-43c0-bc77-822c53c50ae1/public_url" },
  { title: "DevOps Engineering: Advanced", issuer: "Udemy", href: null },
  { title: "Front-End Developer Career Path", issuer: "Scrimba", href: "https://v1.scrimba.com/certificate/uvr24WcQ/gfrontend" },
  { title: "Data Manipulation in JavaScript", issuer: "University of California, Davis · Coursera", href: "https://coursera.org/verify/S7XPQWYTM8R6" },
];

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-shell">
      <SectionTitle id="education-title" title="Education & credentials" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">Education</h3>
          <div className="space-y-4">
            {qualifications.map((qualification) => (
              <article key={qualification.title} className="surface">
                <h4 className="font-semibold text-white">{qualification.title}</h4>
                <p className="mt-3 text-textGreen">{qualification.school}</p>
                <p className="mt-1 text-sm text-textDark">{qualification.location}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">Certifications & courses</h3>
          <ul className="space-y-3">
            {credentials.map((credential) => (
              <li key={credential.title}>
                {credential.href ? (
                  <a href={credential.href} target="_blank" rel="noopener noreferrer"
                    className="surface group flex items-start justify-between gap-4 transition-colors hover:border-textGreen/50"
                    aria-label={"View " + credential.title + " credential (opens in a new tab)"}>
                    <div><h4 className="font-medium text-white group-hover:text-textGreen">{credential.title}</h4><p className="mt-2 text-sm text-textDark">{credential.issuer}</p></div>
                    <FaExternalLinkAlt aria-hidden="true" className="mt-1 shrink-0 text-textGreen" />
                  </a>
                ) : (
                  <div className="surface"><h4 className="font-medium text-white">{credential.title}</h4><p className="mt-2 text-sm text-textDark">{credential.issuer}</p></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
