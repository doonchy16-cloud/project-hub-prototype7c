"use client";

import Link from "next/link";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";

export default function WelcomePage() {
  const [appStage] = useLocalStorageState<string>(
    "project-hub-app-stage",
    "signin_profile"
  );

  const isSignedIn = appStage === "app";

  return (
    <div>
      <header className="flex items-center justify-between">
        <div>Project Hub</div>

        <div className="flex gap-3">
          {isSignedIn ? (
            <Link
              href="/app"
              className="rounded-full border px-4 py-2 text-sm font-medium"
            >
              Open App
            </Link>
          ) : (
            <>
              <Link
                href="/app?mode=login"
                className="rounded-full border px-4 py-2 text-sm font-medium"
              >
                Log In
              </Link>
              <Link
                href="/app?mode=signup"
                className="rounded-full px-4 py-2 text-sm font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </header>

      {/* rest of your welcome page */}
    </div>
  );
}
