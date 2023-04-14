import Link from "next/link"

const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  borderBottom: "1px solid #000",
};

const navBrandStyles = {
  fontWeight: "bold",
  fontSize: "2rem",
  marginLeft: "0.5rem",
  color: "#fff",
};

const navLinkStyles = {
  margin: "0 2rem",
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.8rem",
};

const Navigation = () => {
    const collapseItems = [
        "Top",
        "About",
        "Blog"
    ]
    const ItemToPath = (elm: string) => {
        switch(elm) {
            case "Top":
                return "/"
            case "About":
                return "/about"
            case "Blog":
                return "/blog"
            default:
                return "/"
        }
    }
    return (
        <nav style={navStyles}>
        <div style={navBrandStyles}>
          <h1>Portfolio</h1>
        </div>
        <div>
          <Link href="/" legacyBehavior>
            <a style={navLinkStyles}>Top</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a style={navLinkStyles}>About</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a style={navLinkStyles}>Blog</a>
          </Link>
        </div>
      </nav>
    )
}

export default Navigation