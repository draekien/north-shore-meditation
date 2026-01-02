import { baseKeywords } from "@/lib/constants";
import { getEvents } from "@/lib/contentful-api";
import { paginationParamsSchema } from "@/lib/schemas";
import { GlobalPageProps } from "@/lib/types";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { eventFiltersSchema } from "./schemas";
import { EventsList } from "@/components/events-list";
import { Suspense } from "react";

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    metadataBase: new URL('https://www.northshoremeditation.au'),
    title: 'Events',
    description: "Discover upcoming meditation events at North Shore Meditation. Join guided sessions, workshops, and retreats designed to reduce stress, build clarity, and support real-world mindfulness practice",
    keywords: [...baseKeywords, 'events'],
    alternates: {
      canonical: `/${lang}/events`,
      languages: {
        en: '/en/events',
      },
    },
    openGraph: {
      url: `/${lang}/events`,
    },
  };
}

export default async function Page({ searchParams, params }: GlobalPageProps) {
  if (!searchParams) throw new Error("Missing search params");

  const search = await searchParams;

  const { page } = paginationParamsSchema.parse(search);
  const filters = eventFiltersSchema.parse(search);

  const { lang } = await params;
  const { isEnabled: preview } = await draftMode();

  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <EventsList page={page} {...filters} preview={preview} />
    </Suspense>
  )
}
