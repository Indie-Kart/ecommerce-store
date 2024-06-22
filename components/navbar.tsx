import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b fixed top-0 left-0 z-50 bg-white w-full overflow-auto">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">IndieKart</p>
          </Link>
          <MainNav data={categories} />
          <div className="flex items-center gap-x-4">
            <NavbarActions />
            <Link href="/login" passHref>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition-all duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
