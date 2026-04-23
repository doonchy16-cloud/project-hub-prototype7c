# Prototype 7

Prototype 7 adds:
- joinable projects
- project-based chat rooms
- global community chat opt-in
- direct messages to project owners
- a shared Chats page with User and AI tabs
- avatar selection or upload during onboarding
- an AI chat route that uses OpenAI when configured

## Deploy

This project is ready to deploy as a standard Next.js app on Vercel.

1. Upload or import the project folder.
2. Keep the default Vercel settings for a Next.js app.
3. Add `OPENAI_API_KEY` in Project Settings > Environment Variables.
4. Deploy.

## Future backend integration

The current user-to-user chat is local-state based for demo safety.
It is structured so the next step can connect to Supabase, Firebase, or a custom API with real-time sync and presence.


## OpenAI setup

1. Add `OPENAI_API_KEY` to your Vercel environment variables.
2. Redeploy the project.
3. The AI chat route at `app/api/ai-chat/route.ts` will use OpenAI automatically when the key is present.
