export const Footer = () => {
  return (
    <footer className="flex border-t justify-between font-medium p-6 mt-auto">
      <div className=" px-4">
        <p>&copy; {new Date().getFullYear()} Iweka. All rights reserved.</p>
      </div>
    </footer>
  );
};