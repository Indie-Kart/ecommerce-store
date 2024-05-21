const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
