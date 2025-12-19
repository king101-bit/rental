import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-3">Browse</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <Link
                href="/listings?type=rent"
                className="hover:text-foreground"
              >
                Rent
              </Link>
              <Link href="/listings?type=buy" className="hover:text-foreground">
                Buy
              </Link>
              <Link href="/agents" className="hover:text-foreground">
                Agents
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">List</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <Link href="/upload" className="hover:text-foreground">
                Add Property
              </Link>
              <Link href="/register" className="hover:text-foreground">
                Register
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Areas</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <span>Wuse</span>
              <span>Maitama</span>
              <span>Garki</span>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Support</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <span>Help Center</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          Domora
        </div>
      </div>
    </footer>
  );
}
