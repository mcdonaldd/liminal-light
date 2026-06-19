# Dev Setup — Nathan

This gets you running locally with the full Sanity CMS connected.

---

## 1. Install Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

Restart your terminal after.

---

## 2. Clone the repo

```bash
git clone https://github.com/mcdonaldd/liminal-light.git
cd liminal-light
bun install
```

---

## 3. Create your `.env.local`

Create a file called `.env.local` in the project root (same level as `package.json`) with these values:

```
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_SANITY_PROJECT_ID="e143l761"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="[ask David for this]"
```

> The read token is sensitive — David will send it to you separately.

---

## 4. Add yourself to Sanity CORS

Go to [sanity.io/manage](https://sanity.io/manage) → select the **Liminal Light** project → API → CORS Origins → **+ Add CORS origin**

- Origin: `http://localhost:3000`
- Allow credentials: **yes**

---

## 5. Start the dev server

```bash
bun run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Studio (CMS): [http://localhost:3000/admin](http://localhost:3000/admin)

The first time you open the Studio it may prompt you to connect it — click **Add development host** and follow the flow (it takes you back to Sanity to confirm, then redirects you back).

---

## 6. You're in

The Studio is where you edit all site content. The site hot-reloads as you make changes.

For code changes, the usual Git flow applies — branch off `main`, PR back in.
