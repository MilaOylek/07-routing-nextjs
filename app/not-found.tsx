"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NotFound;

// import css from "./not-found.module.css";

// export default function NotFound() {
//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>404 - Page not found</h1>
//       <p className={css.description}>
//         Sorry, the page you are looking for does not exist.
//       </p>
//     </div>
//   );
// }
