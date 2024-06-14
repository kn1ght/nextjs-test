import { HomePage } from "./_components/HomePage";

export const revalidate = 10;

export default function Page() {
  return (
    <main>
      <h1 className="text-center text-4xl">My cool blog</h1>
      <HomePage />
    </main>
  );
}
