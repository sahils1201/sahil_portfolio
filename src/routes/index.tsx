import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { AutomationSection } from "@/components/AutomationSection";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Volunteering } from "@/components/Volunteering";
import { BeyondIDE } from "@/components/BeyondIDE";
import { OutsideScreen } from "@/components/OutsideScreen";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


const title = "Sahil Sable — Developer, Product Builder & AI Automation";
const description =
  "Portfolio of Sahil Sable — Computer Science student, full-stack developer, product builder and AI automation enthusiast.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sahil Sable",
          jobTitle: "Developer, Product Builder",
          sameAs: [
            "https://github.com/sahils1201",
            "https://www.linkedin.com/in/sahilsable/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <AutomationSection />
        <About />
        <Experience />
        <Volunteering />
        <Skills />
        <BeyondIDE />

        <OutsideScreen />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
