# Serverless Photography Portfolio

## Architecture Overview
- **Philosophy**: "Headless" Content Management. You manage assets on a third-party platform (Cloudinary), and the website simply pulls and displays them.
- **Frontend**: Next.js (App Router). Chosen for its ability to hide API keys server-side and its superior image optimization features.
- **Backend/CMS**: Cloudinary Media Console. (No custom backend code required).
- **Database**: None. (Data is derived directly from file metadata).
- **Hosting**: Vercel (Zero-configuration deployment for Next.js).
- **Contact Form**: Formspree or EmailJS (API-based email handling).

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React or React Icons

## Feature Highlights
- **Masonry Grid**: Responsive grid for mixed aspect ratios.
- **Infinite Scroll**: Fetches new images as you scroll.
- **Performance**: Server-side initial fetch, blur placeholders, auto webp/avif.
- **Lightbox**: Modal view with backdrop blur.

## Setup & Configuration

### 1. Cloudinary Setup
1. Create a Cloudinary account.
2. Create a folder named `portfolio-live`. Only images in this folder will be shown.
3. Configure **Upload Preset**:
    - Max width: 2500px (or similar web-friendly size).
    - Strip GPS data.
4. **Ordering**: Rename files `001_hero.jpg`, `002_portrait.jpg`, etc., to control sort order.

### 2. Environment Variables
Create a `.env.local` file with the following:

```bash
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourhandle
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret # (Keep this private!)
```

### 3. Development
```bash
npm install
npm run dev
```

## API Logic
The internal API route `/api/photos` acts as a secure bridge.
1. Frontend requests `/api/photos?cursor=XYZ`.
2. Server uses `cloudinary` SDK with Secret Key to fetch images from `portfolio-live`.
3. Returns JSON list of image URLs and `next_cursor`.

## Roadmap
- [ ] **Phase 1**: Setup Cloudinary & Next.js.
- [ ] **Phase 2**: Connect Data (API Route).
- [ ] **Phase 3**: Build UI (Masonry Grid, Infinite Scroll).
- [ ] **Phase 4**: Optimization (Lightbox, Contact Form, Deploy).
