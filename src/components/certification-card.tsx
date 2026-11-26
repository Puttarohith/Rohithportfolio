import Image from "next/image";
import Link from "next/link";

interface CertificationCardProps {
  title: string;
  issuer: string;
  logo: string;
  certificate: string;
}

export function CertificationCard({
  title,
  issuer,
  logo,
  certificate,
}: CertificationCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Logo */}
      <div className="relative h-56 w-full bg-muted">
        <Image
          src={logo}
          alt={issuer}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        <div className="flex-1">
          <h3 className="min-h-[84px] text-lg font-bold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {issuer}
          </p>
        </div>

        <Link
          href={certificate}
          target="_blank"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          View Certificate →
        </Link>

      </div>

    </div>
  );
}