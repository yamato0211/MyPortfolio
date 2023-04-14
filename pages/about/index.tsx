import Navbar from "@/Components/Navbar/Navigation";
import styles from "../../styles/about.module.css"

const mainStyles = {
  padding: "2rem",
  width: "50%",
  margin: "0 auto"
};

const headingStyles = {
  fontWeight: "bold",
  fontSize: "1.5rem",
};

const titleStyles = {
    fontSize: "3rem",
    color: "white",
}

const infoStyles = {
  marginBottom: "2rem",
  marginTop: "2rem",
};

const labelStyles = {
  fontWeight: "bold",
  marginRight: "1.5rem",
};

const valueStyles = {
  fontSize: "1.5rem",
  color: "white",
};


export default function About() {
    return (
        <div className={styles.aboutMain}>
            <div>
                <Navbar />
            </div>
            <main style={mainStyles}>
                <h1 style={titleStyles}>About</h1>
                <div style={infoStyles}>
                    <h2 style={headingStyles}>Profile</h2>
                    <div>
                        <span style={labelStyles}>Name:</span>
                        <span style={valueStyles}>熊谷 峰大</span>
                    </div>
                    <div>
                        <span style={labelStyles}>University:</span>
                        <span style={valueStyles}>九州工業大学</span>
                    </div>
                    <div>
                        <span style={labelStyles}>Year:</span>
                        <span style={valueStyles}>学部3年生</span>
                    </div>
                </div>
                <div style={infoStyles}>
                    <h2 style={headingStyles}>Programming</h2>
                    <div>
                        <span style={labelStyles}>Favorite Language:</span>
                        <span style={valueStyles}>Go, TypeScript, Python</span>
                    </div>
                    <div>
                        <span style={labelStyles}>Skills:</span>
                        <span style={valueStyles}>Go, TypeScript, Python, Rust, Docker, Cloud</span>
                    </div>
                </div>
                <div style={infoStyles}>
                    <h2 style={headingStyles}>Links</h2>
                    <div>
                        <span style={labelStyles}>Github:</span>
                        <span style={valueStyles}><a target="_blank" href="https://github.com/yamato0211">https://github.com/yamato0211</a></span>
                    </div>
                    <div>
                        <span style={labelStyles}>Qiita:</span>
                        <span style={valueStyles}><a target="_blank" href="https://qiita.com/yamato0211">https://qiita.com/yamato0211</a></span>
                    </div>
                </div>
            </main>
        </div>
    )
}