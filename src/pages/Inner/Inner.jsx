import React, { useState, useEffect } from "react";
import "./Inner.css";
import Box from "../../components/Box/Box";
import Panel from "../../components/Panel/Panel";
import TimeLine from "../../components/TimeLine/TimeLine";
import Expertise from "../../components/Expertise/Expertise";
import Portfolio from "../../components/Portfolio/Portfolio";
import Address from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";
import Button from "../../components/Button/Button";
import iconUp from "./../../assets/images/icon-up.svg";
import Skills from "../../components/Skills/Skills";

const ExpertiseData = [
  {
    date: "2013-2014",
    info: {
      company: "Google",
      job: "Front-end developer / php programmer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil",
    },
  },
  {
    date: "2012",
    info: {
      company: "Twitter",
      job: "Web developer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil",
    },
  },
];

const feedbackData = [
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    reporter: {
      photoUrl:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      name: "John Doe",
      citeUrl: "https://www.citeexample.com",
    },
  },
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    reporter: {
      photoUrl:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      name: "Jane Smith",
      citeUrl: "https://www.citeexample.com",
    },
  },
];

function Inner() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      const sections = document.querySelectorAll("section.content > div[id]");
      const newActiveSection = Array.from(sections).find((section) => {
        const { offsetTop, offsetHeight } = section;
        return (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        );
      });
      setActiveSection(newActiveSection ? newActiveSection.id : null);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="inner-wrapper">
      <div className="inner-container">
        <Panel
          currentSection={activeSection}
          isOpen={isOpen}
          togglePanel={togglePanel}
        />
        <section className={`content ${isOpen ? "panel-open" : ""}`}>
          <Box
            title="About me"
            id="about-me"
            isActive={activeSection === "about-me"}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque
          </Box>
          <Box
            title="Education"
            id="education"
            isActive={activeSection === "education"}
          >
            <TimeLine></TimeLine>
          </Box>
          <Box
            title="Experience"
            id="experience"
            isActive={activeSection === "experience"}
          >
            <Expertise data={ExpertiseData}></Expertise>
          </Box>
          <Box
            buttonInside={toggleForm}
            title="Skills"
            id="skills"
            isActive={activeSection === "skills"}
          >
            <Skills isFormVisible={isFormVisible}></Skills>
          </Box>
          <Box
            title="Portfolio"
            id="portfolio"
            isActive={activeSection === "portfolio"}
          >
            <Portfolio></Portfolio>
          </Box>
          <Box
            title="Contacts"
            id="contacts"
            isActive={activeSection === "contacts"}
          >
            <Address></Address>
          </Box>
          <Box
            title="Feedbacks"
            id="feedbacks"
            isActive={activeSection === "feedbacks"}
          >
            <Feedback data={feedbackData} />
          </Box>
        </section>
      </div>
      <Button img={iconUp} style={"button-up"} onClick={scrollToTop}></Button>
    </div>
  );
}

export default Inner;
