import react from "../assets/icons/react/React.svg";
import docker from "../assets/icons/docker/docker.svg";
import aws from "../assets/icons/aws/aws.svg";
import css from "../assets/icons/css/css.svg";
import js from "../assets/icons/js/Javascript Logo.svg";
import python from "../assets/icons/python/Python.svg";
import html from "../assets/icons/html/HTML Logo.svg";
import git from "../assets/icons/git/github logo.svg";
import django from "../assets/icons/django/Vector.svg";

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
  }
}

export default getImgForCategory;
