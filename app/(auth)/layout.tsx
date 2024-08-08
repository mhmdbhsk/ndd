import { IconBrandJustd } from 'justd-icons';
import { Link } from 'ui';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/20">
      <div className="mx-auto w-full max-w-lg">
        <Link href="/" className="mx-auto mb-6 grid size-10 place-content-center rounded bg-secondary">
          <IconBrandJustd className="size-5" />
        </Link>
        {children}
      </div>
    </div>
  );
}
