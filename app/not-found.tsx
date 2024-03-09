import Link from "next/link";

export default function notFound() {
  return (
    <div className="not">
      <div className="found">
        <h1 className="noth1">404</h1>
        <h2 className="noth2">Page not found</h2>
        <p className="notp">
          The page you are looking for doesnt exist or has been moved
        </p>
        <Link className="notbutton" href="/">
          Go To Home Page
        </Link>
      </div>
    </div>
  );
}
