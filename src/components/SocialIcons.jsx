const SocialIcons = () => {
    const styles = {
      icon: {
        textDecoration: "none",
        fontSize: "22px",
        padding: "10px",
        transition: "0.2s ease-in",
      },
    };
  
    return (
      <div className="socialIcons" style={styles.socialIcons}>
        <a className="icon" style={styles.icon} href="https://github.com/hellphoenix87">
          <i className="fa-brands fa-github" aria-hidden="true" title="Goran Tanasic' GitHub Profile"></i>
        </a>
        <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/goran-tanasic-5062b713b/">
          <i className="fa-brands fa-linkedin" aria-hidden="true" title="Goran Tanasic' LinkedIn Profile"></i>
        </a>
      </div>
    );
  };
  
  export default SocialIcons;
  