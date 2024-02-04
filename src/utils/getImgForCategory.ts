import react from "../assets/icons/react/React.svg";
import docker from "../assets/icons/docker/docker.svg";
import aws from "../assets/icons/aws/aws.svg";
import css from "../assets/icons/css/css.svg";
import js from "../assets/icons/js/Javascript Logo.svg";
import python from "../assets/icons/python/Python.svg";
import html from "../assets/icons/html/HTML Logo.svg";
import git from "../assets/icons/git/github logo.svg";
import django from "../assets/icons/django/Vector.svg";
import password from "../assets/icons/password/password.svg";
import github from "../assets/icons/github/img.svg";
import instagram from "../assets/icons/insta/insta.svg";

function getImgForCategory(category: string) {
  switch (category) {
    case "REACT": {
      return react;
    }
    case "DOCKER": {
      return docker;
    }
    case "AWS": {
      return aws;
    }
    case "CSS": {
      return css;
    }
    case "JS": {
      return js;
    }
    case "PYTHON": {
      return python;
    }
    case "HTML": {
      return html;
    }
    case "GIT": {
      return git;
    }
    case "DJANGO": {
      return django;
    }
    case "github": {
      return github;
    }
    case "instagram": {
      return instagram;
    }
    case "password": {
      return password;
    }
  }
}

export default getImgForCategory;
