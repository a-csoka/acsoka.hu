import { Navigate } from "react-router";
import type { Route } from "./+types/Home";

import React from "react";
import { Helmet } from "react-helmet";

import en from "../languages/en.json";
import hu from "../languages/hu.json";

const langMap = {
  en: en,
  hu: hu
} as const;

export function head({ params }: { params: { lang: string } }) {
    const lang = params.lang;
    const meta = langMap[lang as keyof typeof langMap] ?? langMap;
  
    return {
      title: meta.title,
      meta: [
        {
          name: "description",
          content: meta.description
        }
      ]
    };
  }

const allowedLangs = ["hu", "en"] as const;
export default function Home({params} : Route.LoaderArgs) {
    const isAlloweddLang = allowedLangs.includes(params.lang as typeof allowedLangs[number]);
    if (!isAlloweddLang) {
        return <Navigate to="/" replace />;
    }
    
    const meta = langMap[params.lang as "hu" | "en"] ?? langMap;
    return (
        <div>
            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Helmet>
            <h1>Welcome to the Home Page</h1>
            <p>Language: {params.lang}</p>
        </div>
    );
}