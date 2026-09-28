import NotFoundContent from "../components/NotFoundContent";

export const metadata = {
  title: "404 - Page Not Found | Tuoora ERP",
  description: "Looks like you're trying to access a page that doesn't exist or has been moved. Return to Tuoora ERP home.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
