export default async function IntroVideo({ dialogTitle }: { dialogTitle: string }) {
  return (
    <iframe
      className="aspect-video w-full rounded-md border-0"
      src="https://www.youtube-nocookie.com/embed/fHBUjQCIiqg?si=uBj1TNDTPR7Xgcuk"
      title={dialogTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
}
