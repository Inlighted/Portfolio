import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="gradient-text font-display text-7xl font-bold">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold">
        This page drifted out of the vector space
      </h1>
      <p className="mt-2 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist. Head back home to
        explore projects, services and tutoring.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
