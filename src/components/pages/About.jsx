import {Link} from "react-router-dom";
function About() {
  return (
    <>
      <h1 className="text-5xl underline my-4">Github Funder</h1>
      <p className="ml-2">
        GitHub Finder is a web app that uses GitHub API to fetch user data from
        the GitHub database and display a user's information including the
        number of public repositories, the number of forks, starred
        repositories, among others.
      </p>
      <p className="text-sm mt-2 ml-2 font-bold">Version : <span className="font-light text-white font-mono">1.0.0</span></p>
      <Link to='/' className="btn ml-2 btn-sm mt-2 animate-pulse">Go Back</Link>
    </>
  );
}

export default About;
