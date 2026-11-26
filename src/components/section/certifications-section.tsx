import BlurFade from "@/components/magicui/blur-fade";
import { CertificationCard } from "@/components/certification-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />

            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Certifications
              </span>
            </div>

            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              My Certifications
            </h2>

            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Professional certifications that validate my knowledge in AI,
              Robotics, Networking, Cloud Computing, and Software Development.
            </p>
          </div>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-fr">
          {DATA.certifications.map((certificate, id) => (
            <BlurFade
              key={certificate.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
            <CertificationCard
                title={certificate.title}
                issuer={certificate.issuer}
                logo={certificate.logo}
                certificate={certificate.certificate}
            />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}